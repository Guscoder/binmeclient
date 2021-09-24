import React from "react";
import "./tableRow.css";

const TableRow = ({ subject, value }) => {
  return (
    <tr>
      <td style={{ fontWeight: "bold" }}>{subject}</td>
      <td>{value}</td>
    </tr>
  );
};

export default TableRow;
