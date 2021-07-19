import React, {Component, useState, useEffect} from 'react'
import {TextField, Grid, Typography, Button} from '@material-ui/core'
import axios from 'axios';
import Main from './Main'
import './Analyze.css'
import PeopleImage from './People.jpeg'

/*

function Analyze() {

    const [visible, setVisible] = useState(false)
    const [analyzeData, setAnalyzeData] = useState("")

    const postData = async () => {
        const response = await axios.post("http://localhost:3000/analyze", analyzeData)
                                    .catch(err => console.log("Error: " + err))
    }

            //useEffect(() => {
            //    axios.post('http://localhost:3000/analyze', {analyzeData})
            //    .then(res => console.log(res.analyzeData))
            //   .catch(err => console.log(err))
            //}, [analyzeData])

    const triggerResults = () => {
        if(analyzeData.length > 10){ 
            postData();
            setVisible(true)
            
        }
        else{
            alert("Insufficient number of words. Your speech should have a word count of minimum 100 words.")
        }   
    }  

    const submitHandler = e => {
        e.preventDefault();
        postData();
    }

    return (
        <div>
            <div className="analyze-container" >
                    <Grid container>
                        <Grid item sm={4} xs={12} >
                            <div style={{paddingTop:"30%"}} >
                                <Typography style={{paddingTop:"30px", letterSpacing:"5px", fontSize:"2rem", marginBottom:"40px"}} >
                                    ENTER   YOUR SPEECH
                                </Typography>
                                <form className="root" noValidate autoComplete="off" onSubmit={submitHandler} >
                                    <TextField 
                                        id="filled" 
                                        value={analyzeData} 
                                        onChange={event=>{setAnalyzeData(event.target.value) 
                                            console.log(analyzeData)}} 
                                        variant="filled"  
                                        placeholder="Minimum wordcount 100"

                                    />
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        size="large" 
                                        style={{ margin:"10px"} }
                                        onClick={triggerResults}
                                        >
                                            Let's Go   
                                    </Button>
                                </form> 
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} >
                            <img src={PeopleImage}  style={{width:"100%"}} />
                        </Grid>
                    </Grid>
                </div>
                <div style={{width:"100%", position:'relative', alignItems:'center', display:'flex', justifyContent:'space-evenly'}}>
                    <Grid container>
                        <Grid item xs={false} sm={1} />
                        <Grid item xs={12} sm={10}  >
                            
                                { visible ? <Main  /> : null}
                            
                        </Grid>
                        <Grid item xs={false} sm={1} />
                    </Grid> 
                </div>
        </div>
    )
}
export default Analyze

*/


