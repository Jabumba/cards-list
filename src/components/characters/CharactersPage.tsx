import { FC, useState } from 'react'
import { useEffect } from 'react'
import styles from './characters-page.module.css'
import { CharacterCard } from '../character-card/CharacterCard'
import { useDispatch, useSelector } from '../../services/store'
import {
	fetchCharacters,
	getCharacters,
	getLikedCharacters,
} from '../../services/charactersSlice'
import { ICharacter } from '../../utils/types'
import { get } from 'http'
export const CharactersPage: FC = () => {
	const dispatch = useDispatch()
	const [state, updateState] = useState<boolean>(false)
	// useEffect(() => {
	//     dispatch(fetchCharacters());
	// }, [dispatch])

	const characters: ICharacter[] = useSelector(getCharacters)
	const likedCharactersId = useSelector(getLikedCharacters)
	// console.log(characters)
	const togglingMode = (e: React.MouseEvent) => {
		e.stopPropagation()
		updateState(!state)
		console.log(state)
	}
	// console.log(likedCharactersId)
	// const likedCharacters: ICharacter[] = [...characters].sort((a, b) => {
	//     const aLiked = likedCharactersId.includes(a.id)
	//     const bLiked = likedCharactersId.includes(b.id)

	//     if (aLiked && !bLiked) return -1
	//     if (!aLiked && bLiked) return 1
	//     return 0
	// })

	const likedCharacters: ICharacter[] = characters.filter((character) =>
		likedCharactersId.includes(character.id)
	)

	// console.log(state ? likedCharacters : characters);
	console.log(characters[0])
	console.log(likedCharacters, 'LIKED')
	return (
		<main className={styles.charactersPage}>
			<svg
				onClick={togglingMode}
				viewBox='0 0 24 24'
				fill={state ? 'black' : 'transparent'}
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z'
					stroke='#000000'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
			<section className={styles.charactersList}>
				{(state ? likedCharacters : characters).map((character) => (
					<CharacterCard
						key={character.id}
						id={character.id}
						fullName={character.fullName}
						title={character.title}
						imageUrl={character.imageUrl}
					/>
				))}
				{/* <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard />
                <CharacterCard /> */}
			</section>
		</main>
	)
}
