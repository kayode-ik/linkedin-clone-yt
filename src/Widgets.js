import React from 'react'
import './Widgets.css';
import InfoIcon from  '@material-ui/icons/Info';
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    const newsArticles = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticles("IpTechSpace is back", "Top news - 999 readers")}
            {newsArticles("There is a new Update in JavaScript", "Programming - 12.5k readers")}
            {newsArticles("Bitcoin Breaks $23k", "Crypto - 1.5k readers")}
            {newsArticles("Villareal beats Manutd to win the Europa League Cup", "Football - 5k readers")}
            {newsArticles("How often do you code with JavaScript?", "Programming - 3k readers")}
                        

        </div>
    );
}

export default Widgets; 
