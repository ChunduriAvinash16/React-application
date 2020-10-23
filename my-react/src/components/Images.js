import React, { Component } from 'react'

export default class Images extends Component {
    componentWillUnmount(){
        console.log("Inside unmount");
    }
    render() {
        return (
            <img src="https://images.unsplash.com/photo-1528965051322-6d335c69eb86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"/>
        )
    }
}
