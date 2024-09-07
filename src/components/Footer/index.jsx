import React from 'react';

import styles from './Footer.module.scss';

export const Footer = () => (
	<>
		<div className={styles.Header}>
			<div className={styles.blocktitle}>
				<div className={styles.title}>made by @ownantwerp</div>
			</div>
			<div className={styles.block2}>
				<div className={styles.halfblocklist}>
					<div className={styles.halfblockcontent}>
						Follow:
						<ul className={styles.pageslist}>
							<a href='https://www.instagram.com/yunglean2001/' rel='noopener noreferrer' target='_blank'>
								<div className={styles.pagetitle}>Instagram </div>
							</a>
							<a href='https://twitter.com/yungleann' rel='noopener noreferrer' target='_blank'>
								<div className={styles.pagetitle}>Twitter </div>
							</a>
							<a href='https://www.facebook.com/arizonaicedoutboys/' rel='noopener noreferrer' target='_blank'>
								<div className={styles.pagetitle}>Facebook </div>
							</a>
						</ul>
					</div>
				</div>
			</div>

			<div className={styles.block}>
				<div className={styles.halfblockdiag}>
					<div className={styles.diag}></div>
				</div>
			</div>
		</div>
	</>
);
