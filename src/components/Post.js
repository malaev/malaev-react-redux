import React from 'react'
import '../App.css'
import {Link} from "react-router-dom";

export class Post extends React.Component {
    render() {
        return(
            <div className='post'>
                <h1 className='title'>
                    <Link to={'Post/' + this.props.post.title}>
                        {this.props.post.title}
                    </Link>
                </h1>
                <text className='text'>
                    {this.props.post.text}
                </text>
            </div>
        )
    }
}

