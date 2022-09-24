import { 
    Container,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import "./style.css";
import CardRestauranteComponent from "../../components/CardRestauranteComponent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function RestaurantesPage(props) {
  const navigate = useNavigate();

  const [nomeCategoria, setNomeCategoria] = useState('');
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState([]);
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoria = props.id ?? 0;

    getRestaurantes(categoria)
    .then(response => {
      setNomeCategoria(response.categoria);

      Object.entries(response).map(categoriaDePreço => {

        const preço = categoriaDePreço[0];
        const restaurante = categoriaDePreço[1];

        switch (preço) {
          case "baratinho":
            setRestaurantesBaratinho(restaurante);
            break;

          case "no_preco":
            setRestaurantesNoPreco(restaurante);
            break;

          case "caro":
            setRestaurantesCaro(restaurante);
            break;

          default:
            break;
          }
      })
  }).finally(() => {
      setLoading(false);
    });
}, []);

  return (
    <Container class="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
        

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>
      {restaurantesBaratinho?.map(restaurante => (
        <div key={restaurante.id}>
          <Link to={`./${restaurante.id}/detalhes`}>
            <CardRestauranteComponent restaurante={restaurante} />
          </Link>
        </div>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No preço <span>(</span>$ $ $<span> $ $)</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map(restaurante => (
        <div key={restaurante.id}>
        <Link to={`./${restaurante.id}/detalhes`}>
            <CardRestauranteComponent restaurante={restaurante} />
          </Link>
        </div>
      ))}

      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro <span>(</span>$ $ $ $ $<span>)</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <div key={restaurante.id}>
        <Link to={`./${restaurante.id}/detalhes`}>
            <CardRestauranteComponent restaurante={restaurante} />
          </Link>
        </div>
      ))}
    </Container>
  )
}

export default RestaurantesPage;