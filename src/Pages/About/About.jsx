import React from 'react'
import {Grid} from '@material-ui/core'
import './About.css'

const users = [
    {   
        id: 0,
        heading: "What is Lorem Ipsum?", 
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
    },
    {   
        id: 1,
        heading: "It was popularised in the 1960s",
        text: "with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {   
        id: 2,
        heading: "Why do we use it?",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {   
        id: 3,
        heading: "What is Lorem Ipsum?", 
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " 
    },
    {   
        id: 4,
        heading: "It was popularised in the 1960s",
        text: "with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {   
        id: 5,
        heading: "Why do we use it?",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
];

function Text(props){
    return(
        <Grid item sm={6} xs={12} style={{padding:"30px"}} >
            <h3 >{props.heading}</h3>           
            <h5 style={{textAlign:"justify"}} >&emsp;&emsp;&emsp;{props.text}</h5>
        </Grid>
    ) 
}

function About() {
    return (
    <Grid container className="about-container" >
            {users.map((user)=> <Text key={user.id} heading={user.heading} text={user.text} className="Text" />)}  
    </Grid>
    )
}

export default About
