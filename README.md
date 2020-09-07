# React Hooks Practice

- useState

useState는 가장 기본적인 hook이고, 함수형 컴포넌트에서 변하는 state를 사용할 수 있게 해준다.

함수형 컴포넌트에서 state를 관리해야 하는 일이 발생한다면 useState를 사용하면된다.

1개의 useState는 1개의 state만 담당하므로 여러 state를 사용하고 싶을때는 여러 useState함수를 사용할 수 있다.

- useEffect

useEffect는 react 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정할 수 있는 hook이다.

클래스형 컴포넌트에서 componentDidMount, componentDidUpdate 를 합친것이라고 생각해도 된다.
