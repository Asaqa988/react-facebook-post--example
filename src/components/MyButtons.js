import React from "react";

import "../components/MyButtons.css";
function MyButtons() {
  return (
    <div className="buttons-div">
      <button id="Like-Button"> LIKE </button>
      <button id="comment-Button"> Comment </button>

      <button id="share-Button"> Share </button>
    </div>
  );
}

export default MyButtons;
