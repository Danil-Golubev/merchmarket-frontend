import React from 'react';

import { Button } from 'react-bootstrap';

import styles from './Cart.module.scss';

export const Cart = () => {
	const storedObjects = JSON.parse(localStorage.getItem('cart') || '[]');
	const totalPrice = storedObjects
		.map((item) => item.price * item.count)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return (
		<>
			<div className={styles.content}>
				<div className={styles.leftBlock}>
					{storedObjects.map((item) => (
						// eslint-disable-next-line react/jsx-key
						<div className={styles.oneBlock}>
							<img className={styles.imageBlock} src={item.imageUrl}></img>

							<div className={styles.title}>{item.title}</div>
							<div className={styles.size}>{item.selectedSize}</div>
							<div className={styles.count}>
								<Button className={styles.customButton}>-</Button>
								<div className={styles.customButton}>{item.count}</div>
								<Button className={styles.customButton}>+</Button>
								<div></div>
							</div>
							<div className={styles.price}>${item.price * item.count}.00 </div>
						</div>
					))}
				</div>
				<div className={styles.rightBlock}>
					<div className={styles.rightBlockContent}>
						<img className={styles.smileSvg} src={'https://www.svgrepo.com/show/71651/smile.svg'}></img>
						<div className={styles.infoBox}>
							What to do if you receive a damaged merchandise item and all information about refund policy located on
							our F.A.Q page page, visit it to get a advanced information about our order political.
						</div>
						<div className={styles.totalLine}>
							<div className={styles.totalMainTitle}>Your order:</div>
							<div className={styles.infoBlock}>
								<div className={styles.totalTitle}>Items price</div>
								<div className={styles.totalInfo}>${totalPrice}</div>
							</div>
							<a>{'==>'}</a>
							<div className={styles.infoBlock}>
								<div className={styles.totalTitle}>Shipping price</div>
								<div className={styles.totalInfo}>$35</div>
							</div>
							<a>{'==>'}</a>
							<div className={styles.infoBlock}>
								<div className={styles.totalTitle}>Total price</div>
								<div className={styles.totalInfo}>${totalPrice + 35}</div>
							</div>
						</div>
						<Button className={styles.purchaseButton}>Checkout and spend ${totalPrice + 35}</Button>
					</div>
				</div>
			</div>
		</>
	);
};
