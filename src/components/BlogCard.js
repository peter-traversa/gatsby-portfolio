import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const styles = {
  card: {
    width: 'auto',
    height: 'auto',
    textAlign: 'center'
  },
  cardButton: {
    align: 'center',
  },
};

function SimpleCard(props) {
  const { classes } = props;
  console.log(image.height)
  return (
    <Card className={classes.card}>
      <CardContent align='center'>
        <h4>{props.blog.title}</h4>
        {image.height < '2px' ? <img src={props.blog.thumbnail} alt={'Blog Thumbnail'} width={'100%'} ></img> : null}
        <h6>Published{"  "}{props.blog.pubDate}</h6>
        <Button variant="contained" href={props.blog.link} target="_blank" rel="noopener noreferrer"className={classes.button}>
        Medium Link
        </Button>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);