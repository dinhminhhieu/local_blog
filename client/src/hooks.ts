import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Khi sử dụng useSelector không cần phải khai báo (state: RootState)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// Khi sử dụng useDispatch trong một hàm bất đồng bộ có thể tùy chỉnh middleware thunk
export const useAppDispatch: () => AppDispatch = useDispatch
