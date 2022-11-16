import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

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
      <button className={style.input_button} onClick={() => removeItem(id)}>
        <FontAwesomeIcon className={style.icon} icon={solid("trash")} />
      </button>
    </div>
  );
};

export default TodoItem;
