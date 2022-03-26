const TodoList = () => {

  const content =
    `
  <section id="clock-todolist">

    <h2 id="clock"></h2>
    <div>
      <form id="todo-input-form">
        <input
          id="todo-input"
          class="todo-list"
          type="text"
          maxlength="50"
          placeholder="할 일을 입력하세요"
        /><button>+</button>
      </form>
      <ul id="todo-list" class="todo-list">
      </ul>
    </div>
  </section>
  `;

  return content;
}

export default TodoList;