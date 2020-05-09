import React, { useState } from "react";
import Head from "./Head";
import Addon from "./Addon";
import Namelist from "./Namelist";

function App() {
  var [arrayfinal, setArrayFinal] = useState([]);

  function loop(final) {
    setArrayFinal([...final]);
    console.log(arrayfinal);
  }

  function deleted(num) {
    setArrayFinal(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== num;
      });
    });
  }

  return (
    <div>
      <Head />
      <Addon fun={loop} />
      {arrayfinal.map((item, index) => {
        return <Namelist id={index} name={item} func={deleted} />;
      })}
    </div>
  );
}

export default App;
