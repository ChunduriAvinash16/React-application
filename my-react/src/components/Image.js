import React, { useState} from 'react';
export default function Image({index,handleRemove,image}) {
    const [isHovering, setisHovering] = useState(false);
    return (
        <div className="w-1/3 p-2  border flex justify-center"  key={index}>
        <div className="relative"   
            onMouseEnter={()=>setisHovering(true)}
           onMouseLeave={()=>setisHovering(false)}>
         <i className={`fas fa-times right-0 absolute cursor-pointer bg-white-600 hover:bg-white-900 ${isHovering===true?"":"hidden"}`} 
           onClick={()=>handleRemove(index)}
           >    
        </i>
         <img src={image} width="100%" 
       
         />
        </div>
    </div>       
    )
}
