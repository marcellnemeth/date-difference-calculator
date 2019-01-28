import React, {Component} from 'react';
import './Result.css';

const Result = (props) => {
    return(
        <div className="result-container">
            {typeof props.result === 'number'?<div>The difference between the dates is <span className="result">{props.result}</span> days.
            </div>:<div>{props.result}</div>
        }
        </div>
    );
}

export default Result;