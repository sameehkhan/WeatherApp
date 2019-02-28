import React, { Component } from "react";
import CardComponent from "../src/Components/CardComponent";
import TextInput from "../src/Components/TextInput";
class App extends Component {
  render() {
    return (
      <div style={{ maxheight: "100vh" }}>
        <TextInput />
        <div
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
  }
}

export default App;
