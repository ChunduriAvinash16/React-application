import React, { useEffect, useState } from 'react'

export default function useScroll() {   
    const [scrollPosition, setscrollPosition] = useState(null);

    function handleScroll() {
        setscrollPosition(window.scrollY);
    }

    useEffect(() => {
        document.addEventListener('scroll',handleScroll);
        return()=> document.removeEventListener('scroll',handleScroll);
    }, [])


    return scrollPosition;
}
