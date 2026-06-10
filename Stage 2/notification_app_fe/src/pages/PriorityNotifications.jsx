import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Alert
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import { fetchNotifications } from "../services/api";

function PriorityNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [limit, setLimit] = useState(10);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const getWeight = (notificationType) => {
    switch (notificationType) {
      case "Placement":
        return 3;

      case "Result":
        return 2;

      case "Event":
        return 1;

      default:
        return 0;
    }
  };

  useEffect(() => {
    loadPriorityNotifications();
  }, [limit, type]);

  const loadPriorityNotifications = async () => {
    try {
      const data = await fetchNotifications(
        1,
        50,
        type
      );

      const sorted = (
        data.notifications || []
      ).sort((a, b) => {
        const weightDiff =
          getWeight(b.Type) -
          getWeight(a.Type);

        if (weightDiff !== 0)
          return weightDiff;

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      });

      setNotifications(
        sorted.slice(0, limit)
      );

      setError("");
    } catch (err) {
      setError(
        "Failed to load priority notifications"
      );
    }
  };

  const markViewed = (id) => {
    let viewed =
      JSON.parse(
        localStorage.getItem("viewedNotifications")
      ) || [];

    if (!viewed.includes(id)) {
      viewed.push(id);

      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(viewed)
      );
    }

    loadPriorityNotifications();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        Priority Inbox
      </Typography>

      <FilterBar
        type={type}
        setType={setType}
        limit={limit}
        setLimit={setLimit}
      />

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
          onView={markViewed}
        />
      ))}
    </Container>
  );
}

export default PriorityNotifications;