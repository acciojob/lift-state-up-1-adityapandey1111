import React from 'react';

const ChildComponent = ({ showModal, onButtonClick }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <button  className='btn' onClick={onButtonClick}>Show Modal</button>
      {showModal && <h3 className='display'>Model Content</h3>}
      {showModal && <p className='answer'>This is the model content.</p>}
    </div>
  );
};

export default ChildComponent;
