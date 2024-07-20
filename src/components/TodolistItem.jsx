import { useState } from "react";
import "../styles/TodoListItem.scss";

function TodoListItem({ id, text }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked((prevCheck) => !prevCheck);
  };

  return (
    <>
      {isChecked === true ? (
        <div className="list-item" onClick={checkHandler}>
          <div className="checked"></div>
          {text}
        </div>
      ) : (
        <div className="list-item" onClick={checkHandler}>
          <div className="checks"></div>
          {text}
        </div>
      )}
    </>
  );
}

export default TodoListItem;
