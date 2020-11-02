import { AnimatePresence, motion } from 'framer-motion';
import React, { useState} from 'react';
export default function Image({show,index,handleRemove,image}) {
    const [isHovering, setisHovering] = useState(false);
    const [showPreview, setshowPreview] = useState(false);

    return (
        <div className="relative"   
            onMouseEnter={()=>setisHovering(true)}
           onMouseLeave={()=>setisHovering(false)}>
         <i className={`fas fa-times right-0 absolute cursor-pointer bg-white-600 hover:bg-white-900 ${isHovering===true?"":"hidden"}`} 
           onClick={()=>handleRemove(index)}
           >    
        </i>
         <img 
            src={image}  
            width="100%"
            height="auto" 
            onClick={show}
        />
        </div>
    );
}
