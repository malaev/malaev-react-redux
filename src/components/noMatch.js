import React from 'react'
import {Header} from "./header";

export class NoMatch extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <div className='wrap'>
                    <h1>Page not found</h1>
                </div>
            </div>
        )
    }
}