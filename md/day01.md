## 변수
- 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'
- 자바스크립트에선 let 키워드를 사용해 변수를 생성한다.
### let 
```javaScript
let message;
message = "Hello";  //문자열을 저장한다. 
```
- 문자열이 변수와 연결된 메모리 영역에 저장되었기 때문에, 변수명을 이용해 문자열에 접근할 수 있게 되었다.
```javaScript
let message;
message = "Hello";  //문자열을 저장한다. 

alert(message); //변수에 저장된 값을 보여준다.
```

### var
- 오래된 스크립트에서 let 대신 var라는 키워드를 발견하는 경우가 있다.
    - var는 let과 거의 동일하게 동작.
    - var도 let처럼 변수를 선언하는데 활용
    - 오래된 방식
    - 변수는 한번만 선언 해야 하나, var를 이용할 경우 여러번 선언 가능

### const
- 변화하지 않는 변수(상수)
- 재할당할 수 없으므로 상수를 변경하려고 하면 에러 발생
- 대문자와 밑줄로 구성된 이름으로 명명
```javaScript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//색상을 고르고 싶을 때 별칭을 사용할 수있음
let color = COLOR_ORANGE;
alrer(color);   //#FF7F00
```

### 바람직한 변수명
- 변수명은 간결하고, 명확해야 한다.
- 이름을 짓는 것은 프로그래밍에서 가장 중요하고 복잡한 기술 중 하나.
- 아래는 변수 명명 시 참고하기 좋은 규칙
> 1.  userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용
> 2. 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하여야 한다.
> 3. 최대한 서술적이고 간결하게 명명(data와 value는 나쁜 이름의 예시이다. 이런 이름은 아무것도 설명해주지 않는다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용)
> 4.  자신만의 규칙이나 소속된 팀의 규칙을 따른다. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를  currentUser나 newUser라는 이름으로 지을수 있다.

```javaScript
//우리가 살고있는 행성의 이름을 값으로 가진 변수를 만들때
let ourPlanetName = "Earth";

//현재 접속 중인 사용자의 이름을 저장하는 변수를 만들 때
let currentUserName = "John";
```

---

## 기본 데이터 타입
- 기본(PRIMITIVE TYPES)
- 참조(객체 형, 기본타입이 아닌 모든 것)

<img src="/img/type.png" alt="">

- typeof 연산자
    - 인수의 자료형을 반환한다. 자료형에 따라 처리 방식을 다르게 하고 싶거나 변수의 자료형을 빠르게 알아내고자 할때 유용
    ```javaScript
    typeof 0    //"number"
    ```
- Nan = NOT A NUMBER 

### 문자형
- 자바스크립트에선 문자열(string)을 따옴표로 묶는다.
```javaScript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`
```
    - 큰따옴표, 작은따옴표, 역따옴표

### 불린형
- true와 false 두가지 값 밖에 없는 자료형
```javaScript
let nameChecked = true; //네, name이 확인되었습니다.
let ageChecked = false; //아니요, age를 확인하지 않았습니다.

