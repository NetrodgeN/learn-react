import React from 'react'
import PostItem from './PostItem'

//посты принимаем пропсами. т.к. знаем что у нас пропс это объект
//сразу указываем {posts}

  //получаем новый массив, где каждый эл-т поста преобразовываем в реакт эл-т
  //и передаём в пост-айтем пропсом передаём туда объект
function PostList({posts, title, remove}) {
    if(!posts.length){
      return(
        <h1 style={{textAlign:'center'}}>Список пуст</h1>
      )
    }

  return (
      <div>
    <h1 style={{textAlign:'center'}}>
    {title}
  </h1>
    {posts.map((post, index) =>
      <PostItem remove={remove} number={index + 1} post={post} key= {post.id}/>
    )}
    </div>
  )
}

export default PostList