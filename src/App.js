/*eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  //a는 state보관자료남음 b는 state변경도와줌 Destructuring문법
  //변동시 자동으로 반영되게 만들고싶으면 state쓰기
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let logo = "HY.BLOG";
  let [date, setdate] = useState([
    "7월11일 발행",
    "7월 10일발행",
    "7월 12일발행",
  ]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState([false]);
  let [count, setCount] = useState(1);
  //state변경 등호금지

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{ margin: "0px" }}>{logo}</h3>
      </div>
      <button
        onClick={() => {
          //let copy = 글제목 해도 copy엔 화살표밖에안남음
          //reference data type 공부
          let copy = [...글제목];
          copy[0] = "여자코트추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy = copy.sort();
          글제목변경(copy);
        }}
      >
        글제목정렬
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
          if (count % 2 == 1) {
            setModal(true);
          } else {
            setModal(false);
          }
        }}
      >
        모달창열기
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <spanonClick={() => {따봉변경(따봉 + 1);}}>👍</span>
          {따봉}
        </h4>
        <p>{date[0]}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{date[1]}</p>
      </div> */}
      
      {글제목.map((a,i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {
            setCount(count + 1);
            if (count % 2 == 1) {
              setModal(true);
            } else {
              setModal(false);
            }
          }}>
              {글제목[i]}
              <span onClick={() => {
                let copy = [...따봉]
                copy[i] = copy[i] + 1
                따봉변경(copy);
                }}>👍</span>
              {따봉[i]}
            </h4>
            <p>{date[i]}</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}
    </div>
  );
}
//컴포넌트만들기
const Modal = () => {
  return (
    //div 두개안됨
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};
export default App;
