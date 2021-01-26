import { configureStore } from '@reduxjs/toolkit'
import todo from './todo';

export default configureStore({
  reducer: {
    todo,
  }
})