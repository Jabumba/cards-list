import { ICharacter } from './types'
// const MAIN_URL = process.env.THRONES_API_URL;
const THRONES_API_URL = 'https://thronesapi.com/api/v2'

const checkResponse = <T>(res: Response): Promise<T> =>
	res.ok ? res.json() : res.json().then((err) => Promise.reject(err))

type TServerResponse<T> = {
	success: boolean
} & T

type TCharactersResponse = TServerResponse<{
	data: ICharacter[]
}>

export const getCharactersApi = () =>
	fetch(`${THRONES_API_URL}/characters`)
		.then((res) => checkResponse<TCharactersResponse>(res))
		.then((data) => {
			console.log(data)
			return data
		})

export const postCharacterApi = (data: ICharacter) =>
	fetch(`${THRONES_API_URL}/characters`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error('Fetch error:', error))
