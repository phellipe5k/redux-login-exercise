import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return(
    <form>
      <label>
        Usuário <br></br>
        <input type="text" onChange={() => console.log('usuario')} />
      </label><br></br>
      <label>
        Email <br></br>
        <input type="email" onChange={() => console.log('email')} />
      </label><br></br>
     <label>
       Idade <br></br>
     <input type="text" onChange={() => console.log('idade')} />
     </label><br></br>
     <label>
       Senha <br></br>
       <input type="password" onChange={() => console.log('usuario')} />
     </label>
      <button type="submit" onClick={() => console.log('enviado')}>Enviar</button>
    </form>
  )
}

export default Register;