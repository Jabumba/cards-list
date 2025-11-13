import { charactersSlice } from './charactersSlice'
import { combineSlices } from '@reduxjs/toolkit'

export const rootReducer = combineSlices(charactersSlice)
