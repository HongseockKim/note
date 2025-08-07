# 모듈 번들러와 트랜스파일러

## 모듈 번들러

> 모듈 개념 [모듈](https://github.com/HongseockKim/note/blob/main/module/module.md)

모듈 서로 의존성을 띄고 있는데 이런 점에서 문제

- 수많은 모듈들의 순서를 어떻게 처리할 것인가? (의존성 처리)
- 모듈이 많아질수록 HTTP 요청이 많아질텐데 이로 인한 오버헤드는 어떻게 해결할 것인가?
- ES6+ 스펙의 코드를 어떻게 처리할 것인가?

위 문제들을 해결하기 위해 등장한 것이 **모듈 번들러(Module Bundler)로 각각의 모듈 의존성을 해결하여 하나의 자바스크립트 파일로 만드는 도구**

- Webpack, Parcel, Rollup
- 이미지 압축, 최소화(Minification)

## 트랜스파일러

### 트랜스파일러 정의

트랜스파일링(Transpiling)이란 특정 **언어로 작성된 코드를 비슷한 다른 언어로 변환시키는 행위**

- 모든 브라우저가 ES6+의 기능을 제공하지 않기 때문에 이를 ES5 코드로 변환시키는 과정이 필요
- ES6+나 JSX를 변환시키는 트랜스파일러로는 바벨(Babel)이 있음
- 며 타입스크립트를 변환시키는 도구 타입스크립트 트랜스파일러 있음

## 참고

[What is module bundler and how does it work?](https://dev.to/tanhauhau/what-is-module-bundler-and-how-does-it-work-3gp2)
