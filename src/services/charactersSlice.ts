import {
	getCharactersApi,
	// deleteCharacterApi
	postCharacterApi,
} from '../utils/game-of-thrones-api'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ICharacter } from '../utils/types'
import { get } from 'http'

export const fetchCharacters = createAsyncThunk(
	'gameOfThrones/getCharacters',
	getCharactersApi
)

export const postCharacter = createAsyncThunk(
	'gameOfThrones/postCharacter',
	postCharacterApi
)

// export const deleteCharacter = createAsyncThunk(
//     'gameOfThrones/deleteCharacter',
//     deleteCharactersApi
// )

export interface CharactersListState {
	characters: ICharacter[]
	likedCharacters: number[]
	// deletedCharacters: number[]
	isLoading: boolean
	isContain: boolean
}

export const initialState: CharactersListState = {
	characters: [],
	likedCharacters: [],
	// deletedCharacters: [],
	isLoading: false,
	isContain: false,
}

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {
		toggleLike(state, action: PayloadAction<number>) {
			const id = action.payload
			const idx = state.likedCharacters.indexOf(id)
			if (idx === -1) state.likedCharacters.push(id)
			else state.likedCharacters.splice(idx, 1)
		},
		addCharacterLocal(state, action: PayloadAction<ICharacter>) {
			state.characters.push(action.payload)
			state.isContain = true
		},
		deleteCharacterLocal(state, action: PayloadAction<number>) {
			const id = action.payload
			// state.deletedCharacters.push(id)
			state.characters = state.characters.filter((c) => c.id !== id)
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCharacters.pending, (state) => {
				state.isLoading = true
				console.log('loading')
			})
			.addCase(fetchCharacters.fulfilled, (state, action) => {
				state.isLoading = false
				// state.characters = action.payload.data;
				// console.log(action.payload.data.characters);
				state.isContain = true
				const data = action.payload as unknown as ICharacter[]
				state.characters = state.characters.concat(data)
				console.log(state.characters)
			})
			.addCase(fetchCharacters.rejected, (state, action) => {
				state.isLoading = false
				state.isContain = false
				console.log('error')
				console.log(action.error)
			})

			.addCase(postCharacter.pending, (state) => {
				state.isLoading = true
				console.log('loading')
			})
			.addCase(postCharacter.fulfilled, (state, action) => {
				state.isLoading = false
				// state.characters = action.payload;
				state.isContain = true
			})
			.addCase(postCharacter.rejected, (state) => {
				state.isLoading = false
				state.isContain = false
				console.log('error')
			})

		// .addCase(deleteCharacter.pending, (state) => {
		//     state.isLoading = true;
		//     console.log('loading');
		// })
		// .addCase(deleteCharacter.fulfilled, (state, action) => {
		//     state.isLoading = false;
		//     state.characters = action.payload.data;
		//     state.isContain = true;
		// })
		// .addCase(deleteCharacter.rejected, (state) => {
		//     state.isLoading = false;
		//     state.isContain = false;
		//     console.log('error');
		// })
	},
	selectors: {
		getCharacters: (state) => state.characters,
		getLikedCharacters: (state) => state.likedCharacters,
		getContainStatus: (state) => state.isContain,
		getLoadingStatus: (state) => state.isLoading,
	},
})

const charactersSliceReducer = charactersSlice.reducer

export const {
	getCharacters,
	getLikedCharacters,
	getContainStatus,
	getLoadingStatus,
} = charactersSlice.selectors
export { charactersSlice, charactersSliceReducer }
export const { toggleLike, addCharacterLocal, deleteCharacterLocal } =
	charactersSlice.actions
