import java.util.List;

public class Main {

    public static void main(String[] args) {

        NotificationService service = new NotificationService();

        List<Notification> notifications =
                service.fetchNotifications();

        PriorityInbox inbox = new PriorityInbox();

        List<Notification> top10 =
                inbox.getTop10(notifications);

        System.out.println("========================================");
        System.out.println("TOP 10 PRIORITY NOTIFICATIONS");
        System.out.println("========================================");

        int rank = 1;

        for (Notification notification : top10) {

            System.out.println(
                    rank + ". " +
                    notification
            );

            rank++;
        }
    }
}