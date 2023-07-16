import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Listing.scss";
import {
  Flex,
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Avatar,
  IconButton

} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import {MdDelete} from "react-icons/md";

const ReadingList = () => {
  const books = [
    {
      id: 1,
      title: "Book 1 this the book 1",
      author: "Author 1",
      hastags: ["#fiction", "#fantasy"],
      createedAt: "2021-07-01T12:34:56.000Z",
    },
    {
      id: 2,
      title: "Book 2 this the book 2",
      author: "Author 2",
      hastags: ["#fiction", "#fantasy"],
      createedAt: "2021-07-01T12:34:56.000Z",
    },
    {
      id: 2,
      title: "Book 2 Book 1 this the book 1",
      author: "Author 2",
      hastags: ["#fiction", "#fantasy"],
      createedAt: "2021-07-01T12:34:56.000Z",
    },
    {
      id: 2,
      title: "Book 2 Book 1 this the book 1",
      author: "Author 2",
      hastags: ["#fiction", "#fantasy"],
      createedAt: "2021-07-01T12:34:56.000Z",
    },
    // Add more books as needed
  ];

  const hashtags = [
    "#fiction",
    "#fantasy",
    "#mystery",
    "#romance",
    "#thriller",
  ];

  const handleHashtagHover = (index) => {
    // Handle the hover event here
    console.log("Hovered hashtag:", hashtags[index]);
  };

  return (
    <div className="reading-list" style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Reading List</h1>
        <div className="hashtags">
          <h1>
            <b> HASTAGS </b>
          </h1>
          {hashtags.map((tag, index) => (
            <Text
              key={index}
              mb="2"
              fontSize="sm"
              color="gray.500"
              textDecoration="underline"
              cursor="pointer"
              _hover={{ backgroundColor: "gray.200" }}
              onMouseEnter={() => handleHashtagHover(index)}
              onMouseLeave={() => handleHashtagHover(index)}
            >
              {tag}
            </Text>
          ))}
        </div>
      </div>

      <Box flex="3" bg="white" p={4}>
  <Grid templateColumns="repeat(2, 1fr)" gap={6}>
    {books.map((book) => (
      <GridItem
        key={book.id}
        p={4}
        borderWidth="1px"
        borderRadius="md"
        _hover={{ bg: "gray.100" }}
        display="flex"
        alignItems="center"
        cursor="pointer"
        style={{ boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.1)" }}
      >
        <div className="Listing-profile-picture">
          <Flex style={{ gap: "5px" }}>
            <Link>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Link>
            <Link>
              <Heading size="md">{book.title}</Heading>
            </Link>
            <IconButton
              ml={2}
              icon={<MdDelete />}
              colorScheme="red"
              variant="ghost"
              _hover={{ color: "red.500" }}
              style={{position:'flex-end', marginLeft:'auto'}}
              // onClick={() => handleDelete(book.id)}
            />
          </Flex>

          <Flex>
            <Text>{book.author}</Text>

            {book.hastags.map((tag, index) => (
              <Text
                key={index}
                mb="2"
                fontSize="sm"
                color="gray.500"
                textDecoration="underline"
                cursor="pointer"
                _hover={{ backgroundColor: "gray.200" }}
                onMouseEnter={() => handleHashtagHover(index)}
                onMouseLeave={() => handleHashtagHover(index)}
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
              >
                <span> {tag}</span>
              </Text>
            ))}
            <Text>{book.createedAt}</Text>
            
          </Flex>
        </div>
      </GridItem>
    ))}
  </Grid>
</Box>

    </div>
  );
};

export default ReadingList;
