import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../redus/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})