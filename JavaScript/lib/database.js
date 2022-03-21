/**
 * Todo List를 가져오는 함수
 * @returns {array} 할일 목록을 JS객체로 반환
 */
const readData = (email) => {
    const localStorage = window.localStorage;
    const todos = localStorage.getItem(email);

    return JSON.parse(todos);
}

/**
 * @param {array} todos 할일을 담고 있는 리스트
 * @param {string} email todos를 가질 계정
 */
const writeData = (email, todos) => {
    const localStorage = window.localStorage;

    // localStorage.setItem(email, todos);
    localStorage.setItem(email, JSON.stringify(todos));
}


export { readData, writeData };
