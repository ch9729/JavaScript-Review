## 1. 함수 function

### 함수 선언
- 함수 방식을 이용하면 함수를 만들 수 있다. 함수 선언 방식은 아래와 같이 작성 할수 있다.
<img src='/img/img.png'>

```javaScript
function showMessage() {
    alert("안녕하세요!");
}
```

### 지역변수
- 함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근 할수 있다.
```javaScript
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert( message );
}

showMessage(); // 안녕하세요!

alert( message ); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생.)
```

### 외부변수(전역 변수)
- 함수 내부에서 함수 외부의 변수인 외부 변수에 접근 할 수 있다.
```javaScript
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John
```
- 함수에선 외부 변수에 접근하는 것 뿐만 아니라, 수정도 할 수 있다.
```javaScript
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // 함수 호출 전이므로 John 이 출력됨

showMessage();

alert( userName ); // 함수에 의해 Bob 으로 값이 바뀜
```

### 매개변수
```javaScript
function showMessage(from, text) { // 인수: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! 
showMessage('Ann', "What's up?"); // Ann: What's up? 
```

```javaScript
//입력된 매개변수 from의 값을 수정
function showMessage(from, text) {

  from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며준다.

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// 함수는 복사된 값을 사용하기 때문에 바깥의 "from"은 값이 변경되지 않는다.
alert( from ); // Ann
```

- 리턴(반환값)
<img src="/img/img2.png" alt="">

- 리턴이 없는 경우
<img src="/img/img3.png" alt="">

- 리턴이 있을 때
<img src="/img/img4.png" alt="">


---

## 2. 함수 표현식 Function Expression, 콜백 함수
- 함수 선언문
```javaScript
function sayHi() {
  alert( "Hello" );
}
```

- 함수 표현식
```javaScript
let sayHi = function() {
  alert( "Hello" );
};
```

### 콜백 함수
- 예를 위해 매개변수 3개 있는 함수, ask(question, yes, no)를 작성해보겠다. 각 매개변수에 대한 설명은 아래와 같다
> 1. question: 질문
> 2. yes : "Yes"라고 답한 경우 실행되는 함수
> 3. no : "No"라고 답한 경우 실행되는 함수
```javaScript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "동의하셨습니다." );
}

function showCancel() {
  alert( "취소 버튼을 누르셨습니다." );
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);
```
- 함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불린다.
- _함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 "나중에 호출(called back)"하는 것이 콜백 함수의 개념_
- 예시에서 사용자가 yes라고 대답한 경우 showOk가 콜백이 되고, no라고 대답한 경우 showCancel이 콜백이 된다.
- 아래와 같이 함수 표현식을 사용하면 코드길이가 짧아진다.
```javaScript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "동의하십니까?",
  function() { alert("동의하셨습니다."); },
  function() { alert("취소 버튼을 누르셨습니다."); }
);
```
- _이렇게 이름 없이 선언한 함수는 익명 함수(anonymous function) 라고 부른다. 익명 함수는 (변수에 할당된 게 아니기 때문에) ask 바깥에선 접근할 수 없다._

### 함수 표현식과 선언문의 차이

- 함수 선언문 : 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재한다.
- 함수 표현식 : 함수가 할당 연산자 = 를 이용해 만든 '할당 표현식'우측에 생성된다.

### 요약
- 함수는 값이다. 따라서 함수도 값처럼 할당, 복사, 선언할수 있다.
- 함수 선언문방식으로 함수를 생성하면, 함수가 독립된 구문 형태로 존재하게 된다.
- 함수 표현식방식으로 함수를 생성하면, 함수가 표현식의 일부로 존재하게 된다.
- 함수 선언문은 코드 블록이 실행되기도 전에 처리된다. 따라서 블록 내 어디서든 활용 가능하다.
- 함수 표현식은 그 코드 블록이 실행될 때 만들어 진다.

---
## 3. 화살표 함수 arrow function
- 화살표 함수는 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법이다.
```javaScript
let func = function(arg1, arg2, ...argN) {
  return expression;
};

//함수 표현식을 화살표 함수로 변환
let func = (arg1, arg2, ...argN) => expression
```

- 좀 더 구체적인 예시를 살펴보자
```javaScript
let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

- 인수가 하나밖에 없다면 인수를 감싸는 괄호를 생략할 수 있다. 괄호를 생략하면 코드 길이를 더 줄일 수 있다.
```javaScript
let double = n => n * 2;
// let double = function(n) { return n * 2 }과 동일

alert( double(3) ); // 6
```

- 인수가 하나도 없을 때는 괄호를 비워놓으면 된다. 다만, 이때 괄호는 생략할수 없다.
```javaScript
let sayHi = () => alert("안녕하세요!");

sayHi();
```

- 화살표 함수는 함수 표현식과 같은 방법으로 사용할수 있다.
```javaScript
let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
  () => alert('미성년자') :
  () => alert("성인");

