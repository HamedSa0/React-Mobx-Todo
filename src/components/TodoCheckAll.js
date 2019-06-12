import React from "react";
import { inject, observer } from "mobx-react";

const TodoCheckAll = inject("TodoStore")(
  observer(props => {
    return (
      <div className="item-check-all">
        <div className="col-md-12 mx-auto">
          <input
            className="checkbox-all"
            type="checkbox"
            id="checkAll"
            onChange={props.TodoStore.checkAllTodo}
            checked={!props.TodoStore.anyItemsLefts}
          />
          <label className="custom-label-check" htmlFor="checkAll">
            Check All
          </label>
        </div>
      </div>
    );
  })
);

export default TodoCheckAll;
