import { Link, useLocation } from 'react-router-dom'
import styles from './NavBar.module.scss'
import { useTranslation } from 'react-i18next'
import '../../i18next.js'

const NavBar = () => {
	let location = useLocation()
	const { t } = useTranslation()
	return (
		<div>
			{location.pathname === '/' ? (
				<ul className={styles.nav__active}>
					<li>
						<a href='#'>{t('NavBar.Home')}</a>
					</li>
					<li>
						<a href='#Tours'>{t('NavBar.Tours')}</a>
					</li>
				</ul>
			) : (
				<ul className={styles.nav}>
					<li>
						<Link to='/'>{t('NavBar.Home')}</Link>
					</li>
					<li>
						<Link to='/#Tours'>{t('NavBar.Tours')}</Link>
					</li>
				</ul>
			)}
		</div>
	)
}

export default NavBar
