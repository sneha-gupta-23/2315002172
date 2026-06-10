# Stage 1 - Campus Notifications Priority Inbox

## Problem Statement

Users receive a large number of notifications and may miss important updates.

The objective is to display the Top 10 most important unread notifications.

---

## Priority Rules

Priority Order:

1. Placement
2. Result
3. Event

Within the same category, newer notifications receive higher priority.

---

## Priority Score Formula

score = (weight × 1000000) − ageInSeconds

Weights:

Placement = 3
Result = 2
Event = 1

---

## Data Structure Used

Min Heap (Priority Queue)

Heap Size = 10

---

## Algorithm

1. Fetch notifications.
2. Calculate score.
3. Insert into Min Heap.
4. If heap size exceeds 10:
   remove lowest priority notification.
5. Sort final heap in descending order.

---

## Complexity Analysis

Time Complexity:
O(N log 10)

Space Complexity:
O(10)

---

## Handling New Notifications

Whenever a new notification arrives:

1. Calculate score.
2. Insert into heap.
3. Remove minimum if size > 10.

This ensures efficient maintenance of Top 10 notifications in real time.