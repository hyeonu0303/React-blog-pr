/*eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  
  //a는 state보관자료남음 b는 state변경도와줌 Destructuring문법
  //변동시 자동으로 반영되게 만들고싶으면 state쓰기
  let [글제목,set글제목]=useState(['남자 코트 추천','강남 우동맛집','파이썬독학'])
  let logo = 'HY.BLOG'
  let [date,setdate] = useState(['7월11일 발행','7월 10일발행','7월 12일발행'])
  let [따봉, 따봉변경] = useState(0);
  //state변경 등호금지

  return (
    <div className="App">
      <div className="black-nav">
        <h3 style={{margin:'0px'}}>{logo}</h3>
      </div>
      <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        <p>{date[0]}</p> 
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{date[1]}</p> 
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>{date[2]}</p> 
      </div>
    </div> 
  );
}

export default App;
