import React, {useState} from 'react';

const App = () => {

  const initialStates = {
    name:"テスト",
    price:1000
  }

  const [state, setState] = useState(initialStates);
  const {name , price} = state;

  return (
    <>
    <div>
      <p>現在の{name}は、{price}円です!</p>
      <button onClick={() => setState({...state, price: price +1})}>+1</button>
      <button onClick={() => setState({...state, price: price -1})}>-1</button>
      <button onClick={() => setState(initialStates)}>reset</button>
    </div>
    <div>
      <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </div>
    </>
  );
}

export default App;
