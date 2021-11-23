import React from "react";
import axios from "axios";

function createUser() {
  const loginData = {
    email: "hernfhaja3@gmail.com",
    password: "123456",
  };

  const userData = {
    id: "15",
    email: "hernfhaja155@gmail.com",
    password: "123456",
    name: "woramun",
    surname: "wattana",
    nickname: "hern",
    grade: "5",
    school: "samakkiwittaya",
    province: "chiangrai",
    phoneNumber: "0855270826",
  };

  const login = async () => {
    console.log("login function");

    try {
      await axios
        .post("https://tutor-service-api2.herokuapp.com/user/login", loginData)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const get = async () => {
    console.log("get function");

    try {
      await axios
        .get("https://tutor-service-api2.herokuapp.com/user/4")
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const update = async () => {
    console.log("update function");

    try {
      await axios
        .post("https://tutor-service-api2.herokuapp.com/user/update", userData)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async () => {
    console.log("create function");

    try {
      await axios
        .post("https://tutor-service-api2.herokuapp.com/user/create", userData)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={login}>login</button>
      <button onClick={get}>Get Data</button>
      <button onClick={create}>regis</button>
      <button onClick={update}>update</button>
    </div>
  );
}

export default createUser;
