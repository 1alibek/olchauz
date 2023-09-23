import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { HamburgerIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
import header from "../assets/images/header.png";
import logo from "../assets/images/logo.png";
import shop1 from "../assets/icon/shop1.png";
import shop2 from "../assets/icon/shop2.png";
import shop3 from "../assets/icon/shop3.png";
import shop4 from "../assets/icon/shop4.png";
import Carousel from "./Carousel";

function Header() {
  const [state, setState] = useState([]);
  const [sliceCount, setSliceCount] = useState(12);
  const [inputData, setInputData] = useState("");

  async function getSearch() {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products/search?q=${inputData
          .trim()
          .toLowerCase()}`
      );
      console.log(res.data);
      return setState(res.data.products);
    } catch (e) {
      console.log(e.target.value);
    }
  }
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((result) => {
      setState(result.data.products);
    });
  }, []);
  const search = () => {
    getSearch();
  };
  return (
    <Box>
      <Container maxW={"1440px"}>
        <Box>
          <Image src={header} />
        </Box>
        <Box
          background={"red"}
          width={"100%"}
          height={"60px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={"10px"}
        >
          <Box display={"flex"} gap={5}>
            <Button background="white" color={"red"}>
              0% Рассрочка
            </Button>
            <Button colorScheme="white" border={"1px solid white"}>
              Скидки{" "}
            </Button>
            <Button background="white" color={"red"}>
              {/* <Link to={'/About'}>Розыгрыши</Link> */}
              <NavLink to={"/About"}>Розыгрыши</NavLink>
            </Button>
            <Button colorScheme="white">Карта сайта</Button>
          </Box>
          <Box display={"flex"} gap={"30px"}>
            <Text color={"white"} fontSize={"xl"}>
              +998 (71) 202 202 1
            </Text>
            <Button colorScheme="white" border={"1px solid white"}>
              Продавайте на olcha{" "}
            </Button>
            <Box display={"flex"} gap={"10px"}>
              <Text color={"white"} fontSize={"xl"}>
                O'zb
              </Text>
              <Text color={"white"} fontSize={"xl"}>
                Eng
              </Text>
              <Text color={"white"} fontSize={"xl"}>
                Rus
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          m={"30px 0px"}
        >
          <Image src={logo} />
          <Box>
            <Button
              display={"flex"}
              alignItems={"center"}
              gap={"5px"}
              background={"white"}
              border={"1px solid black"}
            >
              <HamburgerIcon />
              Каталог
            </Button>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Input
              onChange={(e) => setInputData(e.target.value)}
              placeholder="Поиск по каталогу"
              w={"570px"}
              background={""}
            />
            <Button onClick={search} w={"60px"} background={"red"}>
              <SearchIcon color={"white"} />
            </Button>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"20px"}>
            <Box w={"100px"} h={"50px"} overflow={""}>
              <Image
                width={"60px"}
                height={"30px"}
                src={shop1}
                paddingLeft={6}
              />
              <Text>Сравнение</Text>
            </Box>
            <Link>
              <Box
                w={"100px"}
                h={"50px"}
                position={"relative"}
                top={5}
                left={5}
              >
                <Text
                  background={"red"}
                  w={"25px"}
                  height={"25px"}
                  borderRadius={"150px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  position={"absolute"}
                  top={"-10px"}
                  left={"15px"}
                >
                  0
                </Text>
                <StarIcon w={"30px"} height={"30px"} />
              </Box>
            </Link>
            <Box w={"100px"} h={"50px"} overflow={""}>
              <Image
                width={"60px"}
                height={"30px"}
                src={shop3}
                paddingLeft={1}
              />
              <Text>Корзина</Text>
            </Box>
            <Box w={"100px"} h={"50px"} overflow={""}>
              <Image
                width={"60px"}
                height={"30px"}
                src={shop4}
                paddingLeft={1}
              />
              <Text>Войти</Text>
            </Box>
          </Box>
        </Box>
        <Carousel />
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={5}
          justifyContent={"center"}
        >
          {!state.length ? (
            <Text>bunday tovar mavjud emas</Text>
          ) : (
            state.map((post) => {
              return (
                <Link to={`/About/${post.id}`} key={post.id}>
                  <Card w={200} height={270} mb={5} display={"flex"} gap={10}>
                    <CardBody>
                      <Image w={200} src={post.images[0]} />
                      <Text>{post.title}</Text>
                    </CardBody>
                  </Card>
                </Link>
              );
            })
          )}
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          {state.length > 10 && (
            <Button onClick={() => setSliceCount(sliceCount + 5)}>
              Yana ko'rsatish
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
