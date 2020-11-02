
import React, { useState } from 'react'
import Image from './Image';
import useFetchimage from '../utils/Hooks/useFetchimage';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import useDebounce from '../utils/Hooks/useDebounce';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
export default function Images() {
    const [page, setpage] = useState(0)
    const [searchTerm, setsearchTerm] = useState(null)
    const [images,setimages,errors,isLoading]=useFetchimage(page,searchTerm);
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
        const [showPreview, setshowPreview] = useState(false);

        return (
            <AnimateSharedLayout>
               <InfiniteScroll className="flex flex-wrap"  dataLength={images.length} next={()=>setpage(page+1)} hasMore={true} >       
               {images.map((img,index)=>(
               <motion.div 
                    layoutId={img.urls.regular}
                    key={index} 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    className="w-1/5 p-2  border flex justify-center"
                >
                
                <Image  
                 show={()=>setshowPreview(img.urls.regular)}
                 image={img.urls.regular}
                 handleRemove={handleRemove}
                 index={index}
                />
               </motion.div>
                ))}
               </InfiniteScroll>
               <AnimatePresence>
        {
            showPreview&&
            <motion.section  
                layoutId={showPreview} 
                exit={{opacity:0 , rotate:360 ,transition:{duration:1}}} 
                className="fixed w-full h-full flex justify-center top-0 left-0 z-40 items-center" 
                onClick={()=>setshowPreview(false)}>
            <div className="bg-white">
            <img 
                src={showPreview}  
                width="300" 
                height="auto"
                className="rounded-lg"
                />
            </div>
            </motion.section>
            }
            </AnimatePresence>
            </AnimateSharedLayout>

        ) }
    function handleChange(event){
        setnewImage(event.target.value);
        //console.log(event.target.value);
    }
    const debounce=useDebounce();
    function handleInput(e) {
        const text=e.target.value;
       debounce(()=>setsearchTerm(text))
    }

    return( 
        <section>
            <div className="my-5">
                <input type="text" placeholder="Search Photos Here" className="border rounded shadow p-2 w-full" onChange={handleInput} />
            </div>
            {
                errors.length > 0 &&(
                    <div className="flex h-screen">
                    <p className="m-auto">
                        {errors[0]}
                    </p>
                </div>
                )
            }
            <div className="gap-0" >
                <Showimage/>
                {isLoading && <Loading/>}
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
