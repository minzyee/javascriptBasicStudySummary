// 스코프: 변수의 유효범위
// 전역 스코프, 함수 스코프, 블록 스코프(let과 const가 생긴 후로 생긴 스코프이다.)

let val = 1;
console.log(val);


// 외부의 변수(또는 전역 변수)는 어디든 갈 수 있지만, 스코프에 갖힌 녀석은 외부 스코프에서 참조하지 못한다.
function test() {
  let val2 = 1;
}
console.log(val2);