const localStorage = window.localStorage;


const getUserInfo = (userID) => {
    console.log(`userInfo: ${localStorage.getItem(userID)}`);
    return localStorage.getItem(userID);
}

const setUserInfo = ({ userInfo }) => {
    const { id, pw } = userInfo;

    localStorage.setItem(id, pw);
}

const setTodo = () => {

}

const getTodos = () => {

}

export { getUserInfo, setUserInfo, setTodo, getTodos };
// export { getUserInfo };