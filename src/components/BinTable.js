import React from "react";
import RequestTable from "./RequestTable";

const BinTable = (props) => {
  return (
    <div className='container mt-5'>
      {props.requests.map((req, index) => {
        return <RequestTable key={index} request={req} binId={props.binId} />;
      })}
    </div>
  );
};

export default BinTable;
