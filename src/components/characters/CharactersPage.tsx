import { FC } from 'react'
import { useEffect } from 'react'
import styles from './characters-page.module.css'
import { CharacterCard } from '../character-card/CharacterCard'
import { useDispatch, useSelector } from '../../services/store'
import { getCharacters } from '../../services/charactersSlice'
import { ICharacter } from '../../utils/types'
export const CharactersPage: FC = () => {
	const dispatch = useDispatch()
	const characters: ICharacter[] = useSelector(getCharacters)
	console.log(characters)
	return (
		<main className={styles.charactersPage}>
			<button className={styles.toggleButton}></button>
			<section className={styles.charactersList}>
				{characters.map((character) => (
					<CharacterCard
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
