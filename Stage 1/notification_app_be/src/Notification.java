public class Notification {

    private String id;
    private String type;
    private String message;
    private String timestamp;
    private long score;

    public Notification(String id, String type, String message, String timestamp) {
        this.id = id;
        this.type = type;
        this.message = message;
        this.timestamp = timestamp;
    }

    public String getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public String getMessage() {
        return message;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "Type: " + type +
                " | Message: " + message +
                " | Timestamp: " + timestamp;
    }
}