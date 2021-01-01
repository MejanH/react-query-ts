import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

interface Post {
  userId?: number;
  id: number | null;
  title: string;
  body: string;
}
interface Params {
  id: string;
}
interface Error {
  message: string;
}
export function SinglePost() {
  //   const [p, setP] = useState<Post>({ id: null, title: "", body: "" });
  let { id } = useParams<Params>();

  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

  const { isLoading, error, data } = useQuery<Post, Error>(
    ["posts", id],
    () => fetch(apiUrl).then((res) => res.json()),
    {
      // The query will not execute until the userId exists
      enabled: !!id,
    }
  );
  //   useEffect(() => {
  //     fetch(apiUrl)
  //       .then((res) => res.json())
  //       .then((data) => setP(data));
  //   }, [setP]);

  //   console.log(p);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) return <h1>An error has occurred: + {error.message}</h1>;

  return (
    <div>
      <Link to="/">Home</Link>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <div>{data.body}</div>
        </div>
      )}
    </div>
  );
}
