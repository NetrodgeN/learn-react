import React, {useState} from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import './styles/App.css'


function App() {
  //состояние массива постов
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body:'Description'},
    {id:2, title:'Python', body:'Description'},
    {id:3, title:'C++', body:'Description'},
  ])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }

  const removePost = (post) =>{
    //если id поста равен айди которому мы передали постом, мы его удаляем
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length !==0
      ? <PostList  remove={removePost} posts={posts} title="Список постов :)"/>
      : <h1 style={{textAlign:'center'}}>Empty post</h1>}
    </div>
  );
}

export default App;
