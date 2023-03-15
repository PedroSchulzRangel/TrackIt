import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cadastro" element={<Register/>}/>
    <Route path="/habitos" element={<Habits/>}/>
    <Route path="/hoje" element={<Today/>}/>
    <Route path="/historico" element={<Historic/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
