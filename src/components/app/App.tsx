import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import styles from './App.module.css'
import { AppHeader } from '../app-header/AppHeader'
import { MainPage } from '../main/Main'
import { CharactersPage } from '../characters/CharactersPage'
import { useDispatch } from '../../services/store'
import { fetchCharacters } from '../../services/charactersSlice'
import { useEffect } from 'react'
export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCharacters())
	}, [dispatch])

	return (
		<div className={styles.app}>
			<Routes>
				<Route path='/' element={<AppHeader />}>
					<Route index element={<MainPage />} />
					<Route path='characters' element={<CharactersPage />} />
					{/* <Route path='create-product' element={<ConstructorPage />} /> */}
					{/* <Route path='products/:id' element={<Product />} /> */}
				</Route>
			</Routes>
		</div>
	)
}
