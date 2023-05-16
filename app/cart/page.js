export default function Cart() {
  let cart = ["Tomatoes", "Pasta"];
  let card = ["현대카드", "롯데카드"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem item={cart[0]} />
      <CartItem item={cart[1]} />
      <Button color="blue" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Button(props) {
  return <button style={{ background: props.color }}>버튼임</button>;
}

/* 

# Next.js 컴포넌트는 2가지 종류
1. server component - 여기있는 코드들은 서버 컴포넌트
  - html에 자바스크립트 기능 넣기 불가능
  - useState, useEffect 등 사용 불가

  - 장점: 로딩 속도 빠름 / 검색엔진 노출 유리
  - 큰 페이지 만드는 곳에 추천

2. client component - 맨 위에 'use client' 적혀있는건 클라이언트 컴포넌트 
  - html에 자바스크립트 기능 넣기 가능
  - useState, useEffect 등 사용 가능

  - 단점: 로딩 속도 느림 (자바스크립트 많이 필요 && hydration 필요)
  - JS기능 필요한 곳만 

# props는 부모 => 자식 방향으로만 전달 가능
  따라서 데이터가 많은 컴포넌트가 필요하면 그들 중 최고 부모 컴포넌트에 보관해야 좋음

# 파라미터 문법: 매번 약간 다른 내용으로 function을 실행하고 싶을 때 사용 (props 문법도 매번 약간 다른 component를 만들고 싶을 때)
-> 비슷한 컴포넌트는 굳이 여러 개 만들 필요가 없음
*/
