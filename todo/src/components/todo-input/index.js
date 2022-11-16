import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TodoInput = ({ name, value, onChange }) => {
  return (
    <div className={style.wrapper_input}>
      <input
        className={style.input_text}
        name={name}
        value={value}
        onChange={onChange}
      />
      <button className={style.input_button}>
        <FontAwesomeIcon className={style.icon} icon={solid("plus")} />
      </button>
    </div>
  );
};

export default TodoInput;
