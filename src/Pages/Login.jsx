import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




function Login({ value, handleChange }) {
  return(
    <form>
      <label>Usuário<br></br>
      <input type="text" value={value} onChange={handleChange} />
      </label><br></br>
      <label>
        Senha<br></br>
      <input type="password" value={value} onChange={handleChange} />
      </label>
      <button type="button" onClick={handleChange}>Enviar</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  
} 

export default connect(mapStateToProps, mapDispatchToProps)(Login);