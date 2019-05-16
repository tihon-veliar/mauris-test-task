import React from "react";
import { H3 } from "rambler-ui/Typography";

const ErrorBun = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <img
        alt="boom"
        style={{ width: "40%" }}
        src="https://vignette.wikia.nocookie.net/uncyclopedia/images/1/1a/Boom.png/revision/latest?cb=20120306122909"
      />
      <H3 style={{ textAlign: "center" }}>Что то пошло не так</H3>
    </div>
  );
};

export default ErrorBun;
