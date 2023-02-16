import html from "../lib/core.js";
import { connect } from "../redux/store.js";

function Footer({ todos, filters, filter }) {
  if (todos.length <= 0) return null;

  const arrFilters = Object.keys(filters);
  const leftNumber = todos.filter(filters.active).length;
  const isCompleted = todos.filter(filters.completed).length;

  return html`
    <footer class="footer">
      <span class="todo-count"><strong>${leftNumber}</strong> item left</span>
      <ul class="filters">
        ${arrFilters.map((item) => {
          return html` <li onclick="dispatch('filter', '${item}')">
            <a class="${filter === item && "selected"}" href="#"
              >${item[0].toUpperCase() + item.slice(1)}</a
            >
          </li>`;
        })}
      </ul>
      ${isCompleted &&
      html`<button class="clear-completed" onclick="dispatch('clearCompleted')">
        Clear completed
      </button>`}
    </footer>
  `;
}

export default connect()(Footer);
