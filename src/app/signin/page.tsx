"use client";  

import React, { useEffect } from "react";

const Signin: React.FC = () => {
  

  const CLIENT_ID = "Iv23liNQWnfjsBht4RLH";
  const githubAccess = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID
    );
  };

  useEffect(() => {
    const queryString = window.location.search;  
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get("code");
    console.log(codeParam);
  }, []);
  return (
    <div className="flex justify-center items-center h-full">
      <button onClick={githubAccess}>signin with github</button>
    </div>
  );
};

export default Signin;
