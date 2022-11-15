import style from "./style.module.css";

const TodoItem = ({ id, text, completed, removeItem, checkItem }) => {
  return (
    <div className={style.wrapper_item}>
      <label className={style.item}>
        <input
          checked={completed}
          onChange={(e) => checkItem(id, e.target.checked)}
          type="checkbox"
        />
        {text}
      </label>
      <button onClick={() => removeItem(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
