import React from "react";
import * as classnames from "classnames";
import { inject, observer } from "mobx-react";

const TodoFilter = inject("TodoStore")(
  observer(props => {
    const TodoStore = props.TodoStore;

    return (
      <div className="col-md-6">
        <button
          className={classnames({ active: TodoStore.filter === "all" })}
          onClick={() => TodoStore.filterActiveTodo("all")}
        >
          All
        </button>
        <button
          className={classnames({ active: TodoStore.filter === "active" })}
          onClick={() => TodoStore.filterActiveTodo("active")}
        >
          Active
        </button>
        <button
          className={classnames({ active: TodoStore.filter === "completed" })}
          onClick={() => TodoStore.filterActiveTodo("completed")}
        >
          Completed
        </button>
      </div>
    );
  })
);

export default TodoFilter;
