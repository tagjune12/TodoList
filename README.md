# 프로젝트 설명
 바닐라JS로 만든 Todo List 생성페이지
 
 로그인 페이지, 회원가입 페이지, Todo List 작성 페이지로 구성되어있으며 SPA로 구현하였음
 
# 사용환경
 - firebase 9.6.9
 - webpack 5.70.0
 - webpack-cli 4.9.2
 - webpack-dev-server 4.7.4
 - html-webpack-plugin 5.5.0
 - css-loader 6.7.1
 - mini-css-extract-plugin 2.6.0
 
 ## 환경설정
 ```
 yarn add webpack webpack-cli webpack-dev-server --dev
 ```
 ```
  yarn add clean-webpack-plugin css-loader mini-css-extract-plugin html-webpack-plugin --dev
 ```

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

1. 할일 입력창 바로 위에 현재 시간 표시
2. 할일 입력창에 할일을 입력하고 enter 혹은 '+'버튼을 누르면 Todo List에 추가됨
   - 입력된 할일 목록은 local storage에 '아이디 : [할일 목록]' 형태로 저장
   ![local storage](https://user-images.githubusercontent.com/54172578/154853839-f19b9c03-e197-429a-b53a-edfe6d52f4b4.jpg)
3. 체크박스를 체크하면 text에 중간선 추가
4. ❌버튼을 누르면 할일 목록에서 해당 할일이 삭제됨
# TodoList
