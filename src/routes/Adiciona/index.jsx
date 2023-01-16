import { useNavigate } from "react-router-dom"
import { useState } from "react"

import api from "../../service/api"

import "./adiciona.css"

const Adiciona = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [ano, setAno] = useState();
  const [poster, setPoster] = useState();

  const addItem = async (e) => {
    e.preventDefault();

    const item = {nome, descricao, poster, ano, categoria_id: 1, userId: 1}
    await api.post('/terror', item)
    // console.log("Upload Imagem")
    // console.log(imagem)
    navigate("/", {replace: true})
  }

  return (
    <div className='new-post'>
      <h2>Inserir novo Lanche</h2>
      
      <form onSubmit={(e) => addItem(e)}>
        <div className='form-control'>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder='Digite o nome do filme' onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className='form-control'>
          <label htmlFor="">Descrição</label>
          <textarea name="" id="" placeholder='Digite a descrição do filme' onChange={(e) => setDescricao(e.target.value)}></textarea>
        </div>
        <div className='form-control'>
          <label htmlFor="">Ano de lançamento</label>
          <input type="text" placeholder='Digite o ano de lançamento do filme' onChange={(e) => setAno(Number(e.target.value))}/>
        </div>
        <div className='form-control'>
          <label htmlFor="">Poster(url)</label>
          <input type="text" placeholder='Coloque aqui o poster do filme' onChange={(e) => setPoster(e.target.value)}/>
        </div>
        <input type="submit" className='btn' value="Adicionar" />
      </form> 

    </div>
  )
}

export default Adiciona