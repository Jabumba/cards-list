import clsx from 'clsx'
import * as ReactDOMClient from 'react-dom/client'
import React from 'react'
import style from './index.module.scss'
import { App } from './components/app/App'
import { Provider } from 'react-redux'
import './index.scss'
// import styles from './index.scss';
import { BrowserRouter } from 'react-router-dom'
import store from './services/store'
// import store from './services/store';
console.log(style)
console.log(style) //использование объекта style важно для попадания стилей в css-бандл

const entry = document.getElementById('root') as HTMLDivElement
const root = ReactDOMClient.createRoot(entry)

root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter
			// future={{ v7_relativeSplatPath: true, v7_startTransition: true, }}
			>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
)
