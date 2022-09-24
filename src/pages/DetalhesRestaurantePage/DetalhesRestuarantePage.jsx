import {useState, useEffect} from 'react'; 
import { getDetalhe } from '../../services/restaurantes.service';

export default function DetalhesRestaurantePage(props) { 
    const restauranteId = 1;
    const [detalhe, setDetalhe] = useState(props.id);
    
    useEffect(() => {
        getDetalhe(restauranteId).then((response) => {
        setDetalhe(response);
        });
    }, []);
    
    return (
        <div>
        <h1>Detalhes do Restaurante</h1>
        </div>
    );

}