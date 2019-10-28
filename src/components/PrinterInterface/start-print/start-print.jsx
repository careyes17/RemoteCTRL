import React from 'react';
import Button from '@material-ui/core/Button';
import './start-print.css'

  export default function StartPrint({gridElement}) {
    return (
      <Button variant="outlined" className={`${gridElement} button-print`}>
        Start Print
      </Button>
    );
  }