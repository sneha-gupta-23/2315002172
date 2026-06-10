import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack
} from "@mui/material";

function NotificationCard({ notification, onView }) {
  const viewedIds =
    JSON.parse(localStorage.getItem("viewedNotifications")) || [];

  const viewed = viewedIds.includes(notification.ID);

  const handleClick = () => {
    onView(notification.ID);
  };

  return (
    <Card
      sx={{ mb: 2, cursor: "pointer" }}
      onClick={handleClick}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          mb={1}
        >
          <Chip
            label={notification.Type}
            color="primary"
          />

          <Chip
            label={viewed ? "Viewed" : "New"}
            color={viewed ? "default" : "success"}
          />
        </Stack>

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography color="text.secondary">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;