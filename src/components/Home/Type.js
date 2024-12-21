import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Backend Specialist (Laravel, Django, Ruby, Node.js)",
          "Frontend Enthusiast (React, Vue.js, Angular)",
          "Database Architect (MySQL, PostgreSQL, MongoDB)",
          "API Integration",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