let isGreater = 4 > 1;
alert(isGreater);   //true(비교 결과: "yes")
```

### null값
- 지금까지 소개한 자료형 중 어느 자료형에도 속하지 않는 값
- null값은 오로지 null값만 포함하는 별도의 자료형은 만든다.

```javaScript
let age = null;
```

### undefined값
- null값 처럼 자신만으 ㅣ자료형을 형성한다.
- '값이 할당되지 않은 상태'를 나타낼 때 사용
- 변수는 선언했지만, 값을 할당하지 않았다면 해당 변수에  undefined가 자동으로 할당
    ```javaScript
    let age;
    alert(age); //'undefined'가 출력
    ```

### 요약
- 숫자형 : 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용
- 문자형 : 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용
- Boolean형 : true, false를 나타 낼 때 사용
- null : null 값만을 위한 독립 자료형, null은 알수 없는 값을 나타낸다.
- undefined : undefined 값만을 위한 독립 자료형, 할당되지 않은 값을 나타낸다.
- 객체형 : 복잡한 덷이터 구조를 표현할 때 사용

---

## 대화상자 함수  alert, promptm confirm

### alert
- 함수가 실행되면 사용자가 '확인(OK)'버튼을 누를 때까지 메서지를 보여주는 창이 계속 떠있게 된다.
```javaScript
alert("Hello");
```

### Prompt
- 브라우저에서 제공하는 prompt함수는 두개의 인수를 받는다.
```javaScript
result = prompt(title,[default]);   //default는 필수가 아닌 선택값
```
- 함수가 실행되면 텍스트 메시지와 입력 필드, 확인, 취소 버튼이 있는 모달 창을 띄운다.
    - title : 사용자에게 보여줄 문자열
    - default : 입력 필드의 초깃값(선택값)

- 사용자는 프롬프트 대화상자의 입력 필드에 원하는 값을 입력하고 확인을 누를 수 있다. 값을 입력하길 원하지 않는 경우는 취소 버튼을 누르거나 Esc를 눌러 대화상자를 빠져나간다.
- prompt 함수는 사용자가 입력 필드에 기재한 문자열을 반환한다. 사용자가 입력을 취소한 경우 null이 반환된다.
```javaScript
let age = prompt('나이를 입력해주세요.', 100);
alert(`당신의 나이는 ${age}살 입니다.`);    //당신의 나이는 100살입니다.
```

### confirm
```javaScript
result = confirm(question);
```
- 매개변수로 받은 question과 확인 및 취소 버튼이 있는 모달창을 보여준다.
- 사용자가 확인버튼을 누르면 true, 그 외의 경우는 false를 반환한다.
```javaScript
let isBoss = confirm("당신이 주인인가요?");
alert(isBoss);  //확인 버튼을 눌렀다면 true가 출력된다.
```

### 요약
- 브라우저는 사용자와 상호작용할 수 있는 세가지 함수를 제공
- alert : 메시지를 보여준다.
- prompt : 사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에, 입력 필드를 함께 제공한다. 확인을 누르면 사용자가 입력한 문자열을 반환하고, 취소 또는 Esc를 누르면 null을 반환
- confirm : 사용자가 확인 또는 취소 버튼을 누를 때까지 메시지 창이 보여진다. 사용자가 확인 버튼을 누르면 true, 취소 혹은 Esc부르면 false를 반환한다.

---
## 형변환
- 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환
- 전달받은 값을 의도를 갖고 원하는 타입으로 변환(명시적 변환)해 주는 경우도 형 변환이라고 할수 있다.

### 문자형으로 변환
- 문자형의 값이 필요할 때 일어난다.
- alert메서드는 매개변수로 문자형을 받기 때문에, alert(value)에서 value는 문자형이어야 한다. 만약, 다른 형의 값을 전달받으면 이 값은 문자형으로 자동 변환된다.
```javaScript
let value = true;
alert(typeof value);    //boolean

value = String(value);  //변수 value엔 문자열 "true"가 저장
alert(typeof value);    //string
```
- false는 문자열 "false"로, null은 문자열 "null"로 변환되는 것과 같이, 문자형으로의 변환은 대부분 예측 가능한 방식을 일어난다.

### 숫자형으로 변환
- 숫자형으로의 변환은 수학과 관련된 함수와 표현식에서 자동으로 일어난다.
```javaScript
alert("6"/"2"); //3, 문자열이 숫자형으로 자동변환된 후 연산이 수행된다.
```
- Number(value)함수를 사용하면 주어진 값을 숫자형으로 명시해서 변환할수 있다.
```javaScript
let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변환

alert(typeof num); // number
```
- 숫자형 값을 사용해 무언가를 하려고 하는데 그 값을 문자 기반 폼을 통해 입력받는 경우엔, 이런 명시적 형 변환이 필수. 한편, 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN이 된다.
```javaScript
let age = Number("임의의 문자열 123");

alert(age); // NaN, 형 변환이 실패
```

|전달받은 값|형 변환 후|
|---|---|
|`undefined`|NaN|
|`null`|0|
|`true and false`|1과 0|
|`string`|문자열의 처음과 끝 공백이 제거된다. 공백 제거 후 남아있는 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽는다. 변환에 실패하면 NaN이 된다.|

```javaScript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN ("z"를 숫자로 변환하는 데 실패함)
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```
- null과 undefined은 숫자형으로 변환 시 결과가 다르다는 점에 유의. null은 0이 되고 undefined는 NaN이 된다.

### 불린형으로 변환
- 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 '비어있다고'느껴지는 값들은 false가 된다.
- 그 외의 값은 true로 변환된다.

|전달받은 값|형 변환 후|
|---|---|
|`0, null, undefined, NaN, ""`|false|
|`그 외의 값`|true|

```javaScript
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)

alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환.
```

### 요약
- 문자, 숫자, 논리형으로의 형 변환은 자주 일어나는 형 변환이다.
- 숫자형으로 변환은 수학 관련 연산시 일어난다. Number(valse)로도 형 변환을 할수 있다.
- 불린형으로 변환은 논리 연산 시 발생한다. Boolean(valse)으로도 변환할수 있다.

---
## 문자열
- 문자열은 작은따옴표, 큰따옴표, 백틱으로 감쌀수 있다.
- 백틱은 표현식 ${...}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입할수 있다.
```javaScript
// strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting individual characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLocaleLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log('index of the @ sign:', index);
```

---
## 비교 연산자
- 보다 큼.작음 : a>b, a<b
- 보다 크거나 작거나 같음 : a>=b, a<=b
- 같음(동등), 같지 않음 : ==, !=

### 불린형 반환
- true가 반환되면 긍정, 참, 사실을 의미한다.
- false가 반환되면 부정, 거짓, 사실이 아님을 의미한다.

```javaScript
alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true
```
- 반환된 불린값은 다른 여타 값처럼 변수에 할당 할 수 있다.
```javaScript
let result = 5 > 4; // 비교 결과를 변수에 할당
alert( result ); // true
```

### 문자열 비교
- 문자열 비교시 컴퓨터는 문자를 모르기 때문에 문자에 해당하는 유니코드 순으로 비교한다.
```javaScript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

