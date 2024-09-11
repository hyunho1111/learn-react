import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import ThemeButton from "./components/ThemeButton";
// import Cardbutton from "./components/CardButton";

// import Login from "./components/Login";

// import Counter from "./components/Counter";



function App() {
  // logic
  console.log("app.js");


  // const name = "김현호";
  // const age = 34;

  //   const greetingmessage = `안녕하세요.${name}님 나이가${age}세 이시네요.
  // 환영합니다!`
  //   console.log("🚀 ~ App ~ greetingmessage:", greetingmessage)


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
  //default parameter
  //1. 함수정의
  const greeting = (input = "고객") => {
    //2.함수 호출
    return `${input}님, 반갑습니다!`;
  }
  console.log("greeting", greeting());

  //Object destructuring (구조분해할당)
  const studentlist = ['안', '강', '최'];
  const [one, too, three] = studentlist;
  console.log("🚀 ~ App ~ one, too, three:", one, too, three)

  //함수정의
  const addstudent = () => {
    const addstudentlist = [...studentlist, "김현호"];
    console.log("🚀 ~ addstudent ~ studentlist:", studentlist)
    console.log("🚀 ~ addstdentlist ~ addstdentlist:", addstudentlist)
  }

  // 함수 호출
  addstudent()







  const person = {
    name: "김현호",
    age: 34,
    email: "2mjkhh@gmail.com",
  }
  console.log("🚀 ~ App ~ person:", person)
  // const { name, age, email } = person;
  // console.log("🚀 ~ App ~ email:", email)
  // console.log("🚀 ~ App ~ age:", age)
  // console.log("🚀 ~ App ~ name:", name)
  // console.log("🚀 ~ App ~ person:", person)

  const messageitem = {
    messageid: 1,
    message: "안녕하세요",
  }
  const { name: personname, age, email } = person;
  const copyperson = {
    ...person,
    ...messageitem,
    name: "김뭉",
    nickname: "아들"
  }
  console.log("🚀 ~ App ~ copyperson:", copyperson)

  const handclick = () => {
    window.location.href = "https://ko.legacy.reactjs.org/docs/create-a-new-react-app.html"
  }
  //모드 변경 논리
  // 기본 백그라운드 설정은 라이트모드로 설정한다.
  // Themebutton에 버튼을 1회 클릭시 다크모드가 활성화 되도록 설정한다.
  // 뷰 화면에서 Themebutton을 클릭해서 다크모드가 활성화 되는것을 확인한다
  // ThemeButton을 2회 클릭하면 다크모드가 해제되서 라이트모드로 다시 돌아가도록 설정한다
  // 뷰화면에서 라이트모드가 활성화 되는것을 확인한다.

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode)
  };
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "첫번째 메시지",
    }
  ])

  useEffect(() => {
    console.log(isDarkMode ? "다크 모드" : "라이트 모드")
    alert(isDarkMode ? "다크 모드" : "라이트 모드")
  }, [isDarkMode])


  // view
  return (
    <div className={`wrap ${isDarkMode ? 'dark-mode' : 'light-mode'
      } `}>
      <CardList title={"김우빈 짱"}
        subtext="후츠릿짱"
        onClick={handclick} />
      <CardList title={"봄이와도~"}
        subtext="설레지않을것이고~"
        onClick={handclick} />
      <ThemeButton isDarkMode={isDarkMode} onTheme={handleTheme} />
      {/* <Login /> */}
      {/* <Counter /> */}
      {isLoggedin ? <h2>환영합니다</h2> : <h2>로그인 해주세요</h2>}
      {messages.length && <h2>새로운 메시지가 {messages.length}개 있습니다.</h2>}
    </div>);
}




export default App;
