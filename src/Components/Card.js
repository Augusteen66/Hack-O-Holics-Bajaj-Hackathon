import React, {useState} from 'react'
import { Button, Typography, Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';




function Cards(props) {

  const [isTruncated, setIsTruncated] = useState(true)

  const resultString = isTruncated ? props.CardSpeech.slice(0,150) : props.CardSpeech;

  function toggleIsTruncated(){
    setIsTruncated(!isTruncated)
  }

    return (
      
        <div >       
            <CardActionArea>
              <CardMedia
                component="img"
                height="250px"
                image={props.image}
                title="Contemplative Reptile"
              />
              <CardContent style={{padding:"2%"}} >
                <Typography gutterBottom variant="h5" component="h2">
                  {props.person}

                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign:"left"}}>
                  &ensp;&ensp;&ensp;{resultString}
                  <span onClick={toggleIsTruncated} style={{padding:"2px"}} >{isTruncated ? "  ...Read More" : "Show less."}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
        </div>
      
    );
  }
export default Cards
