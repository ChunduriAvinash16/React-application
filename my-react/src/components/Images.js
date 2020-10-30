
import React, { useEffect, useState } from 'react'

export default function Images() {
    const [images, setimages] = useState([
        "https://images.unsplash.com/photo-1604011854873-76e939ef5a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1528965051322-6d335c69eb86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80",
        "https://images.unsplash.com/photo-1604006630833-48b447bd57e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1604005013757-95abc04c0d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1925&q=80",

    ])
    
    const [newImage, setnewImage] = useState("");
    function handleRemove(index) {
        //console.log(images.filter((image,i)=>i!=index));
       // setimages(images.filter((image,i)=>i!=index))

        setimages([
            ...images.slice(0,index),
            ...images.slice(index+1,images.length)
        ])
    }


    function Showimage(){
        return(
            images.map((image,index)=>{
                return(
                    <div className="w-1/3 my-4 flex justify-center"  key={index}>
                        <img src={image} width="150" onClick={()=>handleRemove(index)}/>
                    </div>
                );
            })
        )
    }
    function handleAdd(){
        if(newImage){
            setimages([newImage,...images]);
            setnewImage("");
        }


        //console.log("Working");
    }

    function handleChange(event){
        setnewImage(event.target.value);
        //console.log(event.target.value);
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <Showimage/>
            </div>
            <div className="flex justify-between my-5">
                <input type="text"
                value={newImage}
                className="p-2 border border-gray-800 shadow rounded w-full" onChange={handleChange}/>
                <button 
                    disabled={newImage==""} 
                    className={`p-2  text-white ml-2 ${newImage==""?"bg-blue-400":"bg-blue-900"}`} 
                    onClick={handleAdd}>
                    Add
                </button>   
            </div> 
        </section>
        
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
