import style from "./style.module.css";

const TodoTab = ({ value, onChange }) => {
  return (
    <>
      <ul className={style.list_tab}>
        <li
          className={[style.item_tab, value === "all" ? style.active : ""].join(
            " "
          )}
        >
          <button onClick={() => onChange("all")} className={style.button_tab}>
            All
          </button>
        </li>
        <li
          className={[
            style.item_tab,
            value === "active" ? style.active : "",
          ].join(" ")}
        >
          <button
            onClick={() => onChange("active")}
            className={style.button_tab}
          >
            Active
          </button>
        </li>
        <li
          className={[
            style.item_tab,
            value === "completed" ? style.active : "",
          ].join(" ")}
        >
          <button
            onClick={() => onChange("completed")}
            className={style.button_tab}
          >
            Completed
          </button>
        </li>
      </ul>
    </>
  );
};

export default TodoTab;
