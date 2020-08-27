import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";
//import ColorBox from "./components/ColorBox";
// import TodoList from "./components/ToDoList";
// import ToDoForm from "./components/ToDoForm";
import PostList from "./components/PostList";
import Pagination from "./components/pagination";
import FilterForm from "./components/FilterForm";
import Clock from "./components/Clock";

function App() {
  const [xxx, setTodoList] = useState([
    { id: 1, title: "aaaaaaa" },
    { id: 2, title: "bbbbbb" },
  ]);
  function handleToDoClick(todo) {
    const index = xxx.findIndex((x) => todo.id === x.id);
    console.log(index);
    const newToDoList = [...xxx];
    if (index < 0) {
      return;
    }
    newToDoList.splice(index, 1);
    setTodoList(newToDoList);
  }

  function handleToDoFormSubmit(formValue) {
    const newToDoList = [...xxx];
    const objectTodo = {
      ...formValue,
      id: newToDoList.length + 1,
    };
    console.log(newToDoList);
    newToDoList.push(objectTodo);
    setTodoList(newToDoList);
  }

  const [postlist, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 2,
    _totalRows: 10,
  });
  const [filter, setFilter] = useState({
    _page: 0,
    _limit: 10,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const queryString = require("query-string");
        const paramString = queryString.stringify(filter);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        setPostList(responseJSON.data);
        setPagination(responseJSON.pagination);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    fetchPostList();
  }, [filter]);

  function onhandlePageChange(page) {
    setFilter({
      ...filter,
      _page: page,
    });
    console.log("filter", filter);
  }
  function handleFilterChange(searchTerm) {
    console.log(searchTerm);
  }
  return (
    <div className="App">
      <Clock/>
      <FilterForm onSubmit={handleFilterChange} />
      <PostList posts={postlist} />
      <Pagination pagination={pagination} onPageChange={onhandlePageChange} />
      {/* <ToDoForm onSubmit={handleToDoFormSubmit} />
      <TodoList todos={xxx} todoClick={handleToDoClick} /> */}
    </div>
  );
}

export default App;
