import styles from './ItemContainerSkeleton.module.scss';
import { Link } from 'react-router-dom';
export const ItemContainerSkeleton = ({ imageUrl, title, price, sizes, id }) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.skeletonText}>
					<div className={styles.skeletonImage}>
						<div className={styles.skeletonText}>
							<div className={styles.imageUrl}></div>
							<div className={styles.textBlock}>
								<div className={styles.textBlock}>
									<div className={styles.mainBlock}>
										<div className={styles.title}>{title}</div>
									</div>
									<div className={styles.block}>
										<div className={styles.price}>{price}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
