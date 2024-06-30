import styles from './Cart.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {fetchGetOne} from "../../redux/slices/items"
import React from "react";
import { Button } from 'react-bootstrap';


export const Cart = ()=>{
    const storedObjects = JSON.parse(localStorage.getItem('cart') || '[]')


    if(storedObjects.lenght){
    return(
        <>
        <div className={styles.content}>
            <div className={styles.leftBlock}>
         
         
        {storedObjects.map((item)=>(
   
       <div className={styles.oneBlock}>  
   <img className={styles.imageBlock} src = {item.imageUrl}></img> 
   <div className={styles.title} >{item.title}-</div>
   <div className={styles.size}>{item.selectedSize}</div>
   <div className={styles.count}>
    <Button></Button>
    {item.count}
    <Button></Button>
    <div></div>
    </div></div>
   ))}
           
               </div>
               <div className={styles.rightBlock}></div>
               </div>

</>
    )
}}