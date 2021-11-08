import React, {useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const Protected = (props) =>{
    let Cmp = props.Cmp
    console.log(Cmp);
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            history.push('/login');
        }
    })  
    return (
        <div>
            <Cmp />
        </div>
    );
}
export default Protected;