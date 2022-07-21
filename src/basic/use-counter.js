import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]); // useCounter훅을 사용하는 다른 컴포넌트에서 매개변수로 받을 것이므로, 의존성 배열에 넣어줘야 함

  return counter; // 다른 컴포넌트에서 이걸 꺼내 쓸 것이므로 반환해 줌
};

export default useCounter;