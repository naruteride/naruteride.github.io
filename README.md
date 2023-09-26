# HTML, CSS
1. **px, em, rem의 차이**:
   - **px (픽셀)**: 고정 크기 단위로, 화면 해상도에 따라 크기가 달라질 수 있습니다.
   - **em**: 상위 요소의 폰트 크기에 상대적으로 크기가 결정됩니다.
   - **rem**: 루트 요소(일반적으로 `<html>`)의 폰트 크기에 상대적으로 크기가 결정됩니다. 루트 요소의 크기를 조절하면 모든 요소에 일관된 영향을 미칩니다.

2. **반응형 웹에서 사용하는 단위**:
   - 반응형 웹에서는 주로 `%`, `em`, `rem`, `vw` (viewport width), `vh` (viewport height) 등을 사용합니다.

3. **vw와 vh**:
   - **vw (viewport width)**: 화면 너비의 백분율로, 뷰포트 너비에 상대적인 크기를 설정합니다.
   - **vh (viewport height)**: 화면 높이의 백분율로, 뷰포트 높이에 상대적인 크기를 설정합니다.

4. **반응형 브레이크 포인트**:
   - 반응형 브레이크 포인트는 디자인 및 콘텐츠 레이아웃이 잘 보이고 작동하는 크기를 기준으로 설정합니다. 주로 기기의 너비에 따라 레이아웃을 조정하는데 사용됩니다.

5. **CSS 선택자 우선순위**:
   - CSS 선택자 우선순위는 다음과 같은 순서대로 결정됩니다: 인라인 스타일 (`style` 속성), 아이디 선택자, 클래스/속성/가상 선택자, 요소 선택자. `!important` 규칙은 다른 모든 규칙을 무시하고 적용됩니다.

6. **비율을 유지하는 CSS 설정**:
   - `padding-bottom` 또는 `padding-top`을 사용하여 요소의 높이를 백분율로 설정하고, `width`를 설정하여 가로 크기를 조절합니다. 이렇게하면 요소가 페이지 크기에 관계없이 높이와 너비의 비율이 유지됩니다.

7. **Flexbox**:
   - Flexbox는 요소를 효율적으로 배치하고 정렬하는 CSS 레이아웃 모델입니다. 부모 요소에 `display: flex`를 설정하여 자식 요소를 정렬하고 공간 배분을 설정할 수 있습니다.

8. **float 동작**:
   - `float` 속성은 요소를 왼쪽 또는 오른쪽으로 떠서 텍스트 흐름 주위로 배치하는데 사용됩니다. 이전에 주로 레이아웃을 만드는 데 사용되었으나, Flexbox와 Grid 레이아웃으로 대체되었습니다.

9. **CSS Cascading**:
   - Cascading은 CSS 규칙이 충돌할 때 우선 순위를 결정하는 프로세스를 나타냅니다. 이는 세 가지 요소로 결정됩니다: 중요성, 특정도, 소스 순서.

10. **SCSS (Sass)**:
    - SCSS는 CSS의 확장 버전으로, 변수, 중첩 규칙, 믹스인 등의 기능을 제공하여 CSS 코드를 더 효율적으로 작성하고 관리하는 데 도움을 줍니다.

11. **position 속성**:
    - `position` 속성은 요소의 위치를 설정하는 데 사용됩니다. 주요 값으로 `static`, `relative`, `absolute`, `fixed`

 등이 있으며, 각각 다른 방식으로 요소를 배치합니다.

12. **margin과 padding**:
    - `margin`은 요소의 외부 여백을 설정하고, 요소 사이의 간격을 조정합니다.
    - `padding`은 요소의 내부 여백을 설정하고, 내용과 테두리 사이의 간격을 조정합니다.

13. **HTML 렌더링 도중 JavaScript 실행 멈춤**:
    - HTML 파서는 스크립트 태그를 만나면 DOM 구성이 멈추고 JavaScript를 다운로드하고 실행합니다. 따라서 JavaScript 실행이 끝날 때까지 페이지 렌더링이 중단될 수 있습니다.

