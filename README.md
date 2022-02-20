# 프로젝트 설명
 바닐라JS로 만든 Todo List 프로젝트
 
## 주요기능
 1. 로그인 페이지
    - 로그인
    
 2. 회원가입 페이지
    - 회원가입
    
 4. Todo List 작성 페이지
    - 현재 시간 표시
    - 할일 추가
    - 할일 삭제
    
### 로그인 페이지
![로그인 페이지](https://user-images.githubusercontent.com/54172578/154833321-8e89b648-4cd8-4cd3-ba9e-92135dc9d1a7.jpg)

1. sign up 버튼을 누르면 회원가입 페이지로 이동
2. ID와 PW 입력하고 Login 버튼 or 엔터를 누르면 firebase Authentication을 이용하여 ID와 PW가 유효한지 확인하고 유효하면 Todo List 입력페이지로 이동

### 회원가입 페이지
![회원가입 페이지](https://user-images.githubusercontent.com/54172578/154833324-be87406d-303b-44b8-97ee-cb4ed050b494.jpg)

1. E-mail 형식의 아이디를 입력한다
2. 비밀번호를 입력한다
3. sign up 버튼을 누르면 ID와 PW가 정책에 유효한지 확인하고 위반되지 않으면 회원가입 완료
![firebase인증](https://user-images.githubusercontent.com/54172578/154833328-8d1b5fa8-abf7-4bf4-a2ff-e94378fe21f5.png)
가입 완료후 Firebase에 이와같이 저장됨

### Todo List 입력페이지
![TodoList 입력페이지](https://user-images.githubusercontent.com/54172578/154833326-5fe3fead-b4a6-4d54-a726-13dd8cdb7a73.jpg)