class Analyze extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            visible: false,
            Text: true,
            analyzeData : "How great is it to be back in Macon, Georgia with Donald Trump coming to Macon again? I want to thank Governor Kemp because he laid it out just now, but let me remind you of something that happened in 2002. Sunny just mentioned it. Because of you, we turned this thing around, and for the last 18 years, we have built a state that’s now the number one state in the country in which to do business. David Perdue: (00:25)"
        }
    }
    
    handleAnalyzeData = (event) => {
        this.setState({
            analyzeData: event.target.value,
        })
    }

    triggerResults = () => {
        if(this.state.analyzeData.length > 10){
            this.setState({
                visible:true
            }) 
        }
        else{
            alert("Insufficient number of words. Your speech should have a word count of minimum 100 words.")
        }   
    }     
    
    submitHandler = e => {

        var jsonData = {
            "analyzeData" : "How great is it to be back in Macon, Georgia with Donald Trump coming to Macon again? I want to thank Governor Kemp because he laid it out just now, but let me remind you of something that happened in 2002. Sunny just mentioned it. Because of you, we turned this thing around, and for the last 18 years, we have built a state that’s now the number one state in the country in which to do business.David Perdue: (00:25)That did not happen by accident. Brian Kemp is the third governor in a row that understands how to do that. And thanks to you, that’s going to continue. Today, we have an opportunity. Every generation has an opportunity like this. They have their moment of crisis. With Donald Trump, it’s all about promises made and promises delivered. After eight years of Joe Biden, you hear Joe lately? Joe said the other day, he said, “Oh yeah, you guys were enjoying that economic Renaissance because of what we did with Barack Obama.”David Perdue: (01:06)Now guys, I’m just a dumb business guy for right over that hill, right there, and I can tell you, that is a lie right out of the pit of hell. Donald Trump, after eight years of Barack Obama and Joe Biden giving us the lowest economic output in U.S. history, and we felt that right here in Georgia, Donald Trump gave us the best economic turnaround in U.S. history, y’all.David Perdue: (01:36)Seven and a half million new jobs, highest middle class income ever measured, the lowest unemployment for African Americans, Asian Americans, and Hispanics ever measured. After 800,000 people, under Barack Obama, fell into poverty, under Donald Trump, six and a half million people have lifted themselves out of poverty, y’all. Now that’s America.David Perdue: (01:57)But it took Donald Trump, not the bureaucrats in Washington, not some career politician, but it took Donald Trump to build that wall. It took Donald Trump to move that embassy from Tel Aviv to Jerusalem. It took Donald Trump to name 200 new federal judges, including Neil Gorsich and Brett Kavanaugh. And next week, we will know that we will confirm Amy Cony Barrett. Mark my words.David Perdue: (02:43)It’s one thing to stand up here and cheer. It’s one thing to stand up and remind everybody. This guy is providential. He didn’t happen by accident. How in the world, in our political system, could Donald J. Trump come on the scene in 2016 and do what he did? Tell me. But God’s watching. He’s watching what we’re going to do right now. What’s at stake is this, and I mean this: It’s our time to stand up to the socialist movement that for the last 100 years has been trying to take over our beloved America.David Perdue: (03:27)It didn’t just start in the ’30s. It started long ago, but they believe they have it in their grasp now. They believe these CNN polls and CNBC polls. Oh, let me tell you, they don’t know the big red poll right here. But this is what I believe is a stake. Mark my words. They believe this. That if they get the majority of the Senate and they win the White House, Joe Biden has already said, your taxes are going up, guys.David Perdue: (03:56)He’s already said. You know those regulations that those mean old demonic Republicans, all those regulations you pulled back, we’re going to give it back to you. You know that healthcare that we screwed up? We’re going to do it again. But most importantly, guys, they want to stack the Supreme Court. Did you see that? They want to stack the Supreme Court. Now what President Trump has done is brought balance back to the Supreme Court. These aren’t activists. These are constitutionalists. They’re up there to protect you and me.David Perdue: (04:32)But the most insidious thing that Chuck Schumer and Joe Biden are trying to perpetrate, and Bernie and Elizabeth and Kamala, or what? Kamala or Kamala or Kamala mala mala, I don’t know. Whatever. They’re trying to perpetrate a lie, and that is that socialism, this radical socialism that they’re trying to sell us, is better than our beloved democracy. We’re not going to let that stand.David Perdue: (04:57)And here’s how they’re going to do it. You stack the courts, you change the voting rules in the Senate, and pretty soon you start adding democratic states. You get rid of the electoral college or change it like they can do, and pretty soon you’re talking about a one-party state, guys. That failed in Russia in 1917, it failed in Cuba in 1959, Venezuela today. You can’t find a country in the world where that has ever worked.David Perdue: (05:19)Now why in the world would we ever go down that road, particularly after the last 75 years in this country where God has blessed us so greatly that we can come out today and say what we want independent of what that media says? I need you to do one thing. Stand with me, stand with our President, and let’s make damn sure that the road to socialism never runs through the state of Georgia. God bless you guys."
            
        }

        e.preventDefault();
        axios.post('http://127.0.0.1:5000/speech',this.state)
        .then(response => console.log(response.data))
        .catch(err => console.log('Error'));

        this.triggerResults()
    }



    render(){
        return (
            <div>
                <div className="analyze-container" >
                    <Grid container>
                        <Grid item sm={4} xs={12} >
                            <div style={{paddingTop:"30%"}} >
                            <Typography style={{paddingTop:"30px", letterSpacing:"5px", fontSize:"2rem", marginBottom:"40px"}} >
                                ENTER   YOUR SPEECH
                            </Typography>
                            <form className="root" noValidate autoComplete="off" onSubmit={this.submitHandler}   >
                                <TextField 
                                    id="filled" 
                                    value={this.state.analyzeData} 
                                    onChange={this.handleAnalyzeData} 
                                    variant="filled"  
                                    placeholder="Minimum wordcount 100"
                                />
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    size="large" 
                                    style={{ margin:"10px"} }
                                    onClick={this.submitHandler}
                                    >
                                        Let's Go   
                                </Button>
                            </form> 
                            </div>
                        </Grid>
                        <Grid item sm={8} xs={12} >
                            <img src={PeopleImage}  style={{width:"100%"}} />
                        </Grid>
                    </Grid>
                </div>
                <div style={{width:"100%", position:'relative', alignItems:'center', display:'flex', justifyContent:'space-evenly'}}>
                    <Grid container>
                        <Grid item xs={false} sm={1} />
                        <Grid item xs={12} sm={10}  >
                            
                                { this.state.visible ? <Main data={{}} /> : null}
                            
                        </Grid>
                        <Grid item xs={false} sm={1} />
                    </Grid> 
                </div>
    
            </div>
        )
    }
}

export default Analyze;