14. **Box model**:
    - Box model은 CSS 박스를 설명하는 개념으로, 각 요소는 내용(content), 패딩(padding), 테두리(border), 여백(margin)으로 구성됩니다.

15. **Attribute vs. Property**:
    - HTML 요소의 속성(attribute)은 HTML 문서에서 정의된 속성을 나타내고, JavaScript의 `getAttribute` 메서드로 접근합니다. 반면에 속성은 DOM 요소의 프로퍼티(property)로 표현되며, JavaScript에서 직접 변경 및 접근 가능합니다.

16. **display 속성 값**:
    - `display` 속성은 요소의 표시 방법을 설정하는 데 사용됩니다. 주요 값으로 `block`, `inline`, `inline-block`, `none`, `flex`, `grid` 등이 있습니다.

17. **CSS 애니메이션 vs. JS 애니메이션**:
    - CSS 애니메이션은 CSS 속성을 사용하여 애니메이션을 정의하고 브라우저에 의해 처리됩니다. JS 애니메이션은 JavaScript 코드를 사용하여 애니메이션을 프로그래밍적으로 제어합니다.

18. **CSS in JS**:
    - CSS in JS는 JavaScript 안에 CSS 코드를 작성하고 스타일을 동적으로 생성하는 방식을 나타냅니다. 이를 통해 컴포넌트 기반 애플리케이션에서 스타일을 관리할 수 있습니다.

19. **시맨틱 마크업**:
    - 시맨틱 마크업은 HTML 요소를 문서 구조와 의미에 따라 사용하는 것을 의미합니다. 시맨틱 요소(예: `<header>`, `<nav>`, `<footer>`)는 콘텐츠의 의미를 더 명확하게 나타냅니다.

20. **HTML5 태그**:
    - HTML5는 새로운 시맨틱 태그(예: `<header>`, `<section>`, `<nav>`)를 도입하여 웹 문서의 의미와 구조를 향상시켰습니다.

21. **script 태그의 Async와 Defer**:
    - `async` 속성은 스크립트를 비동기적으로 다운로드하고 실행하며, 다운로드가 완료되면 즉시 실행합니다.
    - `defer` 속성은 스크립트를 비동기적으로 다운로드하고, HTML 파서가 페이지 파싱을 완료한 후에 스크립트를 실행합니다.

22. **가상 클래스**:
    - 가상 클래스는 특정 상태나 위치에 따라 요소에 스타일을 적용하는 데 사용됩니다. 예로는 `:hover`, `:active`, `:first-child` 등이 있습니다.

23. **Margin 병합**:
    - Margin 병합은 인접한 블록 요소의 상단 및 하단 마진이 병합되는 현상을 나타냅니다. 가장 큰 마진

 값으로 결합됩니다.

# 자바스크립트
자바스크립트는 웹 개발을 위한 프로그래밍 언어로, 웹 페이지를 동적으로 조작하고 상호작용하는 데 사용됩니다.

1. **변수 선언, 초기화, 할당의 차이점**:
   - **변수 선언**: 변수를 생성하고 메모리 공간을 확보합니다. (`var`, `let`, `const`로 선언)
   - **초기화**: 변수에 값을 할당하는 과정으로, 선언 후에 값을 대입합니다.
   - **할당**: 이미 선언된 변수에 새로운 값을 대입하는 것입니다.

2. **데이터 타입**:
   - 자바스크립트의 데이터 타입에는 원시 타입 (Primitive Types)과 참조 타입 (Reference Types)이 있습니다. 원시 타입은 숫자, 문자열, 불리언, null, undefined, symbol, bigint가 있고, 참조 타입은 객체, 배열, 함수 등이 있습니다.

3. **생성자**:
   - 생성자 함수는 객체를 생성할 때 사용되며, 객체를 초기화하고 반환하는 함수입니다. 일반적으로 생성자 함수의 이름은 대문자로 시작합니다.

