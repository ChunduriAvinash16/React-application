
import React, { useEffect, useState } from 'react'
import Image from './Image';
import useScroll from '../utils/Hooks/useScroll';
import useFetchimage from '../utils/Hooks/useFetchimage';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
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
            <InfiniteScroll className="flex flex-wrap" loader={<Loading/>}dataLength={images.length} next={()=>setpage(page+1)} hasMore={true} >       
               {images.map((img,index)=><Image  image={img.urls.regular} index={index} handleRemove={handleRemove}/>)}
            </InfiniteScroll>
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
            <div className="gap-0" >
                <Showimage/>
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
