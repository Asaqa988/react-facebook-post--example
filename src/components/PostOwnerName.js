import React from "react";
import MyButtons from "./MyButtons";
import "../components/PostOwnerName.css";

function PostOwnerName(props) {
  return (
    <div id="container-div">
      <img alt="CC" className="myImage" src={props.imageURL} />
      <h1> {props.userName}</h1>
      <textarea placeholder="What's in your Mind ? "></textarea>
      <br /> 
    
      <MyButtons />
      <br /> <br />
      <br />


    </div>
  );
}

export default PostOwnerName;
