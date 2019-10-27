import React from 'react';
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import './upload-file.css'

  export default function UploadFile({gridElement}) {
    return (
      <Button variant="outlined" className={`${gridElement} button-upload-file`}>
        Upload File &nbsp; <AttachFileIcon/>
      </Button>
    );
  }