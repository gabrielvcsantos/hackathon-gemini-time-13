import './CardRestauranteComponent.css';

export default function CardRestauranteComponent(props) {
    const restaurante = props.restaurante

    return (
        <div className="cardRestaurante">
            <img src={restaurante.imagem} alt="Imagem do Restaurante" />
            <h1>{restaurante.nome}</h1>
            <p>{restaurante.distancia}</p>
            <p>{restaurante.nota}</p>
            <p>{restaurante.tempo_medio} - {restaurante.valor_entrega}</p>
        </div>
    )
}