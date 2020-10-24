
import React, { useEffect, useState } from 'react'

export default function Images() {
    //const [myinterval, setmyinterval] = useState(null)
    useEffect(() => {
        console.log("Image Mount");
        const interval = setInterval(()=>{
            console.log("Hello")
        },1000)
     return()=>{
        console.log("image unmount");
        clearInterval(interval);
     }
         
    }, [])



    return (
        <img src="https://images.unsplash.com/photo-1528965051322-6d335c69eb86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80"/>

    )
}


/*export default class Images extends Component {
    constructor(props){
        super(props);
        this.state={interval:null};
    }
    componentDidMount(){
        console.log("Image Mounted");
        this.setState({
            interval:setInterval(()=>{
                console.log("hello");
            },1000)
        })
        
    }

    componentWillUnmount(){
        console.log("Image unmounted");
        clearInterval(this.state.interval);
    }
    render() {
        return (
        )
    }
}*/
