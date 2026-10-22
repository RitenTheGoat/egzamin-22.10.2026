
import './App.css';
import { useState } from "react";

import { Button, Form } from "react-bootstrap";

function App() {
  const [adres, setAdres] = useState("")
  const [login, setLogin] = useState("")
  const [haslo, setHaslo] = useState("")
  const [check, setCheck] = useState(true)

    const [zapisaneadres, setZapisaneAdres] = useState("")
  const [zapisanelogin, setZapisaneLogin] = useState("")
  const [zapisanehaslo, setZapisaneHaslo] = useState("")


function zminen(){
  if(check === true){
    setCheck(false)
    setHaslo("")
    return
  }
  
  if(check === false){
    setCheck(true)
        setHaslo("")
    return  
  }
}
/*
nazwa funkcji: zapisz
opis funkcji: funkcja zapisuje dane z inputów do stanów stringów które wyświetlają się na stronie po kliknięciu przycisku
parametry: brak
zwracany typ i opis: brak
autor: 07242003475
*/
function zapisz(){
  setZapisaneAdres(adres)
  setZapisaneLogin(login)
  setZapisaneHaslo(haslo)

}

  return (
    <div className="App" style={{textAlign: "left"}}>
  <h1>Menedżer haseł - wykonał 07242003475</h1>
  <Form>
    <Form.Label>Adres WWW:</Form.Label>
    <Form.Control
    type='text'
    value={adres}
    placeholder='adres strony WWW'
    onChange={e=> setAdres(e.target.value)}
    />
    <Form.Label>Login:</Form.Label>
    <Form.Control
    type='text'
    value={login}
    placeholder='Twój login'
    onChange={e=> setLogin(e.target.value)}
    />
<Form.Check
  type="checkbox"
  label="Wygeneruj hasło"
  checked={check}
  onChange={zminen}

/>
   
   
    <Form.Label>Hasło:</Form.Label>
     {check ? (
       <Form.Control
    type='password'
    value={haslo}
    disabled
    onChange={e=> setHaslo(e.target.value)}
    />
    ) : (
       <Form.Control
    type='password'
    value={haslo}
    onChange={e=> setHaslo(e.target.value)}
    />
    )

    }
    <Button  style={{backgroundColor: "blue"}} onClick={zapisz}>Zapisz</Button>
   
  </Form>


  <p style={{color: "blue", padding: "0.5rem"} }>
    Adres:  {zapisaneadres}
  </p>
  <p>
   Login:  {zapisanelogin}
  </p>

  {check ? (
      <p>
    Hasło automatycznie generowane
  </p>
    ) : (
      <p>
    Hasło: {zapisanehaslo}
  </p>
    )
}



    </div>
  
  );
}

export default App;
