import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Post {
  userId?: number;
  id: number | null;
  title: string;
  body: string;
}
interface Params {
  id: string;
}
export function SinglePost() {
  const [p, setP] = useState<Post>({ id: null, title: "", body: "" });
  let { id } = useParams<Params>();

  const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setP(data));
  }, [setP]);

  console.log(p);

  return (
    <div>
      <Link to="/">Home</Link>
      <h3>{p.title}</h3>
      <div>{p.body}</div>
    </div>
  );
}
