import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FaMedium } from 'react-icons/fa'

const styles = {
  card: {
    width: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" textalign="center" >
          {props.blog.title}
        </Typography>
        <Typography variant="h5" component="p" textalign="left" >
          Published - {props.blog.pubDate}
        </Typography>
      </CardContent>
      <CardContent align='center'>
        <Button variant="contained" href={props.blog.link} target="_blank" rel="noopener noreferrer"className={classes.button}>
          <FaMedium />
        </Button>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);