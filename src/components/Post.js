import React from 'react'
import '../App.css'

export class Post extends React.Component {
    render() {
        return(
            <div className='post'>
                <h1 className='title'>
                    {this.props.post.title}
                </h1>
                <text className='text'>
                    {this.props.post.text}
                </text>
            </div>
        )
    }
}