import useCounter from './use-counter'; 
import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter(); // useCounter 훅의 return 값을 counter로 설정했으므로 변수 counter에 그 리턴 값을 할당함

  return <Card>{counter}</Card>;
};

export default ForwardCounter;