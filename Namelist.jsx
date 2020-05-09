import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Namelist(props) {
  function deletefun() {
    props.func(props.id);
  }

  return (
    <div className="namelist">
      <h1 className="nameinside">{props.name}</h1>
      <button onClick={deletefun} className="del" type="button" name="button">
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Namelist;
