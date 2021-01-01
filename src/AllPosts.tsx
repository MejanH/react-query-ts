// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface Error {
  message: string;
}

export default function AllPosts() {
  //   const [posts, setPosts] = useState<Post[]>([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  const { isLoading, error, data } = useQuery<Post[], Error>("posts", () =>
    fetch(apiUrl).then((res) => res.json())
  );
  //   useEffect(() => {
  //     fetch(apiUrl)
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, [setPosts]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) return <h1>An error has occurred: + {error.message}</h1>;

  return (
    <div className="">
      {data &&
        data.map((post) => (
          <div key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </div>
        ))}
    </div>
  );
}
