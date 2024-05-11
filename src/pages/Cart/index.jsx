import styles from './Cart.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {fetchGetOne} from "../../redux/slices/items"
import React from "react";



export const Cart = ()=>{
    const storedObjects = JSON.parse(localStorage.getItem('cart') || '[]')

    return(
        <>
        {storedObjects.map((item)=>
       <div className={styles.oneBlock}> 
   <img className={styles.imageBlock} src = {item.imageUrl}></img> 
   <div className={styles.title} >{item.title}-{item.selectedSize}</div>
   <div className={styles.size}>{item.selectedSize}</div>
   <div className={styles.count}>{item.count}</div>
   
   
   </div>
            )}

</>
    )
}