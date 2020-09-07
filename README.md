# React Hooks Practice

- useState

useState는 가장 기본적인 hook이고, 함수형 컴포넌트에서 변하는 state를 사용할 수 있게 해준다.

함수형 컴포넌트에서 state를 관리해야 하는 일이 발생한다면 useState를 사용하면된다.

1개의 useState는 1개의 state만 담당하므로 여러 state를 사용하고 싶을때는 여러 useState함수를 사용할 수 있다.

- useEffect

useEffect는 react 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정할 수 있는 hook이다.

클래스형 컴포넌트에서 componentDidMount, componentDidUpdate 를 합친것이라고 생각해도 된다.

- useContext, useReducer

useContext는 함수형 컴포넌트에서 Context를 더 쉽게 사용할 수 있도록 해준다.

useReducer는 useState 보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook이다.

reducer라는 것은 redux의 요소이다.

reducer는 현재 state와 업데이트를 위해 필요한 정보를 담은 action 값을 전달 받아 새로운 상태를 반환하는 함수이다. reducer 함수에서 새로운 상태를 만들 때는 불변성을 지켜주어야 한다.
