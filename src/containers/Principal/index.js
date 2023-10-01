import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from 'react-elastic-carousel'
import { Container1, Container2, ContainerBig,  Text, Text2, Text3, Image} from './styles'

export default function App() {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
        const fetchAllItems = async () => {
      try {
        const totalPages = 5; 
        const itemsPerPage = 80; 
        const allData = [];

        for (let page = 1; page <= totalPages; page++) {
          const response = await axios.get(
            `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsPerPage}`
          );
          allData.push(...response.data);
        }

        setAllItems(allData);
      } catch (error) {
        console.error("Aconteceu um erro!" + error);
      }
    };

    fetchAllItems();
  }, []);

  function retornaEBC(value) {
    if (value.ebc > 30 )
      return value;
  }
  var ebcMenorQue30 = allItems.filter(retornaEBC);

  function extrairAno(data) {
    if (data.indexOf('/') !== -1) {
        var partes = data.split('/');
        return partes[1];
    } else {
        return data;
    }
}

function imagemNull(value) {
  if (value.image_url === null){
    value.image_url = "https://static.vecteezy.com/ti/vetor-gratis/p1/7398246-garrafa-de-alcool-monocromatica-padrao-sem-costura-em-fundo-branco-garrafas-soju-geometricas-vetor.jpg"
    return value;
  } else {
    return value;
  }
}

var produtosValidos = allItems.filter(imagemNull);
produtosValidos.forEach(produto => {})


  const renderTable = () => {
    return ebcMenorQue30.map((product) => (
      <ContainerBig key={product.id}>
        <Container1>
          <Text>Name: {product.name}</Text>
          <Text>Year: {extrairAno(product.first_brewed)}</Text>
          <Text2>Description: {product.description}</Text2>
        </Container1>
        <Container2>
          <Text>Attenuation Level: {product.attenuation_level}</Text>
          {/* <Text>EBC: {product.ebc}</Text> */}
          <Text3>Picture:</Text3>
          <Image src={imagemNull(product.image_url)}  alt="picture beer"/>
        </Container2>
      </ContainerBig>
    ));
  };


  return (
    <Carousel
      itemsToShow={3}
      showArrows={true}
      disableArrowsOnEnd={false}
    >
      {renderTable()}
    </Carousel>
  );
}
