import { useState } from 'react';
import './App.css'
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [mbtnt, setMbtnt] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      setMbtnt('Enable Light Mode');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = '#443f3f';
    }else{
      setMode('light');
      setMbtnt('Enable Dark Mode');  
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
{/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
{/*<Navbar/>*/}

<Navbar title="TextUtils" mode={mode} mbtnt={mbtnt} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
{/*<About/>*/}
</div>

    </>
  )
}

export default App
