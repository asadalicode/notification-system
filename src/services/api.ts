// src/firebaseService.ts
import { db } from '../firebase/config/firebaseConfig';
import { collection, addDoc, updateDoc, doc, getDocs, query, orderBy } from 'firebase/firestore';
import { CustomNotification } from '../@types/notification';

// Reference to the 'notifications' collection in Firestore
const notificationsRef = collection(db, "notifications");

// Function to create a new notification
export const createNotification = async (message: string) => {
    const timestamp = Date.now();
    const docRef = await addDoc(notificationsRef, {
        message,
        timestamp,
        read: false,
      });
      return docRef.id;
};

// Function to mark a notification as read
export const markAsRead = async (id: string) => {
  const notificationRef = doc(db, "notifications", id);
  await updateDoc(notificationRef, { read: true });
};

// Function to fetch all notifications, sorted by timestamp
export const getNotifications = async (): Promise<CustomNotification[]> => {
    const q = query(notificationsRef, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    // 
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as CustomNotification[];
};