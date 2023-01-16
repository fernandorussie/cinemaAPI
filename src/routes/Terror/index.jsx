import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {ToastContainer, toast} from'react-toastify'
import api from '../../service/api'

import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

function App() {
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    function getApi(){
      api.get('/terror')
      .then((response) => {
        console.log(response.data)
        const data = response.data
        setLoad(false)
        setItem(data)
      })
      .catch((error) => {
        console.log(`Sua requisição falhou! ${error}`)
      })
    }
    getApi()
  }, []);
 
  const deleteElement = async (id) => {
    await api.delete(`/terror/${id}`)
    .then((sucesso) => {
      // navigate("/", {replace: true})
      console.log(sucesso)
      toast.success('Item excluido com sucesso');
    })
    .catch((error) => {
      console.log(error)
    })

    let filtro = item.filter((item) => {
      return (item.id !== id)
    })
    setItem(filtro);
  }
  const editElement = async (id) => {
      await api.patch(`/terror/${id}`, {
        nome: 'Filme Terror'
      })
      .then((sucesso) => console.log(sucesso))
      window.location.reload();
  }
  if(load){
    return (
      <div className='container'>
        <h1>Carregando items...</h1>
      </div>
    )
  }
  return (
    <div className='container'>
      <ToastContainer></ToastContainer>
      <h1>Filmes de Terror:</h1>
      <div className='box-cards'>
        {item.length === 0 ?
          <div>
            <h2>Esta categoria não possiu nenhum filme no momento, clique <Link>Aqui</Link> para adicionar um novo filme!</h2>
          </div>
          : (
            item.map((item) => (
              <div key={item.id} className='property-card'>
                  <img src={item.poster} alt="" />
                  <div className='property-description'>
                    <Link to={`/terror/${item.id}`}>
                      <h5>{item.nome}</h5>
                    </Link>
                    <div className='description'>{item.descricao}</div>
                    <div className='box-config'>
                      <Link to={`/terror/${item.id}`}>
                        <button className='btn-edit'>Saiba mais</button>
                      </Link>
                      
                      <button className='btn-delete' onClick={() => deleteElement(item.id)}>Excluir</button>
                      {/* <button className='btn-edit' onClick={() => editElement(item.id)}>Editar</button> */}
                    </div>
                  </div>
                
              </div>
            ))
          )
        }
        
      </div>
    </div>
  )
}

export default App
