import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function AllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [setPosts]);

  return (
    <div className="">
      {posts.map((post) => (
        <div>
          <Link to={`${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default AllPosts;
