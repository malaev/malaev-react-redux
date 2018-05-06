import React, { Component } from 'react';
import '../App.css';
import {Header} from "../components/header";
import PostList from "./postList";

export class App extends Component {
  render() {
      return (
          <div className="App">
              <Header/>
              <div className='wrap'>
                <PostList/>
              </div>
          </div>
    );
  }
}
