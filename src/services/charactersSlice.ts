import {
	getCharactersApi,
	// deleteCharacterApi
	postCharacterApi,
} from '../utils/game-of-thrones-api'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ICharacter } from '../utils/types'

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
	isLoading: boolean
	isContain: boolean
}

export const initialState: CharactersListState = {
	characters: [],
	isLoading: false,
	isContain: false,
}

const charactersSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {},
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
				state.characters = action.payload as unknown as ICharacter[]
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
		getContainStatus: (state) => state.isContain,
		getLoadingStatus: (state) => state.isLoading,
	},
})

const charactersSliceReducer = charactersSlice.reducer

export const { getCharacters, getContainStatus, getLoadingStatus } =
	charactersSlice.selectors
export { charactersSlice, charactersSliceReducer }
