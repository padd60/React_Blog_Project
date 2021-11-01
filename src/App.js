/*eslint-disable*/
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "서울 감성카페 추천",
  ]);
  // [a,b] 리턴, a는 ()안에 적어준 값이고 b는 해당 값을 정정해주는 함수자리
  // => 보통 ES6 Destructuring 사용해 변수로 담아줌
  // state 변수대신 쓰는 데이터 저장공간
  // useState()를 이용해 만들어야함

  // state에 데이터 저장 이유
  // state 변경되면 html 자동으로 재렌더링

  let [like, likeChange] = useState([0, 0, 0]);

  let [modal, modalChange] = useState(false); // 스위치 기능 state 설정

  let [pushTitle, pushTitleChange] = useState(0);

  let posts = "강남 고기 맛집";

  // function changeTitle() {
  //   let newArray = [...title];
  //   // deep copy 복사할때 ... spread를 이용해 새로운 배열을 만들어 변경한다.
  //   // ... 은 괄호 벗기기용 연산자 ...[1,2,3] => 1,2,3
  //   newArray[0] = "여자코트 추천";
  //   newArray.sort();
  //   titleChange(newArray);
  // }
  // state 변경시 기존 state copy본 만들고 복사본에 수정사항 반영 후 변경함수에 넣어주는 방식으로 코딩

  function changeLike(index) {
    let newLike = [...like];
    newLike[index] = newLike[index] + 1;
    likeChange(newLike);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        //반복문 사용하기 : for은 사용 못함
        title.map((item, index) => {
          return (
            <div className="list">
              <h3
                onClick={() => {
                  pushTitleChange(index);
                }}
              >
                {item}
                <span onClick={() => changeLike(index)}> 👍 </span>
                {like[index]}
              </h3>
              <p>3월 22일 발행</p>
              <hr />
            </div>
          );
        })
      }

      <button
        onClick={() => {
          modalChange(!modal);
        }}
      >
        열고닫기
      </button>

      {
        //JSX에서 자바스크립트 사용 {} 작성하고 내부에 작성
        //대신 if는 불가능 삼항연산자로 대체 가능
        modal === true ? (
          <Modal title={title} pushTitle={pushTitle}></Modal>
        ) : null // 텅빈 html
      }
    </div>
  );
}

// 컴포넌틑는 항상 대문자 시작
function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.pushTitle]}</h2>
      <p>날씨</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
