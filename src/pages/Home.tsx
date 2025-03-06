import React from 'react'
import { useGetPostsQuery } from '../redux/services/api';

const Home = () => {
  const { data, error, isLoading } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <ul>
      {data?.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Home