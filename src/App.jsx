// src/App.jsx
import React from 'react';
import Header from './components/header/Header';
import Post from './components/post/Post';
import About from './components/about/About';
import './App.css';
import Order from './components/order/Order';

const App = () => {
  const posts = [
    {
      title: 'First Post',
      content: 'This is my first blog.',
    },
    {
      title: 'Second Post',
      content: 'Another interesting post goes here.',
    },
    // Add more posts as needed
  ];

  return (
    <div className='app'>
      <div className='mask'>
      <div>
      <Header/>
      </div>
      <main className='main'>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </main>
      <About/>
      <Order/>
    </div>
    </div>
  );
};

export default App;
