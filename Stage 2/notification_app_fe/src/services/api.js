export async function fetchNotifications(
  page = 1,
  limit = 10,
  type = ""
) {
  const data = {
    notifications: [
      {
        ID: "1",
        Type: "Placement",
        Message: "TCS Recruitment",
        Timestamp: "2026-04-22 17:59:06"
      },
      {
        ID: "2",
        Type: "Placement",
        Message: "Infosys Hiring",
        Timestamp: "2026-04-22 17:58:06"
      },
      {
        ID: "3",
        Type: "Result",
        Message: "Semester Result",
        Timestamp: "2026-04-22 17:52:30"
      },
      {
        ID: "4",
        Type: "Event",
        Message: "Cultural Fest",
        Timestamp: "2026-04-22 17:57:06"
      },
      {
        ID: "5",
        Type: "Placement",
        Message: "Google Recruitment",
        Timestamp: "2026-04-22 17:54:06"
      }
    ]
  };

  let notifications = data.notifications;

  if (type) {
    notifications = notifications.filter(
      (n) => n.Type === type
    );
  }

  return {
    notifications: notifications.slice(0, limit)
  };
}