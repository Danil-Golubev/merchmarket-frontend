import { ItemContainer } from "../../components/ItemContainer"
import { ItemContainerSkeleton } from "../../components/ItemContainerSkeleton"
import {Link} from 'react-router-dom'
import styles from './Home.module.scss';
import { useDispatch, useSelector } from "react-redux";
import axios from '../../axios';
import React from "react";
import {fetchGetItems} from "../../redux/slices/items"

export const Home = ()=>{
   const [items, setItems] = React.useState('');
   const [isLodaing, setLoading] = React.useState(true)
   const dispatch = useDispatch()
   React.useEffect(()=>{
      setLoading(true)
      dispatch(fetchGetItems())
      .then(res=>{
         setItems(res.payload)
         setLoading(false)
      })
      .catch((err)=>{
         console.warn(err.message)
         alert("redux items error")
      })
   }, [])
   console.log(items)
   if(isLodaing){
      return (<>
     <div className={styles.container}>
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    <ItemContainerSkeleton/> 
    </div>
   
      
      </>)
   }
    return(
        <>  
   <div className={styles.container}>
         {items.map((item)=>
        <ItemContainer
        imageUrl = {item.imageUrl}
        title = {item.title}
        price = {'$'+ item.price+'.00'}
        
        id ={item._id}
        /> 
       )}   
        </div>
   
        </>
    )
}
