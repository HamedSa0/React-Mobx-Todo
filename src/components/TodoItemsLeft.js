import React from "react";
import { inject, observer } from "mobx-react";

const TodoItemsLeft = inject("TodoStore")(
  observer(props => {
    return (
      <div>
        <span style={{ color: "blue" }}>{props.TodoStore.itemsLeftsTodo}</span>{" "}
        items left
      </div>
    );
  })
);

export default TodoItemsLeft;
