import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET', // GET 쓰고 싶을 땐 불필요하게 method, headers, body 적지 않아도 되도록 // method, headers, body가 있는지? 있다면 그걸 사용, 없다면 GET, {}, null을 사용
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      applyData(data); // 매개변수로 전달하는 함수에 방금 정의한 data 변수를 넣어 실행하도록
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  return { // 객체 반환
    isLoading, //: isLoading, // 좌=프로퍼티 이름, 우=위에서 정의한 state // key, value 이름 똑같아 안 써줘도 동일하게 동작
    error, //: error,
    sendRequest, //: sendRequest,
  };
};

export default useHttp;