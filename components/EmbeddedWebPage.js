import React from "react";

export default ({ src, className }) => {
  return (
    <iframe
      src={src}
      className={["", className].join(" ")}
      style={{ height: "550px" }}
    ></iframe>
  );
};
