import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent=()=>{
    let [showModal,setShowModal]=useState(false);
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <ChildComponent changeModal={setShowModal} Modal={showModal}/>
        </div>
    )
}

export default ParentComponent