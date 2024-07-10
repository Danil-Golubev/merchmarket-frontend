import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
export const Header = () => {
	const [totalAmount, setTotalAmount] = React.useState(0);
	const [totalItems, setTotalItems] = React.useState(0);
	function updateTotalAmount() {
		const g = JSON.parse(localStorage.getItem('cart') || '[]');
		setTotalAmount(
			g.map((item) => item.price * item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0),
		);
		setTotalItems(g.map((item) => item.count).reduce((accumulator, currentValue) => accumulator + currentValue, 0));
	}
	React.useEffect(() => {
		const cartChangeHandler = () => {
			updateTotalAmount();
		};
		window.addEventListener('cartChange', cartChangeHandler);
		updateTotalAmount();
	}, []);

	return (
		<>
			<div className={styles.Header}>
				<div className={styles.blocktitle}>
					<div className={styles.title}>
						<img
							className={styles.image}
							src={'https://na.yungleangear.com/cdn/shop/t/4/assets/logo.svg?v=83476718230062498121697746479'}
						/>
					</div>
				</div>
				<div className={styles.block2}>
					<div className={styles.halfblocklist}>
						<div className={styles.halfblockcontent}>You're on:</div>

						<div className={styles.halfblockcontentTitle}></div>
					</div>
					<div className={styles.halfblocklist}>
						<div className={styles.halfblockcontent}>
							Pages:
							<ul className={styles.pageslist}>
								<Link to='/merchmarket-frontend'>
									{' '}
									<li>
										{' '}
										<div className={styles.pagetitle}>All items </div>
									</li>
								</Link>
								<Link to='/merchmarket-frontend/contact'>
									<li>
										{' '}
										<div className={styles.pagetitle}>Contact </div>
									</li>
								</Link>
								<li>
									{' '}
									<div className={styles.pagetitle}>FAQs </div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles.block}>
					<Link to='/merchmarket-frontend/cart'>
						<div className={styles.halfblock2}>
							<div className={styles.halfblockcontentBag}>
								<div className={styles.bag}>
									<div className={styles.bagTag}>Items</div>
									{`${totalItems}`}
								</div>
								<div className={styles.amount}>
									<div className={styles.amountTag}>Amount</div>
									{`$${totalAmount}.00`}
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
	);
};
