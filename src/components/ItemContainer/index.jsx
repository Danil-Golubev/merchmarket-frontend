import styles from './ItemContainer.module.scss'
import { Link } from 'react-router-dom'
export const ItemContainer= ({imageUrl, title, price, sizes, id})=>{
    return(
        <>

        <div className={styles.container}>
        <Link to = {`merchmarket-frontend/item/${id}`}>
            <img className = {styles.imageUrl} src = {imageUrl} alt ={title}/>
            <div className={styles.textBlock}>
           <div className={styles.mainBlock}>
            <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.block}>
            <div className={styles.price}>{price}</div>
            </div>
            </div>
            </Link>
        </div> 
    
        </>
    )
}