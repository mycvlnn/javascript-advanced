import html from "../lib/core.js";
import { connect } from "../redux/store.js";

function TodoItem({ todo, index, indexEdit }) {
  const { name, completed } = todo;
  const isEditing = indexEdit === index;

  return html`
    <li class="${completed && "completed"} ${isEditing && "editing"} ">
      <div class="view">
        <input
          ${completed && "checked"}
          class="toggle"
          type="checkbox"
          onclick="dispatch('doneTask', ${index})"
        />
        <label ondblclick="dispatch('setEditIndex', ${index})">${name}</label>
        <button
          class="destroy"
          onclick="dispatch('deleteTask', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${name}"
        onblur="dispatch('updateTask', this.value, ${index})"
        onkeyup="
          if(event.key==='Enter'){
            dispatch('updateTask', this.value, ${index})
          }
          
          if(event.key==='Escape'){
            dispatch('cancelEdit')
          }
        "
      />
    </li>
  `;
}

export default connect()(TodoItem);
