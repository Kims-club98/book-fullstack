## 개발환경 구축하기

- Front-end >> React 18.2(port번호: 3000번)

- Back-end >> Servlet(JAVA-JDK21, Tomcat 11, port번호: 8000번)
    >> 맥북에서 가능한가? -> Eclipse가 不可, Spring Boot


## Front-end에서 설치한 외부 라이브러리

```sh
# 비동기 통신을 위한 라이브러리
npm i axios
#화면처리 관련 라우터 라이브러리
npm i react-router
# 반응형과 리액트 버전도 지원되는 UI 라이브러리(CSS, JS)
npmi bootstrap
# 클라우드 API를 활용한 로그인, NOSQL제품 활용, 파일 업로드
npm i firebase
# 리엑트 라이브러리, 리액트 DOM 라이브러리
npm i react
npm i react-dom

```

#### 프로젝트 디렉토리
src
├─ App.css
├─ App.jsx
├─ BookApp.jsx
├─ index.css
├─ index.js
├─ assets              # 이미지 소스
└─ components
   ├─ auth             # 인증·인가·회원가입 …
   │  └─ LoginForm.jsx
   ├─ dept             # 부서목록, 부서수정, 부서삭제, 부서상세보기
   │  └─ DeptList.jsx
   ├─ include          # Header.jsx, Footer.jsx (여러 페이지에 반복되는 요소 분리)
   │  ├─ Header.jsx
   │  └─ Footer.jsx
   ├─ pages
   │  ├─ DeptPage.jsx  # 부서관리
   │  ├─ EmpPage.jsx   # 사원관리
   |  └─ Hompage.jsx   # 홈페이지
   └─ service
      ├─ authLogin.js # aws 로그인
      └─ firebase.js  # aws 연결


--- [[ 모델계층 - 비즈니스 로직 + 데이터셋 ]] ---

- service
  -firebase.js
  -authLogic.js
  -deptLogic.js
  -emLogic.js
  -redux(Flux Architecture) - Spring Boot security코딩수업 (예정)
    - 상태관리
    - requx toolkit(외부 라이브러리)

#### 실행흐름
```sh
# 1. 서버 가동하기
npm start
```
1. index.js 를 호출한다. (src > index.js)

2. index.html에서 root를 찾기(<div id=root></div>)

3. 라우터에서 설정 추가 -> index.js에서 App 컴포넌트를 BrowerRouter로 감싸준다. (<BrowerRouter>)

4. 페이지 전환이 가능해짐 - 엔드 포인드
  - http://localhost:3000 -> HomePage.jsx
  - http://localhost:3000/login -> LoginView.jsx
  - http://localhost:3000/dept -> DeptPage.jsx
  ++ 다음과 같이 확장 가능...
  - http://localhosty:3000/emp -> EmpPage.jsx ▶ ▶ ▶ 직원 리스트 페이지 등등 가능...!

  5. index.js에서 App.jsx
  ```js
    <Route path='/' exact={true} element={<HomePage />} /> {/*홈페이지 페이지 */}
    <Route path='/login' exact={true} element={<LoginForm />} /> {/*로그인 폼*/}
    <Route path='/dept' exact={true} element={<DeptList />} /> {/*부서 리스트 페이지*/}
  ```
