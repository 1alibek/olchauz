import { Container, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Dynamic() {
  const [item, setItem] = useState({});
  const params = useParams();
  async function getData() {
    try {
      axios
        .get(`https://dummyjson.com/products/${params.id}`)
        .then((result) => setItem(result.data));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData();
  }, [params]);
  return (
    <Container>
      <Heading>{item?.title}</Heading>
      {item?.images?.length && (
        <Image
          src={item?.images[0]}
          w={"70%"}
          height={"500px"}
          objectFit={"cover"}
        />
      )}

      <Text>{item?.description} </Text>
      <Heading>{item?.brand}</Heading>
      <Text as={"b"}>${item?.price}</Text>
    </Container>
  );
}

export default Dynamic;
