import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ShowLanguage from "./LanguageInstructions";
import * as API from "../utils/api";

const CreateBin = () => {
  const [newbinId, setNewBinId] = useState("");

  const handleClick = async () => {
    let binId = await API.createNewBin();
    setNewBinId(binId);
  };

  return (
    <div className='container mt-5 text-center'>
      <h3 className='mb-5 display-8'>
        Click the button below to create a new bin:
      </h3>
      <Button onClick={handleClick} className='mb-5'>
        Create New Bin
      </Button>
      {newbinId ? (
        <div className='mb-5'>
          <h3>Your Bin ID is:</h3>
          <p class='display-6 text-primary fw-bold'>{newbinId}</p>
          <h3>Give this link to your webhook provider:</h3>
          <p class='display-6 text-primary fw-bold'>
            https://binme.jtwgus.net/bins/{newbinId}
          </p>
          <ShowLanguage binId={newbinId} />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CreateBin;
