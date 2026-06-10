import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class PriorityInbox {

    private int getWeight(String type) {

        switch (type.toLowerCase()) {
            case "placement":
                return 3;

            case "result":
                return 2;

            case "event":
                return 1;

            default:
                return 0;
        }
    }

    private long calculateScore(Notification notification) {

        DateTimeFormatter formatter =
                DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        LocalDateTime notificationTime =
                LocalDateTime.parse(notification.getTimestamp(), formatter);

        long ageInSeconds =
                Duration.between(notificationTime, LocalDateTime.now())
                        .getSeconds();

        return (long) getWeight(notification.getType()) * 1_000_000
                - ageInSeconds;
    }

    public List<Notification> getTop10(List<Notification> notifications) {

        PriorityQueue<Notification> minHeap =
                new PriorityQueue<>(Comparator.comparingLong(Notification::getScore));

        for (Notification notification : notifications) {

            long score = calculateScore(notification);
            notification.setScore(score);

            minHeap.offer(notification);

            if (minHeap.size() > 10) {
                minHeap.poll();
            }
        }

        List<Notification> result = new ArrayList<>(minHeap);

        result.sort((a, b) ->
                Long.compare(b.getScore(), a.getScore()));

        return result;
    }
}