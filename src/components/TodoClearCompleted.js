import React from "react";
import { inject, observer } from "mobx-react";

const TodoClearCompleted = inject("TodoStore")(
  observer(props => {
    return (
      <div className="col-md-3">
        <button onClick={props.TodoStore.clearCompletedTodo}>
          Clear completed
        </button>
      </div>
    );
  })
);

export default TodoClearCompleted;
