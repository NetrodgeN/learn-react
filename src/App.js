import React, {useMemo, useState} from 'react'
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

  const [selectedSort, setSelectedSort] =useState('')
  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {
    console.log('отработала функция сортед пост')
    if(selectedSort){
      return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);

  const createPost = (newPost) =>{
    setPosts([...posts, newPost])
  }
// получаем пост из дочернего эл-та
  const removePost = (post) =>{
    //если id поста равен айди которому мы передали постом, мы его удаляем
      setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) =>{
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка'
        options={[
          {value:'title', name:'По названию'},
          {value:'body', name:'По описанию'},
        ]}
        />
      </div>
      {posts.length
      ? <PostList  remove={removePost} posts={sortedPosts} title="Список постов :)"/>
      : <h1 style={{textAlign:'center'}}>Empty post</h1>}
    </div>
  );
}

export default App;
