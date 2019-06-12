import React from "react";
import { inject, observer } from "mobx-react";

const TodoItem = inject("TodoStore")(
  observer(props => {
    const TodoStore = props.TodoStore;
    return (
      <div key={props.todo.id} className="item-check">
        <div className="row ">
          <div className="col-md-10 ">
            <input
              className="checkbox-list"
              type="checkbox"
              onChange={event => TodoStore.checkTodo(props.todo, event)}
              checked={props.todo.completed}
            />

            {!props.todo.editing && (
              <div
                className={
                  "custom-label " + (props.todo.completed ? "completed" : "")
                }
                onDoubleClick={event => TodoStore.editTodo(props.todo, event)}
              >
                {props.todo.title}
              </div>
            )}

            {props.todo.editing && (
              <input
                className="t-item-edit"
                type="text"
                autoFocus
                defaultValue={props.todo.title}
                onBlur={event => TodoStore.doneEdit(props.todo, event)}
                onKeyUp={event => {
                  if (event.key === "Enter") {
                    TodoStore.doneEdit(props.todo, event);
                  } else if (event.key === "Escape") {
                    TodoStore.cancelEdit(props.todo, event);
                  }
                }}
              />
            )}
          </div>

          <div className="col-md-2">
            <div
              style={{ float: "right", color: "red", cursor: "pointer" }}
              className="custom-label"
              onClick={event => TodoStore.deleteTodo(props.todo.id)}
            >
              &times;
            </div>
          </div>
        </div>
      </div>
    );
  })
);

export default TodoItem;
