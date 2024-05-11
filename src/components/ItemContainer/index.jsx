import styles from './ItemContainer.module.scss'
import { Link } from 'react-router-dom'
export const ItemContainer= ({imageUrl, title, price, sizes, id})=>{
    return(
        <>

        <div className={styles.container}>
        <Link to = {`/item/${id}`}>
            <img className = {styles.imageUrl} src = {imageUrl}/>
            <div className={styles.textBlock}>
           <div className={styles.mainBlock}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
            </div>
            <div className={styles.sizes}>{sizes}</div>
            </div>
            </Link>
        </div> 
    
        </>
    )
}