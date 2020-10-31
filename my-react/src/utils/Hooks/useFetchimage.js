import Axios from 'axios';
import React, { useState,useEffect } from 'react';

const url=process.env.REACT_APP_UNSPLASH_URL
const secret=process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchimage(page) {
    const [Images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoding, setisLoding] = useState(false)

    useEffect(() => {
        setisLoding(true);
        Axios.get(`${url}/?client_id=${secret}&page=${page}`)
        .then((res)=>{
        //console.log(res.data);
            setImages([...Images,...res.data]);
            setisLoding(false)
        })
        .catch((e)=>{
            setErrors(e.response.data.errors)
            setisLoding(false);   
        });
    
    },[page])
    

    return [Images,setImages,errors,isLoding];
}
