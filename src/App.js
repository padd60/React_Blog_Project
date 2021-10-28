/*eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "서울 감성카페 추천",
  ]);
  // [a,b] 리턴, a는 ()안에 적어준 값이고 b는 해당 값을 정정해주는 함수자리
  // => 보통 ES6 Destructuring 사용해 변수로 담아줌
  // state 변수대신 쓰는 데이터 저장공간
  // useState()를 이용해 만들어야함

  // state에 데이터 저장 이유
  // state 변경되면 html 자동으로 재렌더링

  let [like, likeChange] = useState(0);
  let posts = "강남 고기 맛집";

  function changeTitle() {
    let newArray = [...title];
    // deep copy 복사할때 ... spread를 이용해 새로운 배열을 만들어 변경한다.
    // ... 은 괄호 벗기기용 연산자 ...[1,2,3] => 1,2,3
    newArray[0] = "여자 코트 추천";
    newArray.sort();
    titleChange(newArray);
  }
  // state 변경시 기존 state copy본 만들고 복사본에 수정사항 반영 후 변경함수에 넣어주는 방식으로 코딩

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>변경</button>
      <div className="list">
        <h3>
          {title[0]} <span onClick={() => likeChange(like + 1)}>👍</span> {like}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>3월 22일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>5월 9일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
