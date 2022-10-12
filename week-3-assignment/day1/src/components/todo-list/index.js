import React, { useState, useEffect } from "react";
import Button from "../button";
import classes from "./style.module.css";

const url = "https://jsonplaceholder.typicode.com/todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderThead = () => {
    return (
      <thead>
        <tr>
          <th
            onClick={() => {
              if (selectedTodo !== "id") {
                setTodos([...todos].reverse());
              } else {
                setTodos([...todos].sort((a, b) => a.id - b.id));
              }
            }}
          >
            ID
          </th>
          <th>Başlık</th>
          <th
            onClick={() => {
              if (!todos[0].completed) {
                setTodos([...todos].sort((a, b) => b.completed - a.completed));
              } else {
                setTodos([...todos].sort((a, b) => a.completed - b.completed));
              }
            }}
          >
            Durum
          </th>
          <th>Aksiyon</th>
        </tr>
      </thead>
    );
  };

  // başlık (title) düzenleme alanı
  const editTodo = (id, value) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.title = value;
    setTodos(newTodos);
  };

  // durum (completed) düzenleme alanı (eksik)
  const editTodoState = (completed, value) => {
    const newTodos = [...todos];
    const todoState = newTodos.find((todo) => todo.completed === completed);
    todoState.completed = value;
    setTodos(newTodos);
  };

  // sadece ekledim, aktif olarak çalışmıyor
  const renderPagination = () => {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  const remove = (todo) => {
    if (window.confirm("Silmek üzerisiniz emin misiniz")) {
      setTodos((prev) => {
        return prev.filter((x) => x.id !== todo.id);
      });
    }
  };

  const edit = (todo) => {
    setSelectedTodo(todo);
  };

  const renderBody = () => {
    return (
      <tbody>
        {todos.slice(0, 15).map((todo, index) => {
          return (
            <tr key={index}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Tamamlandı" : "Yapılacak"}</td>
              <td>
                <Button
                  className={`btn btn-sm btn-danger ${classes.actionButton} `}
                  onClick={() => remove(todo)}
                >
                  Sil
                </Button>
                <Button
                  onClick={() => edit(todo)}
                  className="btn btn-sm btn-warning"
                >
                  Düzenle
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };

  const renderEditForm = () => {
    return (
      <div>
        <input
          type={"text"}
          onChange={(e) => editTodo(selectedTodo.id, e.target.value)}
        />
        <input
          type={"checkbox"}
          onChange={(e) => {
            editTodoState(selectedTodo.completed, e.target.value);
          }}
        />
        <Button onClick={() => setSelectedTodo(undefined)}>Kaydet</Button>
        <Button onClick={() => setSelectedTodo(undefined)}>Vazgeç</Button>
      </div>
    );
  };
  return (
    <div className={`${classes.container} container`}>
      {selectedTodo && renderEditForm()}
      <table className="table">
        {renderThead()}
        {renderBody()}
        {renderPagination()}
      </table>
    </div>
  );
};

export default TodoList;
