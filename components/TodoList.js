import html from "../lib/core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../redux/store.js";

function TodoList({ todos, filters, filter }) {
  if (todos.length <= 0) return null;
  const filtered = filters[filter];

  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('checkAll')"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos
          .filter(filtered)
          .map((todo, index) => TodoItem({ todo, index }))}
      </ul>
    </section>
  `;
}

export default connect()(TodoList);
