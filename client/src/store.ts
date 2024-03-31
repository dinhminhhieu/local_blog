import { configureStore } from '@reduxjs/toolkit'
import blogSlice from 'pages/blog/blog.slice'

export const store = configureStore({
  reducer: { blog: blogSlice }
})

// Định nghĩa kiểu dữ liệu RootState đại diện cho trạng thái dữ liệu toàn cục của ứng dụng
export type RootState = ReturnType<typeof store.getState>

// Định nghĩa kiểu dữ liệu AppDispatch dùng để gửi các action đến redux store
export type AppDispatch = typeof store.dispatch
