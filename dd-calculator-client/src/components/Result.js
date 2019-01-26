import React, {Component} from 'react';
import './Result.css';

const Result = (props) => {
    return(
        <div className="result-container">
            The difference between the dates is <span className="result">{props.result}</span> days.
        </div>
    );
}

export default Result;