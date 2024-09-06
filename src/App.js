function App() {
  // logic
  console.log("app.js");

  const name = "김현호";
  const age = 34;

  const greetingmessage = `안녕하세요.${name}님 나이가${age}세 이시네요.
환영합니다!`
  console.log("🚀 ~ App ~ greetingmessage:", greetingmessage)


  // 단축 평가 논리 계산법 logical operators
  const user = {
    isLoggedIn: true,
    role: "admin", // 'guest', 'user'
  };

  // 사용자가 로그인 한 상태이면서, 역할이 'admin'인 경우엔 "관리자가 페이지 접근 가능", 아니면" 관리자 페이지 접근 불가능"

  if (!user.isLoggedIn || user.role !== "admin") {
    console.log("관리자 페이지 접근 가능");
  } else {
    console.log("관리자 페이지 접근 불가능!!")
  }
  // view
  return <div>hello world</div>;
}



export default App;
