import {useState, useEffect} from 'react'; 
import { getDetalhes } from '../../services/detalhes.service';

export default function DetalhesRestaurantePage() {
    const [detalhes, setDetalhes] = useState(null);

    const restauranteId = 1;
    
    useEffect(() => {
        getDetalhes(restauranteId).then((response) => {
        setDetalhes(response);
        });
    }, []);
    
    return (
        <div>
        <h1>Detalhes do Restaurante</h1>
        <p>{detalhes}</p>
        </div>
    );

}