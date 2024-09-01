import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["QA Engineer", "YouTube Audio Story Writer", "Web Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
