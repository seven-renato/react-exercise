import {useState} from "react"

const App = () => {
  const [name,setName] = useState("")
  const [lastName,setlastName] = useState("")
  const [age,setAge] = useState("")
  const [ageFim,setAgeFim] = useState("--")

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handlelastNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setlastName(event.target.value)        
  }

  function handleAgeInput (e: React.ChangeEvent<HTMLInputElement>) {
    setAge(e.target.value)
    setAgeFim(e.target.value)
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleNameInput}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handlelastNameInput}/>
      </div>

      <div>
        Idade:
        <input type="text" value={age} onChange={handleAgeInput}/>
      </div>

      <hr/>

      Olá {`${name} ${lastName}`}, tudo bem?<br/>
      Você tem {ageFim} anos.
    </div>
  );
}

export default App;