import React from 'react';
import './YouTubeComp.css';
const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://www.shutterstock.com/image-vector/logo-barbie-clean-vector-pink-260nw-2336799003.jpg" />
                <p className="time">{props.time}</p>
            </div>
        <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Title here',
    desc: 'xx ditonton, x hari yang lalu'
}

export default YouTubeComp;