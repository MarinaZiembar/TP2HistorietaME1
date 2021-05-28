import React, {useState} from 'react';
import Beginning from './pages/Beginning';
import Scene1 from './pages/Scene1';
import Final1 from './pages/Final1';
import Final2 from './pages/Final2';
import './App.css';


function App() {

  const [beginning, setBeginning] = useState(true);
  const [scene1, setScene1] = useState(false);
  const [final1, setFinal1] = useState(false);
  const [final2, setFinal2] = useState(false);

  return (
    <div className="App">
      <Beginning 
        show={beginning} 
        onHide={() => {setBeginning(false); setScene1(true)}}
      />
      <Scene1 
        show={scene1} 
        onFinal1={() => {setScene1(false); setFinal1(true)}}
        onFinal2={() => {setScene1(false); setFinal2(true)}}
      />
      <Final1 
        show={final1} 
        onHide={() => {setFinal1(false); setBeginning(true)}}
      />
      <Final2 
        show={final2} 
        onHide={() => {setFinal2(false); setBeginning(true)}}
      />
    </div>
  );
}

export default App;
