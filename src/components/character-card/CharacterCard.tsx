import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './character-card.module.css'
import { ICharacter } from '../../utils/types'
import { useDispatch, useSelector } from '../../services/store' // ваш hook
import {
	toggleLike,
	getLikedCharacters,
	deleteCharacterLocal,
} from '../../services/charactersSlice'
import { on } from 'events'

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
	const dispatch = useDispatch()
	const likedCharacters = useSelector(getLikedCharacters)
	const liked: boolean = likedCharacters.includes(id) ? true : false

	const onLikeClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		dispatch(toggleLike(id))
	}

	const onDeleteClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		dispatch(deleteCharacterLocal(id))
	}

	return (
		<article className={styles.characterCard}>
			<div className={styles.likeContainer}>
				<svg
					viewBox='0 0 24 24'
					fill={liked ? 'black' : 'transparent'}
					xmlns='http://www.w3.org/2000/svg'
					onClick={onLikeClick}
				>
					<path
						d='M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z'
						stroke='#000000'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>

				<svg
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
					onClick={onDeleteClick}
				>
					<path
						d='M19 5L5 19M5.00001 5L19 19'
						stroke='#000000'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
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
