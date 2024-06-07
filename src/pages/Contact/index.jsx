import { ItemContainer } from "../../components/ItemContainer"
import styles from './Contact.module.scss';
import { useDispatch, useSelector } from "react-redux";
import axios from '../../axios';
import React from "react";
import { ItemContainerSkeleton } from "../../components/ItemContainerSkeleton";

export const Contact = ()=>{
    
    return (
   <>
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
   </>
    );
  };