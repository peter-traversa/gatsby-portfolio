import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { FaMedium } from 'react-icons/fa';

const styles = {
  card: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center'
  },
  cardButton: {
    align: 'center',
  },
};

function SimpleCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent align='center'>
        <h4>{props.blog.title}</h4>
      </CardContent>
      <CardContent className={classes.cardContent} >
        <h6>Published{"  "}{props.blog.pubDate}</h6>
      </CardContent>
      <CardContent className={classes.cardButton} >
        <Button variant="contained" href={props.blog.link} target="_blank" rel="noopener noreferrer"className={classes.button}>
          <FaMedium />Medium
        </Button>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);