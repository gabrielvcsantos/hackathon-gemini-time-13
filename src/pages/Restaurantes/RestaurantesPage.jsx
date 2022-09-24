import { 
    Container,
    Typography,
    CircularProgress,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getRestaurantes } from "../../services/restaurantes.service";
import "./style.css";

function RestaurantesPage() {
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState([]);
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantes().then((response) => {
      setNomeCategoria(response.categoria)
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    })
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
          {restaurante.baratinho}
        </div>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No preço <span>(</span>$ $ $ <span> $ $)</span>
        </Typography>
      </div>      
      {restaurantesNoPreco?.map(restaurante => (
        <div key={restaurante.id}>
          {restaurante.no_preco}
        </div>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena <span>(</span>$ $ $ $ $ <span>)</span>
        </Typography>
      </div>      
      {restaurantesCaro?.map(restaurante => (
        <div key={restaurante.id}>
          {restaurante.caro}
        </div>
      ))}            
    </Container>
  )
}

export default RestaurantesPage;