4. **this**:
   - `this`는 현재 실행 중인 함수나 메서드에서 사용되며, 실행 컨텍스트에 따라 다르게 동작합니다. 주로 객체의 메서드 내에서 해당 객체를 가리키는 데 사용됩니다.

5. **call, apply, bind**:
   - 이들은 함수의 `this` 값을 변경하는 메서드입니다.
   - `call`과 `apply`는 함수를 호출하면서 `this`와 인수를 전달합니다.
   - `bind`는 함수를 호출하는 것이 아니라 새로운 함수를 생성하며, `this`와 인수를 설정합니다.

6. **콜백 함수**:
   - 콜백 함수는 다른 함수의 인수로 전달되고, 나중에 실행되는 함수입니다. 주로 비동기 작업에서 사용됩니다.

7. **콜백 지옥 해결 방법**:
   - 콜백 지옥은 콜백 함수가 중첩되어 가독성을 떨어뜨릴 때 발생합니다. 해결 방법으로는 Promise, async/await을 사용하거나 콜백을 모듈화하는 방법 등이 있습니다.

8. **Promise**:
   - Promise는 비동기 작업을 보다 간편하게 다룰 수 있도록 도와주는 객체로, 성공 또는 실패 시에 콜백을 호출합니다.

9. **Promise.all()**:
   - `Promise.all()`은 여러 개의 Promise를 병렬로 실행하고, 모든 Promise가 성공할 때까지 기다린 후 결과를 반환합니다.

10. **Promise vs. Callback**:
    - Promise는 비동기 코드를 보다 구조화하고 관리하기 쉽게 만듭니다. Callback은 중첩된 코드를 생성할 수 있어 가독성이 떨어질 수 있습니다.

11. **Async, Await**:
    - `async` 함수는 비동기 작업을 수행하고 `await` 키워드를 사용하여 Promise가 처리될 때까지 기다립니다.

12. **Promise vs. Async, Await**:
    - Promise는 콜백 지옥을 해결하고 비동기 코드를 더 간편하게 작성하도록 도와줍니다. Async, Await은 Promise를 더 읽기 쉽게 만들어줍니다.

13. **AJAX**:
    - AJAX(Asynchronous JavaScript and XML)는 비동기적으로 서버와 통신하기 위한 기술로, 웹 페이지를 새로 고치지 않고도 데이터를 불러올 수 있습니다.

14. **var, let, const 차이**:
    - `var`는 함수 스코프를 가지고 있고 호이스팅이 발생합니다.
    - `let`과 `const`는 블록 스코프를 가지고 있으며, `let`은 재할당 가능하고 `const`는 재할당이 불가능합니다.

15. **TDZ (Temporal Dead Zone)**:
    - TDZ는 `let`과 `const` 변수가 선언된 시점부터 초기화되기 전까지의 범위를 나타내며, 변수에 접근하면 에러가 발생합니다.

16. **함수 선언형 vs. 함수 표현식**:
    - 함수 선언형은 함수를 선언하고 변수에 할당합니다. 함수 표현식은 변수에 함수를 할당

합니다.

17. **이벤트 버블링과 캡처링**:
    - 이벤트 버블링은 하위 요소에서 상위 요소로 이벤트가 전파되는 것이고, 이벤트 캡처링은 상위 요소에서 하위 요소로 이벤트가 전파되는 것입니다.

18. **이벤트 위임**:
    - 이벤트 위임은 하위 요소에 대한 이벤트 리스너를 상위 요소에 하나만 등록하여 메모리 사용을 줄이고 성능을 향상시키는 패턴입니다.

19. **호이스팅**:
    - 호이스팅은 변수와 함수 선언이 스코프의 최상단으로 끌어올려지는 동작입니다.

20. **클로저 (Closure)**:
    - 클로저는 함수와 그 함수가 선언된 렉시컬 스코프 사이의 연결을 나타내며, 외부 스코프의 변수에 접근할 수 있도록 합니다.

21. **비동기**:
    - 비동기는 작업을 백그라운드에서 실행하고 결과를 기다리지 않고 다른 작업을 수행할 수 있는 방식을 의미합니다.

