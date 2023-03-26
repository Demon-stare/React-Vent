import * as React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Posts({ Props }) {

    let data = Array.from(Props)
    console.log("data form postsclass" + Props);


    return (

        <div>


            {
                data.map(row =>


                    <div id="Post-UI-Card">

                        <Stack id="Poster-details" direction="row" spacing={2}>
                            <Avatar id="Post-Avatar" src="/static/images/avatar/1.jpg" />
                            <p id='Post-UserName'>{row.profiles.full_name}<br />
                                <sub>Posted this</sub></p>

                        </Stack>


                        <Card id="Post-img">

                            <CardMedia

                                component="img"
                                alt="code red"
                                sx={{ height: 200, objectFit: "contain" }}
                                image={row.Post_Image}
                                title={row.Post_title}
                            />


                            <div id='testaccordian'>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content">
                                        <Typography id="post-header" > {row.Post_title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails  >
                                        <Typography id="post-data">
                                        {row.Post_Content}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            </Card>



                        


                        <div id="Post-buttons">

                            <IconButton color="primary" aria-label="like picture" component="label">

                                <FavoriteBorderIcon />

                            </IconButton>

                            <IconButton color="primary" aria-label="Comment" component="label">

                                <ChatBubbleOutlineIcon />

                            </IconButton>

                            <IconButton color="primary" aria-label="Comment" component="label">

                                <ArrowForwardIosIcon />

                            </IconButton>

                        </div>

                        <hr></hr>

                    </div>



                )
            }


        </div>
    );
}




