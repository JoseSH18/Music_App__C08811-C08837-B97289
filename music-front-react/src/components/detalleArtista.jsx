import { useEffect, useState } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api';

function DetalleArtista() {
const { id } = useParams();
const [artista, setArtista] = useState(null);

useEffect(() => {
const fetchArtista = async () => {
try {
const response = await axios.get(`${endpoint}/detalle-artista/${id}`);
console.log(response.data);
setArtista(response.data.artist);
} catch (error) {
console.error(error);
}
};
fetchArtista();
}, [id]);

if (!artista) {
return <div className="text-danger">Cargando <i className="fa-solid fa-spinner fa-spin-pulse"></i></div>;
}
const topTracksSorted = [...artista.top_tracks].sort((a, b) => b.popularity - a.popularity);
return (
<Container>
<Link to="#" className="float-left" onClick={() => window.history.back()}>&larr; Volver atrás</Link>
  <h1>Detalle de artista {artista.nombre}</h1>
<Row>
<Col md={4}>
<Image src={artista.imagen} alt={artista.nombre} thumbnail fluid width={150}/>
</Col>
<Col md={8}>
<h1>{artista.nombre}</h1>
<p>{artista.seguidores} seguidores</p>
<p>Géneros: {artista.generos.join(", ")}</p>
<p>{artista.descripcion}</p>
</Col>

</Row>
<Row>
<Col>
<h2>Albums: </h2>
<Carousel className="mb-2">
            {artista.albums.map((album) => (
              <Carousel.Item key={album.id}>
                <p>Nombre: {album.name}</p>
                <img src={album.images[0].url} alt={album.name} width={150} />
              </Carousel.Item>
            ))}
</Carousel>
</Col>
</Row>
<Row>
<Col>
<h2>Canciones top: </h2>
<Carousel className="mb-2">
            {topTracksSorted.map((track, index) => (
              <Carousel.Item key={track.id}>
                <p>Top: {index + 1}</p>
                <p>Nombre: {track.name}</p>
                <p>Popularidad: {track.popularity}</p>
                <p>Artistas: {track.artists.map((artist) => artist.name).join(", ")}</p>
                <p>Album: {track.album.name}</p>
                <img src={track.album.images[0].url} alt={track.name} width={150} />
              </Carousel.Item>
            ))}
</Carousel>
</Col>
</Row>
</Container>
);
}

export default DetalleArtista;