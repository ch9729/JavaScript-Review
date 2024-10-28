alert("Hello World")

//변수 let, var
let m = "헬로우";
let n = 77;

console.log("변수 m = " + m + ", 변수 n = " + n);

var x = "var변수"
var x = "재정의"

console.log(x)

//상수 변하지 않는 값()
const age = 28;
//age = 29;

console.log(age)

let eggCount = 42;
eggCount + 2;
//42 출력
console.log(eggCount)


//문자형 한따옴표 또는 쌍따옴표면 문자열이다.
let s1 = 'Hello';
let s2 = "Java";
//리터럴 템플릿 문자열은 벡틱 ``

let s3 = `문자열인데 대입가능 ${s1} ${s2}`

console.log(s3)

//초기값을 주지 않았을땐 undefined 출력
let age1;
console.log(age1)

let 나이 = prompt("당신의 나이는 몇살인가요?", 28);
alert(`당신의 나이는 ${나이}입니다.`)