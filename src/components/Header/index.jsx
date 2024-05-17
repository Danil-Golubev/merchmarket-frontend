import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import React from "react";

export const Header = ()=>{

    const [totalAmount,setTotalAmount] = React.useState(0)
    const [totalItems,setTotalItems] = React.useState(0)
    function updateTotalAmount(){

        const g = JSON.parse(localStorage.getItem('cart') || '[]')
     setTotalAmount(g.map(item => item.price * item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0));
     setTotalItems(g.map(item =>  item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    }
    React.useEffect(()=>{
        const cartChangeHandler = () =>{
            updateTotalAmount();
         
        }
        window.addEventListener('cartChange', cartChangeHandler)
        updateTotalAmount();
    },[])

    return(
        <>
        <div className={styles.Header}>
    <div className={styles.blocktitle}><div className={styles.title}>Yung lean world</div></div>
    <div className={styles.block2}>
    <div className={styles.halfblock}><div className={styles.halfblockcontent}>Title:</div>  </div>
    <div className={styles.halfblocklist}><div className={styles.halfblockcontent}>Pages:
<ul className= {styles.pageslist}>
   <Link to = "/"> <li> <div className={styles.pagetitle}>All items </div></li></Link>
    <li> <div className={styles.pagetitle}>Contact </div></li>
    <li> <div className={styles.pagetitle}>FAQs </div></li>

    </ul>
    </div></div>
    </div>

    <div className={styles.block}>
    <Link to = "/cart">
    <div className={styles.halfblock}><div className={styles.halfblockcontent}>
        <div className={styles.bag}>
        {`Bag:${totalItems}`}
</div>
    <div className={styles.amount}>
   {`Amount:${totalAmount} $`}
   </div>
    </div> 
     </div>
  
    
    <div className={styles.halfblockdiag}>
        <div className={styles.diag}></div>
        </div>
        </Link>
    </div>

            </div>
        
        </>
    )
}
