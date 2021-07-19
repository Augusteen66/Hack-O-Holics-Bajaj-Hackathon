import React from 'react'
import {Button, Grid} from '@material-ui/core'

import './Footer.css'

function Footer() {
    return (
        <div className="footer" >
            <Grid container spacing={4}>
                <Grid item sm={4} xs={12} >
                    <div className="col-heading" >
                        <div className="knowF" >Know</div>
                        <div className="yourF" >  your next speech.</div>
                    </div>
                </Grid>  
                <Grid item sm={4} />
                <Grid item sm={4} xs={12} >
                </Grid>  
            </Grid>


            <hr style={{width:"88%", marginTop:'80px', position:'relative', marginBottom:"20px"}} ></hr>
            <Grid container>
                <Grid item sm={6} xs={12} style={{  fontFamily: 'Gloria Hallelujah', color: "white", fontSize: "1.6rem", letterSpacing: "3px"}} >
                    Speech   Analyzer
                </Grid>
                <Grid item sm={6} xs={12} >
                    <div className='row-2' style={{paddingLeft:"62%"}}>
                        <Button variant="contained" color="primary" href="./analyze" >ANALYZE</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
