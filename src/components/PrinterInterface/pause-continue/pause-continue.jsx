import React from 'react';
import Button from '@material-ui/core/Button';
import './pause-continue.css'

  export default function PauseContinue({gridElement}) {
    return (
      <Button variant="outlined" className={`${gridElement} .button-pause-continue`}>
        Pause/Continue
      </Button>
    );
  }