- 문자열 비교 시 적용되는 알고리즘 순
    > 1. 두 문자열의 첫 글자를 비교
    > 2. 첫 번째 문자열의 첫 글자가 다른 문자열의 첫 글자보다 크면(작으면), 첫번째 문자열이 두번째 문자열보다 크다고(작다고) 결론 내고 비교를 종료
    > 3. 두 문자열의 첫 글자가 같으면 두 번째 글자를 같은 방식으로 비교
    > 4. 글자 간 비교가 끝날 때까지 과정 반복
    > 5. 비교가 종료되었고 문자열의 길이도 같다면 두 문자열은 동일하다고 결론. 비교가 종료되었지만 두 문자열의 길이가 드르면 길이가 긴 문자열이 더 크다고 결론

### 다른 형의 값을 비교
- 비교하려는 값의 자료형이 다르면 자바스크립트는 이 값들을 숫자형으로 바꾼다.
    ```javaScript
    alert( '2' > 1 ); // true, '2'를 숫자 2로 변환
    alert( '01' == 1 ); // true, 숫자1로 변환
    ```

### 요약
- 비교 연산자는 불린값을 반환
- 문자열은 문자 단위로 비교
- 서로 다른 타입의 값을 비교할 땐 숫자형으로 형 변환이 이뤄지고 난 후 비교가 진행
- 일치 비교시에는 ===를 사용하면 정확하게 비교할수 있다.

---

## if와 '?'를 사용한 조건 처리

### if문
```javaScript
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) alert( '정답입니다!' );
```
- 조건이 true일 때 복수의 문을 실행하고 싶다면 중괄호로 코드 블록을 감싸야 한다.

```javaScript
if(true){
    alert(1);
} else {
    alert(2);
}
```

### 삼항 조건 연산자
- 조건에 따라 다른 값을 변수에 할당해줘야 할 때가 있다.
```javaScript
let accessAllowed = (age > 18) ? true : false;
```
- 물음표 연산자라고도 불리는 조건부 연산자를 사용하면 짧고 간결하게 변형 할수 있다.
- 피연산자가 세개이기 때문에 '삼항 연산자'라고 부른다.

---

## 논리 연산자

### || OR
- 인수 중 하나라도 true이면 true를 반환하고 그렇지 않으면 false를 반환한다.
```javaScript
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

### && AND
- 두 피연산자가 모두 참일 때 true를 반환한다. 그 외의 경우 false를 반환
```javaScript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

### ! (NOT)
- 피연산자를 느낌표로 써서 역을 반환한다.
```javaScript
alert( !true ); // false
alert( !0 ); // true
```

---

## while, for 반복문 loop

### while
```javaScript
while (condition) {
  // 코드
  // '반복문 본문(body)'이라 불림
}
```

- ()의 값이 true일때 종료문이 없을 경우 영원히 반복

- condition(조건)이 truthy 이면 반복문 본문의 코드가 실핸된다. 아래 반복문 조건 i < 3을 만족할 동안 i를 출력해준다.
```javaScript
let i = 0;
while (i < 3) { // 0, 1, 2가 출력
  alert( i );
  i++;
}
```
- 반복문 본문이 한 줄 짜리문이라면 대괄호를 생략할 수 있다.
```javaScript
let i = 3;
while (i) alert(i--);
```

### for
- while 반복문보다는 복잡하지만 가장 많이 쓰이는 반복문이다.
```javaScript
for (begin; condition; step) {
  // ... 반복문 본문 ...
}
```

### 요약
- while : 각 반복이 시작하기 전에 조건을 확인
- do.while : 각 반복이 끝난 후에 조건을 확인
- for : 각 반복이 시작하기 전에 조건을 확인

---

## swith문
- if조건문을 switch문으로 바꿀수 있다.
- 하나 이상의 case문으로 구성되며 대게 default문도 있지만 필수는 아니다.
```javaScript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

> 1. 변수 x의 값과 첫번째 case문의 값 value1을 비교한 후 두번째 case문의 값value2와 비교한다.
> 2. case문에서 변수 x의 값과 일치하는 값을 찾으면 해당 case문의 아래의 코드가 실행된다. 이때, break문을 만나거나 switch문이 끝나면 코드의 실행이 멈춘다.
> 3. 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행된다.(default문이 있는 경우)

