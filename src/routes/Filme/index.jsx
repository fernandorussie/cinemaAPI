import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from "../../service/api"

function Filme() {
    const navigate = useNavigate();
    const { id } = useParams();


    const [item, setItem] = useState({});

    useEffect(() => {
        async function getApi() {
            await api.get(`/terror/${id}`)
            .then((response) => {
                setItem(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
                navigate("/", {replace: true})
                return
            })
        }

        getApi();
        
    }, [ id])
      
    return ( 
        <div>
            <h1>Novo Filme:</h1>
            
            <div>
                <p><span>Sanduiche:</span> {item.nome}</p>
                <p><span>Ingredientes:</span> {item.descricao}</p>
                <p><span>Preço:</span> {item.ano}</p>
                <img src={item.poster} alt="" />
            </div>
        </div>
     );
}

export default Filme;