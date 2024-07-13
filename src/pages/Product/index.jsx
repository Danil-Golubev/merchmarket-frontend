import React from 'react';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './Item.module.scss';
import { fetchGetOne } from '../../redux/slices/items';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

export const Product = () => {
	const dispatch = useDispatch();
	const [items, setItems] = React.useState('');
	const [selectedSize, setSelectedSize] = React.useState(null);
	const [cart, setCart] = React.useState(cartFromLocalStorage);

	function addToCart() {
		const item = {
			_id: items._id,
			title: items.title,
			selectedSize: selectedSize ? selectedSize : 'o.s.',
			price: items.price,
			imageUrl: items.imageUrl,
			count: 1,
		};
		const targetid = item._id;
		const targetSize = item.selectedSize;
		const targetItem = cart.find((obj) => obj._id === targetid && obj.selectedSize === targetSize);
		if (targetItem != undefined) {
			cart[cart.indexOf(targetItem)].count += 1;
			console.log('найден похожий элемент');
		} else {
			cartFromLocalStorage.push(item);
		}
		setCart(cartFromLocalStorage);
		localStorage.setItem('cart', JSON.stringify(cartFromLocalStorage));
		const cartChangeEvent = new Event('cartChange');
		window.dispatchEvent(cartChangeEvent);
	}

	const { id } = useParams();
	React.useEffect(() => {
		dispatch(fetchGetOne(id))
			.then((res) => {
				setItems(res.payload);
			})
			.catch((err) => {
				console.warn(err.message);
				alert('redux items error');
			});
	}, []);

	return (
		<>
			<div className={styles.container}>
				<div className={styles.bighalfblock}>
					<img className={styles.image} src={`${items.imageUrl}`} />
				</div>
				<div className={styles.bighalfblockinfo}>
					<div className={styles.infocontainer}>
						<div className={styles.contentcontainer}>
							<ul className={styles.defaultul}>
								<li className={styles.defaultli}>
									{' '}
									<div>{items.title}</div>
								</li>
								<li className={styles.defaultli}>
									{' '}
									<div>{items.description}</div>
								</li>
								<li className={styles.defaultli}>
									{' '}
									<div className={styles.sizeContainer}>
										{items.sizes?.map((item) =>
											item.count > 0 ? (
												// eslint-disable-next-line react/jsx-key
												<div
													className={`${styles.sizeBlock} ${selectedSize === item.sizeName ? styles.selected : ''}`}
													onClick={() => setSelectedSize(item.sizeName)}
												>
													{item.sizeName}
												</div>
											) : (
												// eslint-disable-next-line react/jsx-key
												<div className={styles.sizeBlockSold}>{item.sizeName}</div>
											),
										)}
									</div>
								</li>

								<li className={styles.defaultli}>
									{selectedSize != null || items.type == 'other' ? (
										<div onClick={() => addToCart()} className={styles.buttonOrder}>
											Add to cart
										</div>
									) : (
										<>
											<div className={styles.buttonOrder}>Add to cart</div>
										</>
									)}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			{items.additionalImages?.map((item) => (
				// eslint-disable-next-line react/jsx-key
				<div className={styles.additionalImageDiv}>
					<img className={styles.additionalImage} src={`${item}`} />
				</div>
			))}
		</>
	);
};
