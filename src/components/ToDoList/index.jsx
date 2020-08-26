import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  todoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  todoClick: null,
};

function TodoList(props) {
  const { todos, todoClick } = props;
  function handleToDoClick(todo) {
    if (todoClick) {
      todoClick(todo);
    }
  }
  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id} onClick={() => handleToDoClick(todo)}>
              {todo.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
