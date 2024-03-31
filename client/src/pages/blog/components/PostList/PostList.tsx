import React, { Fragment, useEffect } from 'react'
import PostItem from '../PostItem'
import SkeletonPost from '../SkeletonPost/SkeletonPost'
import { useAppDispatch, useAppSelector } from 'hooks'
import { deletePost, getPostList, startEditPost } from 'pages/blog/blog.slice'

const PostList = () => {
  const postList = useAppSelector((state) => state.blog.postList)
  const loading = useAppSelector((state) => state.blog.loading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const promise = dispatch(getPostList())
    return () => {
      promise.abort()
    }
  }, [dispatch])

  const handleDelete = (postId: string) => {
    dispatch(deletePost(postId))
  }

  const handleStartEditPost = (postId: string) => {
    dispatch(startEditPost(postId))
  }

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Blog</h2>
          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
          </p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
          {loading ? (
            <Fragment>
              <SkeletonPost />
              <SkeletonPost />
            </Fragment>
          ) : (
            postList.map((post) => (
              <PostItem
                post={post}
                handleDelete={handleDelete}
                handleStartEditPost={handleStartEditPost}
                key={post.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PostList
