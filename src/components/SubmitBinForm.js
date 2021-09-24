import React, { useState } from "react";

const SubmitBinForm = (props) => {
  return (
    <div className='container'>
      <form onSubmit={props.formSubmit}>
        <input
          type='text'
          placeholder='g87yhtdf56'
          name='binId'
          className='form-control'
          onChange={props.binIdHandler}
          value={props.binId}
        />
        <input type='submit' value='Submit' className='btn btn-primary mt-3' />
      </form>
    </div>
  );
};

export default SubmitBinForm;
