import styles from './Cart.module.scss';
import React from "react";
import { Button } from 'react-bootstrap';


export const Cart = ()=>{
    const storedObjects = JSON.parse(localStorage.getItem('cart') || '[]')


   
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
    <Button className={styles.customButton}>-</Button>
    <div className={styles.customButton}>
    {item.count}</div>
    <Button className={styles.customButton}>+</Button>
    <div></div>
    </div></div>
   ))}
           
               </div>
               <div className={styles.rightBlock}></div>
               </div>

</>
    )
}