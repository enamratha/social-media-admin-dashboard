import React from "react";

const KpiContext = React.createContext({
  postsData: [
    {
      day: "5 Aug",
      postsPublished: 130,
    },
    {
      day: "6 Aug",
      postsPublished: 163,
    },
    {
      day: "7 Aug",
      postsPublished: 180,
    },
    {
      day: "8 Aug",
      postsPublished: 100,
    },
    {
      day: "9 Aug",
      postsPublished: 200,
    },
  ],
  totalPosts: 773,
  userData: [
    {
      day: "5 Aug",
      totalUsers: 160,
    },
    {
      day: "6 Aug",
      totalUsers: 185,
    },
    {
      day: "7 Aug",
      totalUsers: 190,
    },
    {
      day: "8 Aug",
      totalUsers: 196,
    },
    {
      day: "9 Aug",
      totalUsers: 204,
    },
  ],
  totalUsers: 204,
  activeUsers: 106,
});

export default KpiContext;
