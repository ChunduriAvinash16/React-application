
import React, { useEffect, useState } from 'react'
import Image from './Image';
import Axios from 'axios';
import useScroll from '../utils/Hooks/useScroll';
export default function Images() {
    const [images, setimages] = useState([])
    const scrollPosition=useScroll();

    const [newImage, setnewImage] = useState("");

     useEffect(() => {
        Axios.get(`${process.env.REACT_APP_UNSPLASH_URL}/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
        .then((res)=>{
            console.log(res.data);
            setimages(res.data);
        })
     }, [])

    function handleRemove(index) {
        //console.log(images.filter((image,i)=>i!=index));
       // setimages(images.filter((image,i)=>i!=index))

        setimages([
            ...images.slice(0,index),
            ...images.slice(index+1,images.length)
        ])
    }

    function Showimage(){
        return (
            images.map((img,index)=><Image  image={img.urls.regular} index={index} handleRemove={handleRemove}/>)
        ) }
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
            {scrollPosition}
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
