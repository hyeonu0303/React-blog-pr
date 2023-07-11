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
  let [date, setDate] = useState([
    "7월 11일발행",
    "7월 10일발행",
    "7월 12일발행",
  ]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState([false]);
  let [count, setCount] = useState(1);
  let [title, setTitle] = useState(0,1,2);
  let [inputValue, setInputValue] = useState('');
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
      {글제목.map((a,i) => {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {
            setCount(count + 1);
            if (count % 2 == 1) {
              setModal(true);
              setTitle(i)
              console.log(title)
            } else {
              setModal(false);
              setTitle(i)
            }
            
          }}>{글제목[i]}
              <span onClick={(e) => {
                let copy = [...따봉]
                copy[i] = copy[i] + 1
                //이벤트버블링막아줌
                e.stopPropagation();
                따봉변경(copy);
                }}>👍
              </span>
              {따봉[i]}
            </h4>
            <p>{date[i]}발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1)
              글제목변경(copy);
            }}>삭제</button>
          </div>
        );
      })}

      <input type="text" onChange={(e)=>{
        //늦게처리돼서 한개만입력해도 입력이안됨 => (비동기처리)
        //state변경함수는 늦게처리됨
        setInputValue(e.target.value);
        }}
      /> 
      <button onClick={()=>{
        if(inputValue == ''){
          alert('뭘 좀 적으시죠?')
        }else{
          //제목에 넣어주면됨
          let copy = [...글제목];
          copy.push(inputValue);
          글제목변경(copy);
          let copy따봉 = [...따봉];
          copy따봉.push(0);
          따봉변경(copy따봉);
          let copyDate = [...date];
          let nowDate = new Date().toLocaleTimeString();
          copyDate.push(nowDate);
          setDate(copyDate);
        }
      }}
      >입력</button>
      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
      }
    </div>
  );
}
//컴포넌트만들기
const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
};
export default App;
