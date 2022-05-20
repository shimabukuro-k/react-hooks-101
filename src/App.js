import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const onClickCountUp = () => {
    setCount(count + 1 )
  };

  const onClickCountDown = () => {
    setCount(count - 1 )
  };

  const onClickCount2 = () => {
    setCount(previousCount => previousCount +1)
  };

  const onClickReset = () => {
    setCount(0);
  };

  const onClickMultiplication = () => {
    setCount(count * 2);
  };

  const onClick3waru = () => setCount(previousCount => previousCount % 3 === 0 ? setCount(previousCount / 3) : previousCount)

  return (
    <>
    <div>count: {count}</div>
      <br/>
      <div>
        <button onClick={onClickCountUp}>カウントアップ</button>
        <button onClick={onClickCountDown}>カウントダウン</button>
      </div>
      <div>
        <button onClick={onClickCount2}>カウントアップ2</button>
      </div>
      <div>
        <button onClick={onClickReset}>Reset</button>
        <button onClick={onClickMultiplication}>×2</button>
        <button onClick={onClick3waru}>3の倍数の時だけ3でわる</button>
      </div>
    </>
  );
}

export default App;
