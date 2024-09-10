import React, { useState } from 'react'


const Counter = () => {
    // 로직
    const [counter, setcounter] = useState(0);
    const increase = () => {
        if (counter < 10) {
            setcounter((asd) => asd + 1);
        }
    };
    const decrease = () => {
        if (counter > 0) {
            setcounter(counter - 1);
        }
    }
    // 뷰
    return (
        <div style={{ textAlign: "center" }}>
            <h2>{counter}</h2>
            <button type="button" onClick={increase}>+</button>
            <button type="button" onClick={decrease}>-</button>
        </div>
    )
}

// 
// counter라는 변수를 만든다
// counter의 초기값을 0으로 지정한다.
// counter의 값을 ui(화면)에 보여준다
// increase함수를 만든다.
// 사용자가 +버튼을 클릭하면 incease함수가 실행된다.
// increase함수를 counter라는 변수의 값이 +1 증가하도록 정의한다.
// increase함수에 counter라는 변수의 값이 10미만인 경우에만 counter 변수의 값을 +1 증가하도록 정의한다.
// 
// 
// 사용자가 -버튼을 클릭한다
// 숫자가 -1이 되어 변경되는 것을 확인한다.






export default Counter