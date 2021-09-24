import React, { useState } from "react";
import SubmitBinForm from "./SubmitBinForm";
import Row from "react-bootstrap/Row";
import "./tableRow.css";

import Table from "react-bootstrap/table";
import * as API from "../utils/api";
import BinTable from "./BinTable";

// const createRequestTables = (requests, title) => {
//   return (
//     <>
//       <Row>
//         <h2>Request Bin Id: {title}</h2>
//       </Row>
//       {requests.map((request) => {
//         return (
//           <Row>
//             <div className='col-lg-5'>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th colSpan='2'>Hi</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th>Subject</th>
//                     <th>Data</th>
//                   </tr>
//                   {Object.keys(request.payload).map((item, idx) => {
//                     return (
//                       <tr>
//                         <td>{item}</td>
//                         <td>{request.payload[item]}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </Table>
//             </div>
//             <div className='col-lg-5'>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>Subject</th>
//                     <th>Data</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {Object.keys(request.headers).map((header, idx) => {
//                     return (
//                       <tr>
//                         <td>{header}</td>
//                         <td>{request.headers[header]}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </Table>
//             </div>
//           </Row>
//         );
//       })}
//     </>
//   );
// };

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
    let contents = await API.viewBin(binId);
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
