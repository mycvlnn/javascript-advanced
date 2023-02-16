import html from "../lib/core.js";

function Header() {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeyup="
          if(event.key==='Enter'){
            dispatch('addTask', this.value)
            this.focus()
          }
        "
      />
    </header>
  `;
}

export default Header;
