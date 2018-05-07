import React from 'react';
import {createPost} from "../actions/actionPost";
import { store } from '../index';
import { Link } from 'react-router-dom';
import {Header} from "./header";
import {App} from "../containers/App";
import {ImageUpload} from "../containers/uploader";

export class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    onChangeTitle(e) {
        this.setState({title: e.target.value})
    }

    onChangeText(e) {
        this.setState({text: e.target.value})
    }

    onClick() {
        store.dispatch(createPost({title: this.state.title,
                                   text:  this.state.text}))

    }

    render() {
        return(
            <div className='App'>
                <Header/>
                <div>
                    <h1>Заголовок</h1>
                    <textarea cols='30' rows='1'
                    value={this.state.title} onChange={this.onChangeTitle.bind(this)}></textarea>
                </div>
                <div>
                    <h1>Пост</h1>
                    <textarea cols='70' rows='7'
                    value={this.state.text} onChange={this.onChangeText.bind(this)}></textarea>
                </div>
                <button onClick={this.onClick.bind(this)}><Link to='/'>Опубликовать</Link></button>
                <ImageUpload/>
            </div>
        )
    }
}