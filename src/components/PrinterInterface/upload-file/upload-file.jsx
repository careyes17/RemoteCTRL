import React from "react";
import LZUTF8 from "lzutf8";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./upload-file.css";

class UploadFile extends React.Component {
  constructor(props) {
    super(props);
  }

  parsegcode() {
    const gcodeFileObject = this.refs.gcode.files[0];

    if (gcodeFileObject === undefined) {
      this.props.changeFileStates('', '', false)
      return;
    }

    console.log(gcodeFileObject);

    let fileReader = new FileReader();
    fileReader.readAsText(gcodeFileObject);

    let text;
    let base64Text;
    fileReader.onload = function() {
      text = fileReader.result;
      base64Text = LZUTF8.compress(text, { outputEncoding: "Base64" });
      console.log(base64Text);
      this.props.changeFileStates(base64Text, gcodeFileObject.name, true)
      console.log(this.props);
    }.bind(this);

    fileReader.onerror = function() {
      console.log(fileReader.error);
    };
  }

  render() {
    return (
      <Button
        variant="outlined"
        component="label"
        className={`${this.props.gridElement} button-upload-file`}
      >
        Upload File &nbsp; <AttachFileIcon />
        <input
          id="gcode-input"
          type="file"
          style={{ display: "none" }}
          ref="gcode"
          onChange={this.parsegcode.bind(this)}
        />
        {this.props.fileName}
      </Button>
    );
  }
}

export default UploadFile;
