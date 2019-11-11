import React from "react";
import Button from "@material-ui/core/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import "./upload-file.css";

class UploadFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      safeToPrint: false,
    };
  }

  parsegcode() {
    var gcodeFileObject = this.refs.gcode.files[0];
    if (gcodeFileObject === undefined) {
      this.setState({
        file: '',
        safeToPrint: false,
      });
      return;
    };
    console.log(gcodeFileObject);
    this.setState({
      file: gcodeFileObject.name,
      safeToPrint: true,
    });
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
        {this.state.file}
      </Button>
    );
  }
}

export default UploadFile;
