import React from "react";
import Button from "@material-ui/core/Button";
import "./start-print.css";

export default function StartPrint({
  gridElement,
  socket,
  fileContent,
  safeToPrint
}) {
  function startPrint() {
    if (safeToPrint) {
      console.log("start print");
      //console.log(fileContent)
      socket.emit("printerStartPrint", fileContent);
    }
  }

  return (
    <Button
      variant="outlined"
      className={`${gridElement} button-print`}
      onClick={startPrint}
    >
      Start Print
    </Button>
  );
}
