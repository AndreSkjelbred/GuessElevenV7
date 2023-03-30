import { useEffect } from "react";

function Login() {
  const data = {
    username: "22",
    password: "22",
  };

  function sendLogin() {
    fetch("https://twire-backend.onrender.com/login", {
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
    <div className="btn-container">
      <button className='lgn-btn login' onClick={sendLogin}>
        LOGIN
      </button>
    </div>
  );
}

export default Login;
