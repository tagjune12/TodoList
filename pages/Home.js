const Home = () => {

  const content =
    `
  <section id="main-section">
    <form id="login-form" router="/todolist">
      <h3>Log In</h3>
      <div class="id">
        <label for="login-id">ID</label>
        <input id="login-id" maxlength="32" type="text" placeholder="ID" />
      </div>
      <div class="pw">
        <label for="login-pw">PW</label>
        <input id="login-pw" maxlength="15" type="password" placeholder="PW" />
      </div>
        <button id="login">Log In</button>
    </form>
    <button id="signup" router="/signup">Sign Up</button>
  </section>
  `;

  return content;
}

export default Home;
