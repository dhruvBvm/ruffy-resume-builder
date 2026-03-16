import React, { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [data, setdata] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/image", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchData();
  });
  return (
    <div className="home">
      <h1>This is Home page.</h1>
    </div>
  );
};

export default Home;