welcome();
```

### 요약
- 화살표 함수는 본문이 한 줄인 함수를 작성할 때 유용하다. 본문이 한 줄이 아니라면 다른 방법으로 화살표 함수를 작성해야 한다.
- 중괄호 없이 작성 : (...args) => expression - 화살표 오른쪽에 표현식을 둔다. 함수는 이 표현식을 평가하고, 평가 결과를 반환한다.
- 중괄호와 함께 작성 : (...agrs) => {body} - 본문이 여러 줄로 구성되어있다면 중괄호를 사용해야 한다. 다만, 이 경우는 반드시 return 지시자를 사용해 반환 값을 명기해 주어야 한다.
---

## 4. 배열 Arrays
- 배열과 객체는 데이터를 저장하는 자료구조이다.
- 원시 타입이 아닌 값이 할당된 변수들은 그 값으로 향하는 참조를 갖게 된다. 참조는 메모리에서의 객체의 위치를 가리키고 있다. 변수는 실제로 값을 가지고 있지 않다.
- 객체는 우리의 컴퓨터 메모리 어딘가에 생성된다. 우리가 arr =[]를 작성했을 때 우리는 메모리 내부에 배열을 만든 것이다.
- 변수 arr이 갖는 것은 그 배열이 위차한 주소이다.

```javaScript
let fruits = ["사과", "오렌지", "포도"];

alert( fruits[0] );
alert( fruits[1] ); 
alert( fruits[2] );

alert( fruits.length ); 
```

- 배열 수정
```javaScript
fruits[0] = "배";

console.log(fruits[0]);
```

- 배열 값 삭제
```javaScript
let fruits = ["사과", "오렌지", "배"];

alert( fruits.pop("오렌지") ); 
alert( fruits ); // 사과, 배
```

- 배열 추가
```javaScript
let fruits = ["사과", "오렌지"];

fruits.push("배");

alert( fruits );
```

- 배열 앞 요소 제거후 제거한 요소를 반환
```javaScript
let fruits = ["사과", "오렌지", "배"];

alert( fruits.shift() ); // 배열에서 "사과"를 제거

alert( fruits ); // 오렌지,배
```

- 배열 앞 요소 추가
```javaScript
let fruits = ["오렌지", "배"];

fruits.unshift('사과');

alert( fruits ); // 사과,오렌지,배
```

### 배열 반복문
```javaScript
let arr = ["사과", "오렌지", "배"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

//다른 방법
let fruits = ["사과", "오렌지", "자두"];

// 배열 요소를 대상으로 반복 작업을 수행
for (let fruit of fruits) {
  alert( fruit );
}
```

### 요약
- 배열은 특수한 형태의 객체로, 순서가 있는 자료를 저장하고 관리하는 용도에 최적화된 자료구조이다.
- 선언 방법
```javaScript
// 대괄호 (가장 많이 쓰이는 방법임)
let arr = [item1, item2...];

// new Array (잘 쓰이지 않음)
let arr = new Array(item1, item2...);
```
- new Array(number)을 호출하면 길이가 number인 배열이 만들어지는데, 이 때 요소는 비어있다.
- length 프로퍼티는 배열의 길이를 나타내준다. 정확히는 숫자형 인덱스 중 가장 큰 값에 1을 더한 값이다. 배열 메서드는 length 프로퍼티를 자동으로 조정해준다.
- length값을 수동으로 줄이면 배열 끝이 잘린다.
- 다음 연산을 사용하면 배열에 item을 입력/ 제거한다.
> 1. push(...items) – items를 배열 끝에 더해준다.
> 2. pop() – 배열 끝 요소를 제거하고, 제거한 요소를 반환
> 3. shift() – 배열 처음 요소를 제거하고, 제거한 요소를 반환
> 4. unshift(...items) – items를 배열 처음에 더해준다.

- 아래 방법을 사용하면 모든 요소를 대상을 반복 작업을 할수 있다.
> 1. for (let i=0; i<arr.length; i++) – 가장 빠른 방법이고 오래된 브라우저와도 호환
> 2. for (let item of arr) – 배열 요소에만 사용되는 모던한 문법

---
## 5. 객체 Object
<img src="/img/img5.png" alt="">

- 객체는 중괄호 {...}를 이용해 만들 수 있다. 중괄호 안에는 '키':'값'쌍으로 구성된 프로퍼티를 여러개 넣을 수 있다.
- 중괄호{...}를 이용해 객체를 선언하는 것을 객체 리터럴이라고 부른다.
```javaScript
let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30        // 키: "age", 값: 30
};

// 프로퍼티 값 얻기
alert( user.name ); // John
alert( user.age ); // 30
```
<img src="/img/img6.png" alt="">

<img src="/img/img7.png" alt="">

- 배열과 객체는 서로 중첩 가능
<img src="/img/img8.png" alt="">

### in 연산자로 프로퍼티 속성이 있는지 확인
- for..in반복문을 사용하면 객체의 모든 키를 순회 할수 있다.
```javaScript
let user = { name: "John", age: 30 };

alert( "age" in user ); // user.age가 존재하므로 true가 출력
alert( "blabla" in user ); // user.blabla는 존재하지 않기 때문에 false가 출력
```
---