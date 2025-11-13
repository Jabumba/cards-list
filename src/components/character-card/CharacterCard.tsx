import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './character-card.module.css'
import heartIcon from '../../assets/images/heart-icon.svg'
import deleteIcon from '../../assets/images/delete-icon.svg'
import { ICharacter } from '../../utils/types'

export type TCharacterCardProps = {
	id: number
	fullName: string
	title: string
	imageUrl?: string
}

export const CharacterCard: FC<TCharacterCardProps> = ({
	id,
	fullName,
	title,
	imageUrl,
}) => {
	return (
		<article key={id} className={styles.characterCard}>
			<div className={styles.likeContainer}>
				<svg
					width='30px'
					height='30px'
					viewBox='0 0 24 24'
					fill='transparent'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						opacity='0.15'
						d='M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z'
						fill='#000000'
					/>
					<path
						d='M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z'
						stroke='#000000'
						stroke-width='1.5'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</svg>
			</div>
			<img className={styles.characterImage} src={imageUrl} alt='' />
			<div className={styles.characterDetails}>
				<h2>{title} </h2>
				<p>{fullName}</p>
			</div>
			<div className={styles.deleteButtonContainer}></div>
		</article>
	)
}
