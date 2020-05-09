import React, { useState } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Addon(props) {
  var [textin, setTextin] = useState("");
  var [clicked, setClicked] = useState([]);

  function textchange(event) {
    var temp = event.target.value;
    setTextin(temp);
  }

  function click(event) {
    setClicked(prevValue => {
      return [...prevValue, textin];
    });

    props.fun(clicked);
    console.log(clicked);
    event.preventDefault();
  }

  return (
    <div class="addon">
      <form>
        <input
          onChange={textchange}
          class="inputone"
          type="text"
          name="groomName"
          autocomplete="off"
          placeholder="Enter groom's name here"
        />
        <button onClick={click} className="btn">
        <AddCircleOutlineIcon />
        </button>
      </form>
    </div>
  );
}

export default Addon;
