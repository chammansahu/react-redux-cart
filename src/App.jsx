import React, { Component } from 'react'
import './css/style.css'
import Items from './Items'
import NavBar from './NavBar'
export class App extends Component {
    render() {
        return (
          <div>
                <h1>react redux implementaion</h1>
                <NavBar />
                <Items/>
          </div>
        );
    }
}

export default App
