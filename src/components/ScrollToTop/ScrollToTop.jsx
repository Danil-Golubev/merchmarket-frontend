import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import styles from './styles.module.css';

/** Компонент-решение с предотвращением сохранения скролла при изменение роута */
export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const location = useLocation(); // Хук для получения текущего маршрута

	// Функция для скроллинга страницы наверх
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// Показывать/скрывать кнопку при скроллинге
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 1600) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Сбрасывать скролл при изменении маршрута
	useEffect(() => {
		// Сбрасываем скролл при изменении маршрута без анимации
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		});

		// Принудительно скрываем кнопку после сброса скролла
		setIsVisible(false);
	}, [location]);

	return (
		<div>
			{isVisible && (
				<button className={styles.scrollToTopButton} onClick={scrollToTop}>
					↑ Back up
				</button>
			)}
		</div>
	);
};
