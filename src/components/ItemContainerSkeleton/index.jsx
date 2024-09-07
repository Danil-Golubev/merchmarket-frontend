import styles from './ItemContainerSkeleton.module.scss';

export const ItemContainerSkeleton = ({ title, price }) => (
	<>
		<div className={styles.modal}>
			{' '}
			<div className={styles.title}>
				Пожалуйста подождите, проект не является коммерческим и размещен на бесплатном хостинге.
				<br /> Первичная загрузка может занять до 10 секунд, потом все будет ок =)
			</div>
		</div>
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
