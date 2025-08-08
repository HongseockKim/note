# CSS 애니메이션 과 JS 애니메이션

CSS 의 `transition`, `animation`

javascript 의 `setInterval()`, `requestAnimationFrame()`

## CSS 애니메이션

### CSS 애니메이션 장점

- 반응형으로 애니메이션을 구현하기에 유용한데, 미디어 쿼리로 애니메이션을 적용하면 된다.
- 외부 라이브러리를 필요로 하지 않는다.
- CSS 자체가 선언형(declarative)이기 때문에 어떤 요소가 애니메이션을 가져야 한다는 직관적인 표현이 가능하다.
- 메인 쓰레드가 아닌 별도의 컴포지터 쓰레드(Compositor Thread)에서 그려지기 때문에 메인 쓰레드에서 작업하는 JS보다 효율적이다.

### CSS 애니메이션 단점

- 복잡한 애니메이션 제어 어려움
- 동적 상호작용 한계

## javaScript 애니메이션

RAF(RequestAnimationFrame) API 60fps를 보장

### javaScript 애니멩이션 장점

- 요소의 스타일이 변하는 순간마다 제어할 수 있기 때문에 애니메이션의 세밀한 구성이 가능해진다.
- GPU를 통한 하드웨어 가속을 제어할 수 있다. 이는 CSS의 특정 속성으로 인한 가속을 막아주는데, 하드웨어 가속이 모바일에서 성능저하를 발생시킬 수 있기 때문에 이런 면에선 좋다.
- 브라우저 호환성 측면에서 transition / animation 속성보다 뛰어나다.

### javaScript 애니멩이션 단점

- 메인 스레드에서 실행되어 성능 부담
- 코드 복잡성 증가
