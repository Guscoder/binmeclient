import React, { useState } from "react";
import SubmitBinForm from "./SubmitBinForm";
import "./tableRow.css";
import * as API from "../utils/api";
import BinTable from "./BinTable";

const ViewBin = () => {
  const [binContents, setBinContents] = useState([]);
  const [binId, setBinId] = useState("");

  const binIdHandler = (e) => {
    setBinId(e.target.value);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    if (binId === "") {
      alert("Please input your Bin Id");
    }
    let contents = await API.viewBin(binId).catch((error) => {
      console.log(error);
    });
    console.log(contents);
    setBinContents(contents.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='mt-3 text-primary'>
          <strong>Enter bin id:</strong>
        </h1>
        <SubmitBinForm
          formSubmit={formHandler}
          binId={binId}
          binIdHandler={binIdHandler}
        />
      </div>
      <div className='row'>
        {binContents.length > 0 ? (
          <BinTable requests={binContents} binId={binId} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ViewBin;
