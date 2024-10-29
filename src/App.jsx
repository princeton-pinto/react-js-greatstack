import { useState } from 'react'
import { FirstComponent } from './components/FirstComponent';

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
      <FirstComponent data={x} fn={setX} />
    </div>
  )
}

export default App