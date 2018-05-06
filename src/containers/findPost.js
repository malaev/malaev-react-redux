import React from 'react'
import {connect} from "react-redux";
import {Post} from "../components/Post";
import {Header} from "../components/header";

export class FindPost extends React.Component {
    render() {
        return this.props.postList.map((post) => {
            if (post.title === this.props.match.params.id){
                return (
                    <div className='App'>
                        <Header/>
                        <div className='wrap'>
                            <Post post={post}/>
                        </div>
                    </div>
                )
            }
        })
    }
}

function mapStateToProps(state) {
    return {
        postList: state.postList
    }
}

export default connect(mapStateToProps)(FindPost)