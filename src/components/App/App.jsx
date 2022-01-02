import React, {useEffect, useRef, useState} from "react";
import axios from "axios";


const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState([]);

  const inputRef = useRef();

  useEffect(async () => {
    try {
      const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(posts.data);
    } catch(err) {
      console.log(err)
    } 
  }, [])
  

  const handleInputChange = (e) => { 
    debugger
    setInputValue(inputRef.current.value)
  }

  return (
    <div>
      <h1 data-testid='main-header'>Hello World</h1>
      <h2 data-testid='secondary-header'>{inputValue}</h2>
      <input data-testid='main-input' onChange={handleInputChange} ref={inputRef} />
      {posts.length > 0 &&  posts.map(post => (
        <div data-testid='post' key={post.id}>&gt;&gt; {post.title}</div>
      ))}
    </div>
  )
}

export default App;