import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../../components/Loading';
import AppContext from '../../../store/AppContext'

export default function AuthRoute({children,...rest}) {
    const [isLoggedIn,user]=useContext(AppContext);
    

    if(isLoggedIn) {
        return (<Route {...rest}>
        <motion.div initial={{x:200}} animate={{x:0}}>
            {children} 
        </motion.div>
    </Route>);
    }
        return <Redirect to="/login" />;

}
