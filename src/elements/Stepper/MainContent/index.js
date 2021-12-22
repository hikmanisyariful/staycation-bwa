import React from "react";

export default function MainContent({ data, current }) {
  console.log("PROPS MAINCONTENT", data, current);
  return <>{data[current] && data[current].content}</>;
}