22. **동기 vs. 비동기**:
    - 동기 코드는 순차적으로 실행되며 작업이 완료될 때까지 대기합니다. 비동기 코드는 작업이 백그라운드에서 실행되며 기다리지 않고 다른 작업을 수행합니다.

23. **ES6 새로운 기능**:
    - 화살표 함수, 클래스, 템플릿 리터럴, 디스트럭처링 할당, 모듈 등이 추가되었습니다.

24. **Undefined, Null, Undeclared 비교**:
    - `undefined`는 변수가 선언되었지만 값이 할당되지 않았을 때의 상태입니다.
    - `null`은 변수에 의도적으로 빈 값을 할당한 상태입니다.
    - `undeclared`는 선언조차 되지 않은 변수를 나타냅니다.

25. **멀티 쓰레드처럼 사용**:
    - 자바스크립트는 단일 스레드 기반 언어이지만, 웹 워커(Worker)를 통해 멀티 스레드와 유사한 동작을 구현할 수 있습니다. 이를 통해 백그라운드에서 병렬 작업을 수행할 수 있습니다.

26. **이벤트 루프 (Event Loop)**:
    - 이벤트 루프는 비동기 코드의 실행을 관리하고 콜 스택, 큐, 마이크로태스크 큐를 사용하여 비동기 작업을 처리합니다.

27. **태스크 큐와 마이크로태스크 큐**:
    - 태스크 큐에는 비동기 작업이 순서대로 들어가며, 마이크로태스크 큐에는 Promise의 콜백이 들어갑니다.

28. **requestAnimationFrame**:
    - `requestAnimationFrame`은 브라우저에게 애니메이션을 수행하도록 지시하는 함수로, 최적화된 애니메이션을 구현할 때 사용됩니다.

29. **동기적 코딩**:
    - 비동기 코드를 동기적으로 처리하기 위해 Callback, Promise, Async/Await을 사용할 수 있습니다.

30. **map, forEach, reduce**:
    - `map`은 배열의 각 요소에 함수를 적용하고 새로운 배열을 반환합니다.
    - `forEach`는 배열의 각 요소에 함수를 적용하고 반환하지 않습니다.


    - `reduce`는 배열을 하나의 값으로 축소합니다.

31. **자바스크립트의 메모리 관리**:
    - 자바스크립트는 가비지 컬렉터를 사용하여 더 이상 사용되지 않는 메모리를 자동으로 회수합니다.

32. **클래스**:
    - 클래스는 객체 지향 프로그래밍에서 객체를 생성하기 위한 설계 템플릿으로, ES6에서 도입되었습니다.

33. **즉시 실행 함수 (IIFE)**:
    - IIFE는 선언과 동시에 즉시 실행되는 함수로, 변수 스코프를 제한하는 데 사용됩니다.

34. **엄격 모드**:
    - 'use strict'를 사용하여 엄격 모드를 활성화하면 더 엄격한 규칙을 적용하며 오류를 미리 방지합니다.

35. **콜 스택과 힙**:
    - 콜 스택은 함수 호출을 추적하는 데 사용되고, 힙은 동적으로 할당된 메모리를 관리하는 데 사용됩니다.

36. **Rest 연산자와 Spread 연산자**:
    - Rest 연산자 (`...`)는 함수 매개변수나 배열/객체를 나머지 요소로 수집합니다.
    - Spread 연산자 (`...`)는 배열/객체의 요소를 분해하여 전달합니다.

37. **제너레이터**:
    - 제너레이터는 함수의 실행을 일시 중단하고 나중에 다시 시작할 수 있는 기능을 제공합니다.

38. **이터러블과 이터레이터 프로토콜**:
    - 이터러블은 반복 가능한 객체를 나타내며, 이터레이터 프로토콜은 이터러블 객체와 순회하는 방법을 정의합니다.

