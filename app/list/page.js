"use client";

import { useState } from "react";

export default function List() {
  /* 
  - 변수: 데이터 일시적으로 저장 가능 == state
  - state 장점: state 변경되면 state를 사용하는 html 부분도 자동으로 재렌더링
  */
  let products = ["Tomatoes", "Pasta", "Coconut"];

  // [ 변수 이름, amount 변경 시 사용할 이벤트 ]
  let [amount, changeAmount] = useState([0, 0, 0]);

  /* 
  
  #(정보) state 변경 함수 사용 시 new state == old state일 경우 변경 X

  */
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
            <span> {amount[i]} </span>
            <button
              onClick={() => {
                let copy = [...amount];
                copy[i]++;
                changeAmount(copy);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let copy = [...amount];
                copy[i]--;
                changeAmount(copy);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
