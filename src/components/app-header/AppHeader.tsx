import { Link } from 'react-router-dom'
import styles from './app-header.module.css'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const AppHeader: FC = () => {
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.nav}>
					<button className={styles.button}>
						<Link to='/' className={styles.link}>
							Main page
						</Link>
					</button>
					<button className={styles.button}>
						<Link to='/characters' className={styles.link}>
							Characters
						</Link>
					</button>
					<button className={styles.button}>
						<Link to='/constructor' className={styles.link}>
							Constructor
						</Link>
					</button>
				</nav>
			</header>
			<Outlet />
		</>
	)
}
