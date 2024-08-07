import React from 'react';

import styles from './Contact.module.scss';

export const Contact = () => (
	<>
		<div className={styles.container}>
			<div className={styles.diagBlock}>
				<div className={styles.diag}></div>
			</div>
			<div className={styles.infoBlock}>
				<div className={styles.contentBlock}>
					<ul className={styles.contentUl}>
						<li className={styles.contentLi}>
							<div className={styles.LiText}>Contact us</div>
						</li>
						<li className={styles.contentLi}>
							<div className={styles.LiText}>
								Have you checked our Customer Service pages to see if your inquiry is covered there?
							</div>
						</li>
						<li className={styles.contentLi}>
							<div className={styles.LiText}>Go to: </div>
						</li>

						<li className={styles.contentLi}>
							<input className={styles.input} type='text' title={'enter the email here'}></input>
						</li>
						<li className={styles.contentLi}>
							<input className={styles.input} type='text' title={'enter the email here'}></input>
						</li>
						<li className={styles.contentLi}>
							<input className={styles.input} type='text' title={'enter the email here'}></input>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</>
);
