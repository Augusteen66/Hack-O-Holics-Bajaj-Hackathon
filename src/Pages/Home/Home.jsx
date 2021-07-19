import React,{Component, useState} from 'react'
import {Grid, Button, Typography, } from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';
import './Home.css'
import Card from '@material-ui/core/Card';
import SpeechCard from '../../Components/Card'
import Image from './8533.jpeg'
import Chaplin from './chaplin.jpg'
import Joker from './HeathJoker.png'
import Trump from './Trump.jpg'
import axios from 'axios';

const CardData = [
    {   id:1,
        image: Trump,
        person: "Donald Trump",
        CardSpeech:"Chief Justice Roberts, President Carter, President Clinton, President Bush, President Obama, fellow Americans, and people of the world, thank you. We the citizens of America are now joined in a great national effort to rebuild our country and restore its promise for all of our people. Together we will determine the course of America, and the world, for many, many years to come. We will face challenges. We will confront hardships, but we will get the job done. Every four years, we gather on these steps to carry out the orderly and peaceful transfer of power, and we are grateful to President Obama and First Lady Michelle Obama for their gracious aid throughout this transition. They have been magnificent. Thank you. Today's ceremony, however, has very special meaning, because today we are not merely transferring power from one administration to another, or from one party to another, but we are transferring power from Washington, D.C., and giving it back to you, the people.",
    },
    {   id:2,
        image: Joker,
        person: "Joker (DCEU)",
        CardSpeech:"My father was a drinker and a fiend and one night he goes off crazier than usual. Mommy gets the kitchen knife to defend herself. He doesn’t like that, not one bit. So, me watching he takes the knife to her, laughing while he does it. He turns to me and he says “WHY SO SERIOUS!?”. He comes at me with the knife “why so serious!?” Sticks the blade in my mouth 'lets put a smile on that face!' aaaand….. why sooooo serrrious?",
    },
    {   id:3,
        image: Chaplin,
        person: "Charlie Chaplin",
        CardSpeech:"I'm sorry, but I don't want to be an emperor. That's not my business. I don't want to rule or conquer anyone. I should like to help everyone if possible; Jew, Gentile, black man, white. We all want to help one another. Human beings are like that. We want to live by each other's happiness, not by each other's misery. We don't want to hate and despise one another. In this world, there's room for everyone, and the good earth is rich and can provide for everyone. To those who can hear me, I say, do not despair. The misery that is now upon us is but the passing of greed, the bitterness of men who fear the way of human progress. The hate of men will pass, and dictators die, and the power they took from the people will return to the people. The kingdom of God is within man, not one man nor a group of men, but in all men! In you! You, the people, have the power, the power to create machines, the power to create happiness! You, the people, have the power to make this life free and beautiful, to make this life a wonderful adventure!",
    },
]



class Home extends Component {

    


    render(){
        return (
            <div>
            <div style={{padding:"7%"}} className="shadow">
                <Grid container>
                    <Grid item xs={12} sm={6} >
                        <div className="col-headingF" >
                            <div className="know" >Know</div>
                            <span className="your" >  your next speech.</span>
                        </div>
                        <Button variant="contained" color="primary" size="large" href="./analyze" style={{marginTop:"30px"} }>Get Started</Button>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <img src={Image} alt="Speech vector" style={{width:"100%"}} />
                    </Grid>
                </Grid>
            </div>

        
            <div style={{backgroundColor:"black", width:"100%",  margin: "0"}}  >   
                <Grid container  >
                    <Grid item sm={6} xs={12}>
                        <img src={Chaplin} alt="The Great Dictator" style={{width:"100%"}} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className="typography-text" style={{padding:"7%",  textAlign:"center"}}>
                            <Typography variant={"h4"} style={{color:"white",  fontWeight:"100"}} >CHARLIE CHAPLIN</Typography>
                            <Typography variant={"h10"} style={{color:"white",  fontWeight:"100"}} > in The Great Dictator(1940)</Typography>
                            <Typography style={{paddingTop:"30px", textAlign:"justify"}}>
                            &emsp;&emsp;I'm sorry, but I don't want to be an emperor. That's not my business. I don't want to rule or conquer anyone. I should like to help everyone if possible; Jew, Gentile, black man, white. We all want to help one another. Human beings are like that. We want to live by each other's happiness, not by each other's misery. We don't want to hate and despise one another. In this world, there's room for everyone, and the good earth is rich and can provide for everyone. To those who can hear me, I say, do not despair. The misery that is now upon us is but the passing of greed, the bitterness of men who fear the way of human progress. The hate of men will pass, and dictators die, and the power they took from the people will return to the people. The kingdom of God is within man, not one man nor a group of men, but in all men! In you! You, the people, have the power, the power to create machines, the power to create happiness! You, the people, have the power to make this life free and beautiful, to make this life a wonderful adventure!
        A wonderful adventure!
                            </Typography>
                            <Typography  style={{color:"#6651ee", paddingTop:"2rem", zIndex:"10", textAlign:"justify"}} >
                                &emsp;&emsp;&emsp;This speech goes down as one of the greatest speeches in the history of cinema. Aren't you interested to find out what our ML model views are?
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div style={{backgroundColor:"#fffeeb", width:"100%", padding:"5%", textAlign:"center"}} className="shadow" >   
                <div style={{fontWeight:"900", fontSize:"3rem", marginTop:"100px", marginBottom:"75px", color:"#d4e8a9",  textShadow: "4px 4px #79875b"}} >Analyze these famous speeches with us!</div>
                <Grid container>
                    {CardData.map((card)=>(
                        <Grid item xs={12} sm={4} >
                            <Card style={{ margin:"5%",  borderRadius:"15px"}}>
                                <SpeechCard key={card.id}  image={card.image} CardSpeech={card.CardSpeech} person={card.person} />
                            <CardActions >
                                <Button 
                                    variant="contained" 
                                    color="primary"  
                                    onCLick={()=> {
                                         
                                        
                                    }
                                    }>Analyze</Button>
                            </CardActions > 
                            </Card>
                        </Grid>
                    ))}
                    
                </Grid>
                
            </div>
            </div>
        )
    }
}

export default Home
    