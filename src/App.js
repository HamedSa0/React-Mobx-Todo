import React, { Component } from "react";
import "../src/styles/App.css";
import TodoItemsLeft from "./components/TodoItemsLeft";
import TodoItem from "./components/TodoItem";
import TodoCheckAll from "./components/TodoCheckAll";
import TodoFilter from "./components/TodoFilter";
import TodoClearCompleted from "./components/TodoClearCompleted";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class App extends Component {
  state = {
    filter: "all",
    beforeEditCache: "",
    idForTodo: 3,
    todos: [
      {
        id: 1,
        title: " learning ReactJs ",
        completed: false,
        editing: false
      },

      {
        id: 2,
        title: "learning NodeJs ",
        completed: false,
        editing: false
      }
    ]
  };

  render() {
    const TodoStore = this.props.TodoStore;

    return (
      <div style={{ marginTop: "100px" }} className="container">
        <h1 className="mb-5" style={{ textAlign: "center", fontSize: "50px" }}>
          TODO
        </h1>
        <div className="  mx-auto todo-border">
          <div className="col-md-8 mx-auto mb-4">
            <input
              type="text"
              className="t-input"
              placeholder="What needs to be done?"
              ref={TodoStore.todoInput}
              onKeyUp={TodoStore.addTodo}
            />
          </div>

          <div className="col-md-8 mx-auto">
            {TodoStore.filterTodo.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}

            <TodoCheckAll />
          </div>

          <div className="col-md-8 mx-auto">
            <div className="t-footer">
              <div className="row">
                <div className="col-md-3">
                  <TodoItemsLeft />
                </div>

                <TodoFilter />

                {TodoStore.clearCompletedCount > 0 && <TodoClearCompleted />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
