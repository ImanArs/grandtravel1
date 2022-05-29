import styles from './Header.module.scss'
import NavBar from '../NavBar/NavBar'
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage'
import { Link } from 'react-router-dom'

const Header = ({ setInfo, info }) => {
	return (
		<header className={styles.header}>
			<Link to='/'>
				<div>
					<img src="https://i.ibb.co/5220BhK/Logo.png" alt="logo" width={100} />
				</div>
			</Link>
			<NavBar />
			<div className={styles.header__right}>
				<ChangeLanguage setInfo={setInfo} info={info} />
			</div>
		</header>
	)
}

export default Header
