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
  const [duracao, setDuracao] = useState();

  const [genero, setGenero] = useState('');

  const addItem = async (e) => {
    e.preventDefault();

    const item = {nome, descricao, poster, duracao, ano, categoria_id: 1, userId: 1}
    await api.post(`/${genero}`, item)
    // console.log("Upload Imagem")
    // console.log(imagem)
    navigate("/terror", {replace: true})
  }

  return (
    <div className='new-post'>
      <h1>Inserir novo Filme</h1>
      
      <form className="form-content" onSubmit={(e) => addItem(e)}>
        <div className="input-box">
          <label className="title-label">Escolha o genero do filme</label>
          <select name="genero" onChange={(e) => setGenero(e.target.value)} required>
            <option value=''>Selecione</option>
            <option value="terror">Terror</option>
            <option value="comedia">Comedia</option>
            <option value="acao">Ação</option>
            <option value="drama">Drama</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <div className="input-box">
          <label className="title-label">Nome</label>
          <input type="text" className="input-text" placeholder="Digite o nome do filme" required onChange={(e) => setNome(e.target.value)}/>
        </div>
        
        <div className="input-box">
          <label className="title-label">Ano de Lançamento</label>
          <input type="date"className="input-text" placeholder="Digite o ano de lançamento" onChange={(e) => setAno(e.target.value)}/>
        </div>

        <div className="input-box">
          <label className="title-label">Duracao</label>
          <input type="text" className="input-text" placeholder="Digite a duracao do filme" onChange={(e) => setDuracao(e.target.value)}/>
        </div>

        <div className="input-box">
          <label className="title-label">Poster</label>
          <input type="text" className="input-text" placeholder="Digite a url do poster" onChange={(e) => setPoster(e.target.value)}/>
        </div>
        
        <div className="input-box">
        <label className="title-label">Sinopse</label>
          <textarea  className="input-text comment" placeholder="Digite a descrição do filme..." onChange={(e) => setDescricao(e.target.value)}></textarea>
        </div>
        <input type="submit" className="submit-button" value="Adicionar" />
      </form>
    </div>
  )
}

export default Adiciona