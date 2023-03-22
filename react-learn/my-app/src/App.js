import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `你的点击次数${count}`
  },[count])
  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>按钮{count}</button>
    </div>
  );
}

export default App;
