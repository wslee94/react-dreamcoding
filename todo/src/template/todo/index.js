import { useState } from "react";
import style from "./style.module.css";
import TodoItem from "../../components/todo-item";
import TodoInput from "../../components/todo-input";

const Todo = () => {
  const [list, setList] = useState([
    {
      id: 1,
      completed: false,
      text: "강의 보기",
    },
  ]);
  const [form, setForm] = useState({ todo: "" });

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

  return (
    <>
      <div className={style.container}>
        <div className={style.header}></div>
        <ul className={style.content}>
          {list.map((item, index) => (
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
        <form onSubmit={handleSubmit} autoComplete="off">
          <TodoInput name="todo" value={form.todo} onChange={handleChange} />
        </form>
      </div>
    </>
  );
};

export default Todo;
