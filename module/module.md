# 모듈: CommonJs, AMD ,UMD ,ES6

## 모듈(module) 정의

모듈이란 **여러 기능들에 관한 코드가 모여있는 하나의 파일**

- **유지보수성**: 기능들이 모듈화가 잘 되어있다면, 의존성을 그만큼 줄일 수 있기 때문에 어떤 기능을 개선한다거나 수정할 때 훨씬 편하게 할 수 있다.
- **네임스페이스화**: 자바스크립트에서 전역변수는 전역공간을 가지기 때문에 코드의 양이 많아질수록 겹치는 네임스페이스가 많아질 수 있다. 그러나 모듈로 분리하면 모듈만의 네임스페이스를 갖기 때문에 그 문제가 해결된다.
- **재사용성**: 똑같은 코드를 반복하지 않고 모듈로 분리시켜서 필요할 때마다 사용할 수 있다.

## CommonJs

자바스크립트의 공식 스펙이 브라우저만 지원했기 때문에 이를 서버사이드 및 데스크탑 어플리케이션에서 지원하기 위한 노력이 있었다. 그걸 위해 만든 그룹이 CommonJS이며 여기선 자바스크립트가 범용적인 언어로 쓰이기 위한 스펙을 정의하고 있다. 그룹을 만들었을 때, 범용적인 언어로 만들기 위해서는 모듈화의 개념이 필요했고 이 그룹만의 모듈 방식을 정의하게 되었는데 그것이 바로 CommonJS 방식의 모듈화다.

### module

`module` 은 현재 모듈에 대한 정보를 갖고 있는 객체이다. 이는 예약어이며 그 안에 `id` , `path` , `parent` 등의 속성이 있고 `exports` 객체를 가지고 있다.

### exports | module.exports

- `module.exports` 는 빈 객체를 참조한다
- `exports` 는 `module.exports` 를 참조한다.
- `require` 는 항상 `module.exports` 를 리턴받는다.

exports 는 항상 module.exports 를 참조하기 때문에 exports 를 사용하면 직접 module.exports 를 수정하지 않고 객체의 멤버를 만들거나 수정하는 방식으로 사용한다. 따라서, exports 에 어떤 값을 할당하거나 새로운 객체를 할당했다고 하더라도 결국 require 는 module.exports 를 리턴받기 때문에 잠재적인 버그를 피할 수가 있다.

## AMD(Asynchronous Module Definition) 비동기 모듈

CommonJS가 서버쪽에서 장점이 많은 반면에 AMD는 브라우저 쪽에서 더 큰 효과를 발휘한다. 브라우저에서는 모든 모듈이 다 로딩될 때까지 기다릴 수 없기 때문에 비동기 모듈 로딩방식으로 구현을 해놓았다. 이 방식에서 사용하는 함수는 `define()` 과 `require()` 이며 AMD 스펙을 가장 잘 구현한 모듈로더는 RequireJS 이다.

`require.js` 파일을 받아서 `<script>` 태그에 넣어주고 `data-main` 속성으로 `require.js` 가 로드된 후에 실행할 자바스크립트 파일 경로를 넣어준다.

require.js 가 로드되자마자 index.js 가 실행되는 구조

```javascript
require.config({
  baseUrl: '/',
  paths: {
    a: 'a',
    b: 'b',
  }
});

require(['a'], (a) => {
  a.printA();
});
```

```javascript
define(() => {
  return {
    printA: () => console.log('a')
  }
});
```

## UMD(Universal Module Definition) 범용 모듈

CommonJs, AMD 모듈방식을 통합하기 위한 하나의 패턴

[공식umd소스코드](https://github.com/umdjs/umd/blob/master/templates/returnExports.js)

```javascript
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return {};
}));
```

- AMD: define() 이 함수이고 define.amd 속성의 객체를 가지고 있다.
- CommonJS: module 이 객체이고 module.exports 속성의 객체를 가지고 있다.
- Browser: 따로 특이사항이 없다.

통합하는 방식은 2개의 인자를 전달받는 함수를 실행하는 것으로, 첫번째 인자는 Browser 쪽을 구현할 `root` 에 넘길 값으로 `undefined` 이면 `this` 로 아니라면 `self` , 즉 `window` 로 설정한다. 그리고 2번째 인자로 빈 객체 리터럴을 리턴하는 함수를 보낸다. 이렇게 되면 각각의 환경에서 모두 모듈개념을 사용할 수 있게 된다.

## ES6(ES2015)

`import` 와 `export` 구문을 사용하는 방식

모든 브라우저가 지원하는 것이 아니기 때문에 `Babel의` `@babel/plugin-transform-modules-commonjs` 를 통해 변환시켜서 사용한다

### named export

`named export` 는 모듈 내에 여러개 존재할 수 있습니다

```javascript
export let name1;
export const name2;
export var name3;
export function name4 () {/*...*/}
export class MyClass {/*...*/}

const var1;
let var2;
var var3;

export { var1, var2, var3 }

let var4;
export { var4 as var5 } 
```

### default export

`export default` 는 모듈에서 하나만 존재할수 있습니다.

```javascript
export default
```
