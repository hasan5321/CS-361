import React from "react";

export default function UserHomepage({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };
  return (
    <div>
      Email <h1>{userData.email}</h1>
      <br />
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>
    </div>
  );
}
