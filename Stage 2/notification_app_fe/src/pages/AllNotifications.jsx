import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Pagination,
  Alert
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import { fetchNotifications } from "../services/api";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    loadNotifications();
  }, [page, limit, type]);

  const loadNotifications = async () => {
    try {
      const data = await fetchNotifications(
        page,
        limit,
        type
      );

      setNotifications(data.notifications || []);
      setError("");
    } catch (err) {
      setError("Failed to load notifications");
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

    loadNotifications();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        All Notifications
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

      <Pagination
        sx={{ mt: 3 }}
        count={10}
        page={page}
        onChange={(e, value) =>
          setPage(value)
        }
      />
    </Container>
  );
}

export default AllNotifications;