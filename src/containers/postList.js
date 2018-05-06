import React from 'react'
import {connect} from "react-redux";
import {Post} from "../components/Post";
import {Header} from "../components/header";

class PostList extends React.Component {
    render() {
        if ((this.props.postList).length === 0)
            return(
                <h1>Nothing to show...</h1>
            );
        else
            return (
                this.props.postList.map((post) => {
                    return(
                        <Post post={post}/>
                    )
                })
            )
    }
}

function mapStateToProps(state) {
    return {
        postList: state.postList
    }
}

export default connect(mapStateToProps)(PostList)