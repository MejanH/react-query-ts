import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AllPosts from "./AllPosts";
import { SinglePost } from "./SinglePost";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  return (
    <div className="App">
      <h1>Blog API</h1>
      <Switch>
        <Route path="/:id">
          <SinglePost />
        </Route>
        <Route exact path="/">
          <AllPosts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
