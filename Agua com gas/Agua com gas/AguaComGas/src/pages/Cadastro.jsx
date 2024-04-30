
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function cadastro() {
  const [novoUsuario, setNovoUsuario] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNovoUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8090/api/cadastro', novoUsuario);
      setNovoUsuario({
        username: '',
        password: '',
      });
    } catch (error) {
      console.error('Erro ao criar Usuário:', error);
    }
  };  
  

  const irPara= useNavigate();
  const handleClick = () => {
   
    irPara("/");
  };

  return (
    <div>
      <h1>Página de Cadastro</h1>  
      <form onSubmit={handleSubmit}>
      {/* Campo para a placa */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={novoUsuario.username}
        onChange={handleInputChange}
      />
      {/* Campo para a montadora */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={novoUsuario.password}
        onChange={handleInputChange}
      />
      {/* Botão de envio do formulário */}
      <button type="submit">Cadastrar Usuario</button>
    </form>
    
      <button onClick= {handleClick}>Voltar</button>
    </div>
  );
}

export default cadastro;
