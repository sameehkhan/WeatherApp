import React from "react";
import CardComponent from "./CardComponent";
import TextInput from "./TextInput";

const App = () => (
  <div style={{ maxheight: "100vh" }}>
    <TextInput />
    <div className='cards'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "space=between",
        flexDirection: "row"
      }}
    >
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  </div>
);

export default App;
