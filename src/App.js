import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [menu, setMenu] = useState(true);
  const [atribuirMenu, setAtribuirMenu] = useState("")

  function handleChangeMenu(){
    console.log(menu);
    setMenu(menu ? false : true);
    if(menu){
      setAtribuirMenu(<div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Registre-se</a></li>
        <li><a href="">Sobre nós</a></li>
        <li><a href="">Contato</a></li>
        <li><a href="">Galeria de fotos</a></li>
      </ul>
    </div>)
    }else{
      setAtribuirMenu(<></>)
    }
  }


  return (
    <div className="App">
      <button onClick={handleChangeMenu}>///</button>
      <div className="container-menu">{atribuirMenu}</div>
    </div>
  );
}

export default App;