# 타입스크립트
타입스크립트를 사용하는 이유:
1. **정적 타입 체크**: 타입스크립트는 변수, 함수, 객체 등의 요소에 명시적인 데이터 타입을 지정할 수 있어 코드의 안정성을 높입니다. 컴파일러가 코드를 검사하여 타입 관련 오류를 사전에 발견할 수 있습니다.

2. **코드 가독성 향상**: 타입 정보를 주석 형태로 코드에 포함시킬 수 있으므로 코드의 의도를 명확하게 전달할 수 있습니다. 이로써 코드 가독성을 높이고 유지보수를 용이하게 합니다.

3. **자동 완성 및 인텔리센스**: 개발 환경에서 타입 정보를 활용하여 자동 완성과 인텔리센스 기능을 제공하므로 개발자가 빠르고 정확하게 코드를 작성할 수 있습니다.

4. **리팩터링 지원**: 타입 정보를 가지고 있기 때문에 대규모 코드베이스에서의 리팩터링이 용이하며 안전하게 수행할 수 있습니다.

5. **효율적인 협업**: 타입 정보를 공유하고 문서화할 수 있어 여러 개발자 간의 협업이 원활하게 진행됩니다.

Type과 Interface의 차이점:
- **Type**: 주로 객체, 유니온, 인터섹션, 기본 타입 등을 정의하는데 사용됩니다. 타입은 확장이 불가능하며 두 개 이상의 타입을 합칠 때 유니온과 인터섹션을 사용합니다.

    ```typescript
    type Person = { name: string; age: number };
    type Point = { x: number; y: number };
    type PersonOrPoint = Person | Point;
    ```

- **Interface**: 객체의 구조(shape)를 정의하는데 주로 사용됩니다. 인터페이스는 확장이 가능하며, 클래스에서 구현할 수 있습니다.

    ```typescript
    interface Person {
      name: string;
      age: number;
    }
    
    class Student implements Person {
      constructor(public name: string, public age: number) {}
    }
    ```

제네릭:
- 제네릭은 타입 또는 함수에 대해 추상적인 타입을 사용할 수 있게 해줍니다. 즉, 타입이나 함수의 입력 및 출력 타입을 파라미터화하여 재사용성을 높입니다.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let value: string = identity("Hello, TypeScript"); // T가 string으로 유추됨
```

제네릭 유틸리티 타입:
- 제네릭 유틸리티 타입은 자주 사용되는 일반적인 제네릭 패턴을 미리 정의한 타입입니다. 예를 들어 `Partial<T>`, `Record<K, T>`, `Pick<T, K>`, `ReturnType<T>` 등이 있습니다. 이러한 유틸리티 타입은 코드를 간결하게 작성하고 타입 안정성을 유지하기 위해 유용합니다.

클래스의 Public, Private, Protected:
- **Public**: 기본적으로 클래스 멤버(속성 및 메서드)는 public으로 간주되며, 클래스 외부에서 접근할 수 있습니다.

```typescript
class Person {
  name: string; // public by default

  constructor(name: string) {
    this.name = name;
  }
}
```

- **Private**: private 멤버는 클래스 내부에서만 접근할 수 있습니다.

```typescript
class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }
}
```

- **Protected**: protected 멤버는 클래스 내부 및 서브클래스에서 접근할 수 있습니다.

```typescript
class Person {
  protected address: string;

  constructor(address: string) {
    this.address = address;
  }
}

class Student extends Person {
  constructor(address: string) {
    super(address);
    console.log(this.address); // protected 멤버 접근 가능
  }
}
```

클래스의 Static:
- `static` 키워드로 정적 멤버를 생성할 수 있습니다. 정적 멤버는 클래스의 인스턴스와 상관없이 클래스 자체에 속하며, 인스턴스

를 생성하지 않고도 접근할 수 있습니다.

```typescript
class MathUtils {
  static PI: number = 3.14159265359;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.calculateCircumference(5)); // 정적 메서드 호출
console.log(MathUtils.PI); // 정적 속성 접근
```

위의 코드에서 `PI`와 `calculateCircumference`는 클래스 `MathUtils`에 속한 정적 멤버입니다.

# 리액트