import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import './card.css'

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: '1em',
    },
    pos: {
      marginBottom: 12,
    },
  });

  export default function HomeCard({page, gridElement, history}) {
    const classes = useStyles();
    function routeTo() {
      if (gridElement === 'printer') {
        history.push('/printer');
      } else if (gridElement === 'crane') {
        history.push('/crane');
      }
    }
    return (
      <Card className={`${gridElement} cardElements`} onClick={routeTo}>
        <Typography variant="body2" component="p" align="center" variant="h5">
          {page}
        </Typography>
      </Card>
    );
  }