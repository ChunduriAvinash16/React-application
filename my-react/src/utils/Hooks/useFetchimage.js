import Axios from 'axios';
import { useState,useEffect } from 'react';

const api=process.env.REACT_APP_UNSPLASH_API
const secret=process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchimage(page,searchTerm) {
    const [Images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoding, setisLoding] = useState(false)

    useEffect(() => {
        const url=searchTerm===null?"photos" : "search/photos";
        setisLoding(true);
        Axios.get(`${api}/${url}?client_id=${secret}&page=${page}&query=${searchTerm}`)
        .then((res)=>{
        (searchTerm)?(page>1)?setImages([...Images,...res.data.results]):setImages([...res.data.results]):setImages([...Images,...res.data]);
        setisLoding(false)
        })
        .catch((e)=>{
            setErrors(e)
            setisLoding(false);   
        });
    
    },[page,searchTerm])
    

    return [Images,setImages,errors,isLoding];
}
