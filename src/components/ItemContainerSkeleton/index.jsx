import styles from './ItemContainerSkeleton.module.scss';

export const ItemContainerSkeleton = ({ title, price }) => (
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
