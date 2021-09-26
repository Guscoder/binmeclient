import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ShowLanguage from "./LanguageInstructions";
import * as API from "../utils/api";

const CreateBin = () => {
  const [newbinId, setNewBinId] = useState("");
  const [error, setErrorMessage] = useState("");

  const handleClick = async () => {
    setNewBinId("");
    console.log(newbinId);
    let binId = await API.createNewBin();
    console.log(newbinId);

    if (binId) {
      setNewBinId(binId);
    } else {
      setErrorMessage("We're sorry, there was an error in bin creation.");
    }
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
          <p class='display-6 text-primary fw-bold border bg-warning pd-3'>
            {newbinId}
          </p>
          <h3>Give this link to your webhook provider:</h3>
          <p class='display-6 text-primary fw-bold border bg-warning pd-3'>
            http://binme.jtwgus.com/bins/{newbinId}
          </p>
          <ShowLanguage binId={newbinId} />
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default CreateBin;
