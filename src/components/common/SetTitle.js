import React from "react";
export default function ({ title }) {
  React.useEffect(() => {
    document.title = title;
  }, []);
  return null;
}
