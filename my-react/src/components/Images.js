
import React, { useState } from 'react'
import Image from './Image';
import useScroll from '../utils/Hooks/useScroll';
import useFetchimage from '../utils/Hooks/useFetchimage';
import Loading from './Loading';
export default function Images() {
    const [page, setpage] = useState(0)
    const [images,setimages,errors,isLoading]=useFetchimage(page);
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
        return (
            images.map((img,index)=><Image  image={img.urls.regular} index={index} handleRemove={handleRemove}/>)
        ) }
    function handleChange(event){
        setnewImage(event.target.value);
        //console.log(event.target.value);
    }
    if(isLoading) return <Loading/>
    return( 
        <section>
            {
                errors.length>0 &&(
                    <div className="flex h-screen">
                    <p className="m-auto">
                        {errors[0]}
                    </p>
                </div>
                )
            }
            <div className="gap-0 " style={{columnCount:5}}>
                <Showimage/>
            </div>
            {
                errors.length>0?null:(
                    <button onClick={()=>setpage(page+1)}>Load More</button>
            )}
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
