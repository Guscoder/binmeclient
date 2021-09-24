import React from "react";
import mainLogo from "../binme2.png";

const Home = () => {
  return (
    <div className='container mt-5'>
      <div className='jumbotron text-center bg-light pb-5 pt-5 rounded'>
        <img className='logo' src={mainLogo} alt='BinMe!' />

        <h1 className='display-4 text-primary fw-bold mt-4'>
          Gather Your HTTP Requests
        </h1>
        <p className='p-2'>
          BinMe! gives you a URL that will collect requests made to it and let
          you inspect them.{" "}
        </p>
        <p>
          Use BinMe! to see what your HTTP client is sending or to inspect and
          debug webhook requests. BinMe now!
        </p>
      </div>
    </div>
  );
};

export default Home;
