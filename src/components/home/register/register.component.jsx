import { useEffect } from "react";

function Register() {
  const data = {
    email: "skjel2@skjel.com",
    username: "22",
    password: "22",
  };

  function sendLogin() {
    fetch("https://twire-backend.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => res);
  }

  return (
   <div></div>
  );
}

export default Register;
