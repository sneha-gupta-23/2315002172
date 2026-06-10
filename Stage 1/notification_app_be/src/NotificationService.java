import java.util.ArrayList;
import java.util.List;

public class NotificationService {

    public List<Notification> fetchNotifications() {

        List<Notification> notifications = new ArrayList<>();

        notifications.add(new Notification(
                "1",
                "Placement",
                "CSX Corporation hiring",
                "2026-04-22 17:51:18"));

        notifications.add(new Notification(
                "2",
                "Result",
                "Mid Sem Result",
                "2026-04-22 17:51:30"));

        notifications.add(new Notification(
                "3",
                "Event",
                "Farewell",
                "2026-04-22 17:51:06"));

        notifications.add(new Notification(
                "4",
                "Placement",
                "Amazon Hiring Drive",
                "2026-04-22 17:52:18"));

        notifications.add(new Notification(
                "5",
                "Result",
                "Semester Result",
                "2026-04-22 17:52:30"));

        notifications.add(new Notification(
                "6",
                "Event",
                "Hackathon",
                "2026-04-22 17:53:06"));

        notifications.add(new Notification(
                "7",
                "Placement",
                "Google Recruitment",
                "2026-04-22 17:54:06"));

        notifications.add(new Notification(
                "8",
                "Placement",
                "Microsoft Recruitment",
                "2026-04-22 17:55:06"));

        notifications.add(new Notification(
                "9",
                "Result",
                "Practical Marks Uploaded",
                "2026-04-22 17:56:06"));

        notifications.add(new Notification(
                "10",
                "Event",
                "Cultural Fest",
                "2026-04-22 17:57:06"));

        notifications.add(new Notification(
                "11",
                "Placement",
                "Infosys Hiring",
                "2026-04-22 17:58:06"));

        notifications.add(new Notification(
                "12",
                "Placement",
                "TCS Recruitment",
                "2026-04-22 17:59:06"));

        return notifications;
    }
}