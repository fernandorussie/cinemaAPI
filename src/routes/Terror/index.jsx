import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from "react-modal"
import { toast } from'react-toastify'
import api from '../../service/api'

import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

Modal.setAppElement('#root');
function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
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
    if(window.confirm('Você realmente quer excluir o filme?')){
      await api.delete(`/terror/${id}`)
      .then((sucesso) => {
        // navigate("/", {replace: true})
        console.log(sucesso)
        toast.success('Item excluido com sucesso!');
      })
      .catch((error) => {
        console.log(error)
      })
  
      let filtro = item.filter((item) => {
        return (item.id !== id)
      })
      setItem(filtro);
      setIsOpen(false)
      window.location.reload();
    }
  }

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
      setIsOpen(false);
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
      <h1>Filmes de Terror:</h1>
      <div className='box-cards'>
        {item.length === 0 ?
          <div>
            <h2>Esta categoria não possiu nenhum filme no momento, clique <Link to={`/adiciona`}>Aqui</Link> para adicionar um novo filme!</h2>
          </div>
          : (
            item.map((item) => (
              <div key={item.id} className='property-card'>
                <img src={item.poster} alt="" />
                <div className='property-description'>
                  <h5>{item.nome}</h5>
                  <div className='description'>{item.descricao}</div>
                  <div className='box-config'>
                    <Link className='btn-link' to={`/terror/${item.id}`}>
                      Saiba mais
                    </Link>
                    
                    <button 
                    className='btn-delete' 
                    // onClick={openModal}
                    onClick={() => deleteElement(item.id)}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  overlayClassName="modal-overlay"
                  className="modal-content"
                  key={item.id}
                >
                  <h1>Você realmente quer excluir {item.nome} da sua lista de filmes?{item.id}</h1>
                  <button className='btn-delete' onClick={() => deleteElement(item.id)}>Sim</button>
                  <button className='btn-delete' onClick={closeModal}>Não</button>
                </Modal>
              </div>
            ))
          )
        }
        
      </div>
    </div>
  )
}

export default App
