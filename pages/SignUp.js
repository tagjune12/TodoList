
const SingUp = () => {

  const content =
    `
  <section id="main-section">
    <form id="signup-form">
      <h3>Sign Up</h3>
      <div class="id">
        <label for="userID">ID</label>
        <input
          id="userID"
          maxlength="32"
          type="text"
          placeholder="ID"
          value=""
          required
        />
      </div>
      <div class="pw">
        <label for="userPW">PW</label>
        <input
          id="userPW"
          maxlength="15"
          type="password"
          placeholder="PW"
          value=""
          required
        />
      </div>
      <button>Sign Up</button>
      <h6 id="message"></h6>
    </form>
  </section>
`;

  return content;
}

export default SingUp;