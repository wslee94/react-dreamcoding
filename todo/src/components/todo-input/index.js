import style from "./style.module.css";

const TodoInput = ({ name, value, onChange }) => {
  return (
    <div className={style.wrapper_input}>
      <input
        className={style.input_text}
        name={name}
        value={value}
        onChange={onChange}
      />
      <button className={style.input_button}>추가</button>
    </div>
  );
};

export default TodoInput;
