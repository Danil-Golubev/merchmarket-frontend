import React from 'react';

import styles from './BottomHeader.module.scss';

export const BottomHeader = () => (
	<>
		<div className={styles.BottomHeader}>
			<div className={styles.blocktitleBottom}>
				<div className={styles.blocktitleBottomContent}>
					<div>Legal</div>
					<div>© YEAR0001</div>
				</div>
			</div>
			<div className={styles.block}>
				<div className={styles.halfblockdiagBottom}>
					<div className={styles.diagBottom}></div>
				</div>
			</div>

			<div className={styles.blocktitleBottomUl}>
				<div className={styles.blocktitleBottomContent}>
					Follow:
					<ul className={styles.ulBottom}>
						<li className={styles.liBottom}>Twitter</li>
						<li className={styles.liBottom}>Facebook</li>
						<li className={styles.liBottom}>Instagram</li>
					</ul>
				</div>
			</div>

			<div className={styles.blocktitleBottomInput}>
				<div className={styles.blocktitleBottomContent}>
					<ul className={styles.ulBottom}>
						<li>Enter the email</li>
						<input className={styles.input} title={'enter the email here'} type='text'></input>
					</ul>
				</div>
			</div>
		</div>
	</>
);
