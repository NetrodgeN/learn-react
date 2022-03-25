import React, {useMemo, useState} from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css'


function App() {
  //состояние массива постов
  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body:'Description'},
    {id:2, title:'Python', body:'e'},
    {id:3, title:'C++', body:'ya'},
  ])

 const [filter, setFilter] = useState({sort:'', query:''})


  const sortedPosts = useMemo(() => {
    console.log('отработала функция сортед пост')
    if(filter.sort){
      return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSeacrchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query,sortedPosts])

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }
// получаем пост из дочернего эл-та
  const removePost = (post) =>{
    //если id поста равен айди которому мы передали постом, мы его удаляем
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
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
