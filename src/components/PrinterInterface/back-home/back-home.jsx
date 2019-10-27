import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

  export default function BackHome({gridElement, history}) {
    function routeTo() {
        history.push('/');
    }
    return (
      <Button variant="outlined" className={`${gridElement} button`} onClick={routeTo}>
        <ArrowBackIosIcon/> Home
      </Button>
    );
  }