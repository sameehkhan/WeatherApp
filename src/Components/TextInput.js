import React from "react";
import TextField from "../../node_modules/@material-ui/core/TextField";

class TextInput extends React.Component {

  render() {
    return (
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TextField
          fullWidth
          label="Weather"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        />
      </div>
    )
  }
}

export default TextInput;
