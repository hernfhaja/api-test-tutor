import React from "react";
import axios from "axios";

function createUser() {
  const medData = {
    uid: "6",
    date: "2021-09-01",
    time: "06:30",
    medDuration: "10",
    medMethod: "good 6",
    medFeelling: "nope",
    percentRelax: "250",
    percentFeelling: "70",
  };

  const medUpdateData = {
    id: "1",
    uid: "4",
    date: "2021-12-11",
    time: "11:30",
    medDuration: "300",
    medMethod: "a good update",
    medFeelling: "nope",
    percentRelax: "20",
    percentFeelling: "40",
  };

  const get = async () => {
    console.log("get function");

    try {
      await axios
        .get("https://tutor-service-api2.herokuapp.com/med/6")
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
        .post(
          "https://tutor-service-api2.herokuapp.com/med/update",
          medUpdateData
        )
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
        .post("https://tutor-service-api2.herokuapp.com/med/create", medData)
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={get}>Get Med Data</button>
      <button onClick={create}>med create</button>
      <button onClick={update}>med update</button>
    </div>
  );
}

export default createUser;
