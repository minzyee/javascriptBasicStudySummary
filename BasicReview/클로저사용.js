// 함수 스코프의 특징을 알고나면 클로저를 이해하기는 좀 쉬워질겁니다.

function makeClosure() {
  const val1 = 100;
  const val2 = 100;

  return {
    getVal1: function () {
      return val1; // 결국 100을 반환
    },

    getVal2: function () {
      return val2; // 결국 200을 반환
    },
  }
}

let result = makeClosure();
console.log(result.getVal1()); // 100
console.log(result.getVal2()); // 200

// 함수로부터 리턴되는 값이 
// 상위 스코프에서 자신을 감싸는 함수 안의 데이터에 접근하려고 할 때,,,

// 그럼 class에서 private사용해서 접근했던걸, 예전 문법에서는 저렇게 클로저로 만들었다.
// 레거시 코드를 위해서 클로저를 알아두면 좋고 클래스에서 사용하는 private 접근과 동일하다.