import { useLocation, useNavigate } from "react-router-dom";
import { CustomNotification } from "../../@types/notification";
import { markAsRead } from "../../services/api";

const ViewNotification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const notification = location.state as CustomNotification;

    const readNotification = async (notification: CustomNotification) => {
        if (!notification.read) {
            await markAsRead(notification.id);
        }
        navigate('/')

    };

    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold">Notification Detail</h2>

            <div className="flex flex-row gap-4 items-center" key={notification.id}>
                <p className={`${notification.read ? 'line-through' : 'none'}`}>{notification.message}</p>
                <button onClick={() => readNotification(notification)}>{notification.read ? 'Read' : 'Mark As Read'}</button>
            </div>
        </div>
    )
}

export default ViewNotification