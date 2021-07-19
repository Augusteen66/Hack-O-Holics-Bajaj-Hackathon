import React, {useState, useEffect} from 'react';  
import { Grid, Paper, List, ListItem, ListItemText, Table, TableBody, TableCell, TableContainer, TableHead , TableRow } from '@material-ui/core';
import {Doughnut} from 'react-chartjs-2';
import axios from 'axios';
import image from './People.jpeg'
import './Main.css'

/*input data goes into backend, outpupt is passed on to Main component, Main shreds the requireded data and renders it.

const receivedData = {
    SpeechSummary: "Chief Justice Roberts, President Carter, President Clinton, President Bush, President Obama, fellow Americans, and people of the world, thank you. We the citizens of America are now joined in a great national effort to rebuild our country and restore its promise for all of our people.",
    emotionData:[
            { emotion:"happy", value: 5 },
            { emotion:"sad",value: 7 },
            { emotion:"angry", value: 4 },
            { emotion:"surprised", value: 2 },
            { emotion:"fear",value: 10}
    ],
    topword:[
        {primary:"Carpool"}, {primary:"Karaoke"}, {primary:"Bazooka"}
    ],
    DoughnutData: { //Take Data from backend in this form
        datasets: [{data: [80, 20, 30]}],
        labels: ["Negative","Positive","Neutral"]
    },
    WordCloud: "./People.jpeg"
}
*/


/* Data
const DoughnutData = { //Take Data from backend in this form
    datasets: [{
        data: [80, 20, 30]
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Negative',
        'Positive',
        'Neutral'
    ]
  };

const topwordData = [
    {primary:"Carpool"}, {primary:"Karaoke"}, {primary:"Bazooka"}, 
]

const emotionData = [
    {   
        emotion:"happy",
        value: 5
    },
    {
        emotion:"sad",
        value: 7
    },
    {
        emotion:"angry",
        value: 4
    },
    {
        emotion:"surprised",
        value: 2
    },
    {
        emotion:"fear",
        value: 10
    },
]

*/


function Heading(props){
    return(
        <div style={{display:"flex", justifyContent:"center", textAlign:"center" }}> 
            <div className="summary-heading" >{props.title}</div>  
        </div>  
    )
}

function TopWords(props){ 
    return(
        <>
            <ListItem style={{backgroundColor:"#fafafa", margin:'1%'}}  >
            <ListItemText align="center" >{props.primary}</ListItemText>
            </ListItem>
        </>
    )
}

function Emo(props){
    return(
        <>
            <TableRow>
                <TableCell align="center" >{props.emotion}</TableCell>
                <TableCell align="center" >{props.value}</TableCell>
            </TableRow>
        </>
    )
}

function Main(props) {

    useEffect(()=>{
        axios.get('http://127.0.0.1:5000/speech')
        .then(res => {
            setReceivedData(res.data)
            console.log(receivedData) 
        })
        .catch(err=>console.log(err))
    }, [])
    

    const [receivedData, setReceivedData] = useState({
            SpeechSummary: "Chief Justice Roberts, President Carter, President Clinton, President Bush, President Obama, fellow Americans, and people of the world, thank you. We the citizens of America are now joined in a great national effort to rebuild our country and restore its promise for all of our people.",
            emotionData:[
                    { emotion:"happy", value: 5 },
                    { emotion:"sad",value: 7 },
                    { emotion:"angry", value: 4 },
                    { emotion:"surprised", value: 2 },
                    { emotion:"fear",value: 10}
            ],
            topword:[
                {primary:"Carpool"}, {primary:"Karaoke"}, {primary:"Bazooka"}
            ],
            DoughnutData: { 
                datasets: [{data: [80, 80, 30]}],
                labels: ["Negative","Positive","Neutral"]
            },
            WordCloud: "./People.jpeg"
    });


    return (
        <div className="Cert"  >
            <Grid container>

                <Grid container >
                    <Grid item xs={12} sm={12} >
                        <div className="Cert-box"  >
                            <Heading title="Speech Summary" />
                            <div className="context" >
                                &emsp;&emsp;{receivedData.SpeechSummary}
                            </div>   
                        </div>
                    </Grid>  
                </Grid>

                <Grid container > 
                        <Grid item xs={12} sm={6}>
                            <div className="Cert-box">
                                <Heading title="Word Cloud" />
                                <div className="context" >
                                    <img src={receivedData.WordCloud} style={{width:"100%"}} alt="Word Cloud" />   
                                </div>   
                             </div> 
                            <div className="Cert-box" style={{marginTop:"6%"}}>
                                <Heading title="Text-to-Emotion" /> 
                                <div className="context" style={{padding:"40px"}}> 
                                    <TableContainer component={Paper} >
                                        <Table className="Table" aria-label="Emotion analzing Table">
                                            <TableHead>
                                                <TableRow style={{backgroundColor:"#a3e0fc", color:"white"}}>
                                                    <TableCell align="center" ><h3 style={{color:"#fff"}}>Emotion</h3></TableCell>
                                                    <TableCell align="center" ><h3 style={{color:"#fff"}}>Value</h3></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {receivedData.emotionData.map((data)=>(<Emo emotion={data.emotion} value={data.value}/> ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>    
                            </div>  
                        </Grid>
                    
                    
                        <Grid item xs={12} sm={6}>          
                            <div className="Cert-box">
                                <Heading title="Top Words" />
                                <div className="context" >
                                    <List >
                                        {receivedData.topword.map((primary)=> <TopWords primary={primary.primary} /> )}  
                                    </List>   
                                </div>    
                            </div>

                            <div className="Cert-box" style={{marginTop:"6%"}} >
                                <Heading title="Sentimental Analysis" />
                                <div className="context" >                                
                                    <Doughnut 
                                        data={receivedData.DoughnutData} options={{
                                            backgroundColor: [
                                                'rgb(255, 99, 132)',
                                                'rgb(54, 162, 235)',
                                                'rgb(255, 205, 86)'
                                            ]
                                        }} />  
                                </div>     
                            </div>   
                        </Grid>
                    
                </Grid>
            </Grid>
        </div>    
    )
}

export default Main