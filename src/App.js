import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount(count + 1 )
  };

  return (
    <>
    <div>count: {count}</div>
      <br/>
      <button onClick={onClickCount}>カウントアップ</button>
    </>
  );
}

export default App;
