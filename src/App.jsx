import { useState } from 'react'


const App = () => {

    const [x, setX] = useState(0);

    const btnClick = () => {
      console.log("Clicked");
      setX(x+1);
    }

  return (
    <div>
      {x}
      <br />
      <button onClick={() => btnClick()}>Click Me</button>
    </div>
  )
}

export default App