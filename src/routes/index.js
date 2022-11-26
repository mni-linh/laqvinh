import React from "react";
import Wallet from "../pages/Wallet";
import Market from "../pages/Market";
const dataDating = [
  {
    path: "/wallet",
    elment: <Wallet />,
    name: "Wallet",
  },
  {
    path: "./market",
    elment: <Market />,
    name: "Market",
  },
];

export default dataDating;
