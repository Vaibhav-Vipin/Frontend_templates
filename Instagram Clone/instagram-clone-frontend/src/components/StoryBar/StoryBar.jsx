import React, { Component } from 'react';
import './StoryBar.css';
import {Avatar} from '@mui/material';

class StoryBar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            storyList:[]
        }

    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        let data=[
                {
                    "username":"yohani",
                    "imageURL":"https://sambadenglish.com/wp-content/uploads/2021/10/yohani.jpg"
                 },
                 {
                    "username":"iamvirat",
                    "imageURL":"data:image/jpeg;base64,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"
                 },
                 {
                    "username":"tzuyu",
                    "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEEEbA7w3DBCy754ZIj8bAdYiy4Ec5rOa4Q&usqp=CAU"
                 },
                 {
                    "username":"emma",
                    "imageURL":"https://c.files.bbci.co.uk/C08E/production/_112949294_2d769583-c1f2-48cb-aff2-eadc04fda35f.jpg"
                 },
                 {
                    "username":"benedict",
                    "imageURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiwbV1QS79X0IxVxM_nTI_f7mSc0YOBqxqUUzbMbl6HlQ_kcODhX_WzFf-3Hze4eexK4&usqp=CAU"
                 },
                 {
                    "username":"elizabeth",
                    "imageURL":"https://www.thewikifeed.com/wp-content/uploads/2021/02/elizabeth-olsen-1.jpg"
                 },
                 {
                    "username":"theflash",
                    "imageURL":"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbamsmackpow.com%2Ffiles%2Fimage-exchange%2F2016%2F04%2Fie_42627.jpeg"
                 },
                 {
                    "username":"icc",
                    "imageURL":"data:image/jpeg;base64,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"
                 },
                 {
                    "username":"sangalefthander",
                    "imageURL":"https://lh3.googleusercontent.com/-Kw1fcfdDd9w/W3ZAPsCczDI/AAAAAAAAASw/MPrUaOCM9A8PRCni7A5MhIPpm76PFUMhwCHMYCw/s640/20140522043438.jpeg"
                 },
                 {
                    "username":"msdhoni",
                    "imageURL":"https://images.hindustantimes.com/img/2021/10/11/550x309/dhoni-twitter-csk_1633936884456_1633936889010.jpg"
                 }
        ]
        this.setState({storyList: data});
    }


    render(){
        return(
        <div className="storybar-container">

            {
                this.state.storyList.map((item, index)=>(
                    <div className="story">
                        <div className="story-Avatarcontainer">
                            <Avatar className="storybar-story" src={item.imageURL} />
                        </div>
                        <div className="storybar-text">{item.username}</div>
                    </div>
                ))
            }
            
        </div>
        );
    }
}


export default StoryBar;