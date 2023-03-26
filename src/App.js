import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import CreatePost from "./components/CreatePost";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getAllPosts } from "./actions/postAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="App" basename="/blog_frontend_jukto_interview_2023">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/posts/:id" Component={PostDetails} />
          <Route exact path="/posts/create" Component={CreatePost} />
          <Route exact path="/posts/:id/edit" Component={CreatePost} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
