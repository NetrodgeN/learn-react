import axios from 'axios';
import React, {useEffect, useMemo, useState} from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';

import './styles/App.css'


function App() {
  //состояние массива постов
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal,setModal] = useState(false)
  const sortedAndSeacrchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(()=>{
    console.log('use eff')
    fetchPosts();
  },[])


  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }
  async function fetchPosts(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

// получаем пост из дочернего эл-та
  const removePost = (post) =>{
    //если id поста равен айди которому мы передали постом, мы его удаляем
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <button onClick={fetchPosts} >GET POST </button>
      <MyButton style={{marginTop:30}} onClick={()=>setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin:'15px 0'}}/>
      <PostFilter 
      filter={filter} 
      setFilter={setFilter}
      />
        <PostList  remove={removePost} posts={sortedAndSeacrchedPosts} title="Список постов :)"/>
      </div>
  );
}

export default App;
