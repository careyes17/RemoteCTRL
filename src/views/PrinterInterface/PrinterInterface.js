import React from "react";
import socketIOClient from "socket.io-client";
import BackHome from "../../components/PrinterInterface/back-home/back-home";
import Dpad from "../../components/PrinterInterface/dpad/dpad";
import UpDown from "../../components/PrinterInterface/up-down/up-down";
import UploadFile from "../../components/PrinterInterface/upload-file/upload-file";
import StartPrint from "../../components/PrinterInterface/start-print/start-print";
import PauseContinue from "../../components/PrinterInterface/pause-continue/pause-continue";
import VideoFeed from "../../components/PrinterInterface/video-feed/video-feed";
import "./PrinterInterface.css";

class PrinterInterface extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileContent: "",
      fileName: "",
      safeToPrint: false
    };

    this.history = props.history;

    this.socket = socketIOClient("http://127.0.0.1:25565", {
      reconnection: false
    });

    this.socket.emit("printerUser", "web");

    // this.socket.on('test', () => {
    //  console.log("test received!")
    // })
  }

  changeFileStates(fileContent, fileName, safeToPrint) {
    this.setState({
      fileContent: fileContent,
      fileName: fileName,
      safeToPrint: safeToPrint
    });
  }

  render() {
    return (
      <div className="grid-printer">
        <BackHome gridElement="back-home" history={this.history} />
        <div className="title">3D Printer Interface</div>
        <VideoFeed
          gridElement="video-feed"
          className="video-feed"
          socket={this.socket}
        />
        <Dpad gridElement="dpad" className="dpad" socket={this.socket} />
        <UpDown
          gridElement="up-down"
          className="up-down"
          socket={this.socket}
        />
        <UploadFile
          gridElement="upload-file"
          className="upload-file"
          fileContent={this.state.fileContent}
          fileName={this.state.fileName}
          safeToPrint={this.state.safeToPrint}
          changeFileStates={this.changeFileStates.bind(this)}
        />
        <div className="start-pause-continue-block">
          <StartPrint
            gridElement="start-print"
            className="start-print"
            socket={this.socket}
            fileContent={this.state.fileContent}
            safeToPrint={this.state.safeToPrint}
          />
          <PauseContinue
            gridElement="pause-continue"
            className="pause-continue"
            socket={this.socket}
          />
          {/* <StartPrint gridElement='start-print' className='start-print'></StartPrint> */}
        </div>
      </div>
    );
  }
}

export default PrinterInterface;
