import { Container } from '@material-ui/core';
import './CardRestauranteComponent.css';

export default function CardRestauranteComponent(props) {
    const restaurante = props.restaurante

    return (
        <div className="cardRestaurante">
            <img src={restaurante.imagem} alt="Imagem do Restaurante" />
            <div className='dados'>
                <h1 className='name'>{restaurante.nome}</h1>
                <p className='distance'>{restaurante.distancia}</p>
                <p className='grade' >{restaurante.nota}</p>
                <p className='time'>{restaurante.tempo_medio} - {restaurante.valor_entrega}</p>
            </div>

        </div>
    )
}