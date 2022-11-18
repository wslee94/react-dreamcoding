import { useState, useEffect, useContext } from "react";
import style from "./style.module.css";
import ThemeSwitch from "../../components/theme-switch";
import TodoTab from "../../components/todo-tab";
import TodoItem from "../../components/todo-item";
import TodoInput from "../../components/todo-input";
import { ThemeContext } from "../../context/ThemeContext";

const setLS = (items) => {
  localStorage.setItem("todos", JSON.stringify(items));
};

const getLS = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const Todo = () => {
  const [list, setList] = useState(getLS());
  const [form, setForm] = useState({ todo: "" });
  const [tab, setTab] = useState("all");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector("body");
    body.className = theme;
  }, [theme]);

  useEffect(() => {
    setLS(list);
  }, [list]);

  const resetForm = () => {
    setForm({ todo: "" });
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(form.todo);
    resetForm();
  };

  const addItem = (text) => {
    if (text.trim().length === 0) return;
    const id = list[list.length - 1]?.id + 1 || 1;
    setList((prev) => [...prev, { id, completed: false, text }]);
  };

  const removeItem = (id) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  const checkItem = (id, checked) => {
    setList((prev) =>
      prev.map((item) => {
        if (item.id === id) return { ...item, completed: checked };
        return item;
      })
    );
  };

  const filterList = (list) => {
    switch (tab) {
      case "active":
        return list.filter((item) => !item.completed);
      case "completed":
        return list.filter((item) => item.completed);
      default:
        return list;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <ThemeSwitch />
        <TodoTab value={tab} onChange={setTab} />
      </div>
      <ul className={style.content}>
        {filterList(list).map((item, index) => (
          <li key={index}>
            <TodoItem
              id={item.id}
              text={item.text}
              completed={item.completed}
              removeItem={removeItem}
              checkItem={checkItem}
            />
          </li>
        ))}
      </ul>
      <div className={style.footer}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <TodoInput name="todo" value={form.todo} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};

export default Todo;
