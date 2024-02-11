import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error)); // Виправлено помилку в методі catch
  }, []);

  return (
    <ul>
      {posts.map(
        (
          post // Додано фігурні дужки та оператор return
        ) => (
          <li key={post.id}>{post.title}</li>
        )
      )}
    </ul>
  );
}

export default Posts;
