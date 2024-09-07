import React from 'react';

import styles from './Contact.module.scss';

export const Contact = () => (
	<>
		<div className={styles.container}>
			<div className={styles.diagBlock}>
				<div className={styles.diag}></div>
			</div>
			<div className={styles.infoBlock}>
				<div className={styles.textinfo}>Contact</div>
				<div className={styles.textinfo}>
					For all questions regarding your order, please contact support@merchworld.se
				</div>
				<div className={styles.textinfo}>For all product related questions, please contact info@year0001.com</div>
			</div>
		</div>
	</>
);
