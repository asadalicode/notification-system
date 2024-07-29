import { useEffect, useState } from "react";
import { createNotification, getNotifications, markAsRead } from "../../services/api";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config/firebaseConfig";
import { CustomNotification } from "../../@types/notification";
import { useNavigate } from "react-router-dom";

const CreateNotification = () => {
    // State to hold the list of notifications
  const [notifications, setNotifications] = useState<CustomNotification[]>([]);

  // Hook to programmatically navigate users to different routes
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch notifications from Firestore and update the state
    const fetchNotifications = async () => {
      const notifications = await getNotifications();
      setNotifications(notifications);
    };

    // Fetch notifications initially
    fetchNotifications();

    // Set up a real-time listener for changes to the 'notifications' collection
    const unsubscribe = onSnapshot(collection(db, "notifications"), () => {
      fetchNotifications(); // Update notifications on any change
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount



  // Function to handle button click for creating a notification
  const handleNotificationCreation = async (message: string) => {
    await createNotification(message);
  };


  // Function to navigate to the notification view page with the notification's details
  const viewNotification = async (notification: CustomNotification) => {
    navigate('/view-notification', { state: notification })
  };

  // Function to mark a notification as read and update the state
  const readNotification = async (id: string) => {
    // Immediate update on the UI
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    await markAsRead(id);
  };

  return (
    <section className="flex flex-col gap-10 items-center">
      <div className="flex flex-row gap-x-3">
        <button className="bg-green-500 text-white" onClick={() => handleNotificationCreation('Notification 1')}>Send Notification 1</button>
        <button className="bg-green-700 text-white" onClick={() => handleNotificationCreation('Notification 2')}>Send Notification 2</button>
        <button className="bg-green-900 text-white" onClick={() => handleNotificationCreation('Notification 3')}>Send Notification 3</button>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-semibold">Notifications List</h2>
        {notifications.map((notification) => (
            <div className="flex flex-row gap-4 items-center" key={notification.id}>
              <p className="text-lg" style={{ textDecoration: notification.read ? 'line-through' : 'none' }}
              >{notification.message}</p>
              <div className="">
                <button onClick={() => viewNotification(notification)}>View Notification</button>
                <button onClick={() => readNotification(notification.id)}>{notification.read ? 'Viewed' : 'Mark As Read'}</button>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default CreateNotification;