import React from 'react';

import { useDispatch } from 'react-redux';

import styles from './Home.module.scss';
import { ItemContainer } from '../../components/ItemContainer';
import { ItemContainerSkeleton } from '../../components/ItemContainerSkeleton';
import { fetchGetItems } from '../../redux/slices/items';

export const Home = () => {
	const [items, setItems] = React.useState('');
	const [isLodaing, setLoading] = React.useState(true);
	const dispatch = useDispatch();
	React.useEffect(() => {
		setLoading(true);
		dispatch(fetchGetItems())
			.then((res) => {
				setItems(res.payload);
				setLoading(false);
			})
			.catch((err) => {
				console.warn(err.message);
				alert('redux items error');
			});
	}, []);
	console.log(items);
	if (isLodaing) {
		return (
			<>
				<div className={styles.container}>
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
					<ItemContainerSkeleton />
				</div>
			</>
		);
	}
	return (
		<>
			<div className={styles.container}>
				{items.map((item) => (
					// eslint-disable-next-line react/jsx-key
					<ItemContainer id={item._id} imageUrl={item.imageUrl} price={'$' + item.price + '.00'} title={item.title} />
				))}
			</div>
		</>
	);
};
