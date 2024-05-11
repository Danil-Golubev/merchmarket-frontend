import { ItemContainer } from "../../components/ItemContainer"
import styles from './Other.module.scss';
import { useDispatch, useSelector } from "react-redux";
import axios from '../../axios';
import React from "react";
import {fetchGetItems, fetchGetOther} from "../../redux/slices/items"
export const Other = ()=>{
   const [items, setItems] = React.useState('');
   const [isLodaing, setLoading] = React.useState(true)
   const dispatch = useDispatch()
   React.useEffect(()=>{
      setLoading(true)
      dispatch(fetchGetOther())
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
      return (<><h1>lOADING</h1></>)
   }
    return(
        <>
        <div className={styles.container}>
         {items.map((item)=>
        <ItemContainer
        imageUrl = {item.imageUrl}
        title = {item.title}
        price = {'65$'}
        sizes = {[1,2,3]}
        id ={item._id}
        />)}
        </div>
        </>
    )
}
