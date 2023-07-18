import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.scss";
import { List, ListItem, ListIcon, background } from "@chakra-ui/react";
import {
  MdBook,
  MdViewList,
  MdHeadset,
  MdOndemandVideo,
  MdLocalOffer,
  MdHelp,
  MdShoppingCart,
  MdStars,
  MdInfo,
  MdMail,
  MdMenuBook,
  MdCompareArrows,
  MdAssignment,
  MdGavel,
  MdLock,
  MdPeople,
} from "react-icons/md";
import { Grid, GridItem } from '@chakra-ui/react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";
import {
  Flex,
  Box,
  small,
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Divider,
  ButtonGroup,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { Avatar, IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
const Podcasts = () => {
  return (
    <div className="podcast" >
      <div className="top">
        <Flex justifyContent={"space-between"}>
          <Box p="2" style={{ marginTop: "10px" }}>
            <Heading
              size="lg"
              style={{
                fontWeight: "700",
                fontFamily:
                  'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "30px",
                lineHeight: "45px",
                color: "#090909",
                padding: "5px 10px",
              }}
            >
              Podcasts
            </Heading>
          </Box>

          <ButtonGroup
            gap="2"
            style={{ marginTop: "10px", marginRight: "10px" }}
          >
            <Button variant={"outline"} colorScheme="teal">
              Create
            </Button>
            <Button variant={"outline"} colorScheme="teal">
              Manage
            </Button>
          </ButtonGroup>
        </Flex>
      </div>

      {/* latest episode */}
      <Divider my="3" />
      <div className="latest" style={{margin:'10px'}}>
        <div style={{ marginLeft: "10px" ,width:'15%'}}>
          <Heading
            size="lg"
            style={{
              fontWeight: "700",
              fontFamily:
                'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              fontSize: "30px",
              lineHeight: "45px",
              color: "#090909",
              padding: "5px 10px",
            }}
          >
            Latest Episodes
          </Heading>
        </div>
        <div style={{ display: "flex" }}>
          <Card
            maxW="sm"
            style={{ margin: "5px", borderRadius: "10px", padding: "10px" }}
          >
            <CardBody style={{ justifyContent: "center" }}>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---YpFRjbP--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/956/39deafb2-dad0-42a3-87bc-a6c401beb025.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto" // Center the image horizontally
                my="3" // Add vertical margin
                _hover={{ opacity: "0.8", cursor: "pointer" }} // Apply hover effect
              />
            </CardBody>
            <CardFooter>
              <Box
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: "blue.600", textDecoration: "underline" }} // Apply hover effect
              >
                Increasing Average Order Value on Shopify
              </Box>
              <Text fontSize="sm">Building an Indie Business, Jul 17</Text>
            </CardFooter>
            <Divider my="3" /> // Add margin around the divider
          </Card>
          <Card
            maxW="sm"
            style={{ margin: "5px", borderRadius: "10px", padding: "10px" }}
          >
            <CardBody style={{ justifyContent: "center" }}>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---YpFRjbP--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/956/39deafb2-dad0-42a3-87bc-a6c401beb025.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto" // Center the image horizontally
                my="3" // Add vertical margin
                _hover={{ opacity: "0.8", cursor: "pointer" }} // Apply hover effect
              />
            </CardBody>
            <CardFooter>
              <Box
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: "blue.600", textDecoration: "underline" }} // Apply hover effect
              >
                Increasing Average Order Value on Shopify
              </Box>
              <Text fontSize="sm">Building an Indie Business, Jul 17</Text>
            </CardFooter>
            <Divider my="3" /> // Add margin around the divider
          </Card>
          <Card
            maxW="sm"
            style={{ margin: "5px", borderRadius: "10px", padding: "10px" }}
          >
            <CardBody style={{ justifyContent: "center" }}>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---YpFRjbP--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/956/39deafb2-dad0-42a3-87bc-a6c401beb025.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto" // Center the image horizontally
                my="3" // Add vertical margin
                _hover={{ opacity: "0.8", cursor: "pointer" }} // Apply hover effect
              />
            </CardBody>
            <CardFooter>
              <Box
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: "blue.600", textDecoration: "underline" }} // Apply hover effect
              >
                Increasing Average Order Value on Shopify
              </Box>
              <Text fontSize="sm">Building an Indie Business, Jul 17</Text>
            </CardFooter>
            <Divider my="3" /> // Add margin around the divider
          </Card>
          <Card
            maxW="sm"
            style={{ margin: "5px", borderRadius: "10px", padding: "10px" }}
          >
            <CardBody style={{ justifyContent: "center" }}>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---YpFRjbP--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/956/39deafb2-dad0-42a3-87bc-a6c401beb025.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto" // Center the image horizontally
                my="3" // Add vertical margin
                _hover={{ opacity: "0.8", cursor: "pointer" }} // Apply hover effect
              />
            </CardBody>
            <CardFooter>
              <Box
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: "blue.600", textDecoration: "underline" }} // Apply hover effect
              >
                Increasing Average Order Value on Shopify
              </Box>
              <Text fontSize="sm">Building an Indie Business, Jul 17</Text>
            </CardFooter>
            <Divider my="3" /> // Add margin around the divider
          </Card>
          <Card
            maxW="sm"
            style={{ margin: "5px", borderRadius: "10px", padding: "10px" }}
          >
            <CardBody style={{ justifyContent: "center" }}>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---YpFRjbP--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/956/39deafb2-dad0-42a3-87bc-a6c401beb025.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto" // Center the image horizontally
                my="3" // Add vertical margin
                _hover={{ opacity: "0.8", cursor: "pointer" }} // Apply hover effect
              />
            </CardBody>
            <CardFooter>
              <Box
                as="a"
                href="#"
                color="blue.500"
                fontWeight="bold"
                _hover={{ color: "blue.600", textDecoration: "underline" }} // Apply hover effect
              >
                Increasing Average Order Value on Shopify
              </Box>
              <Text fontSize="sm">Building an Indie Business, Jul 17</Text>
            </CardFooter>
            <Divider my="3" /> // Add margin around the divider
          </Card>
        </div>
      </div>

      {/* Featured shows */}
      <div className="featured show" style={{ margin: '10px' ,marginLeft:'90px' }}>
  <div style={{ marginLeft: '10px', width: '15%' }}>
    <Heading
      size="lg"
      style={{
        fontWeight: '700',
        fontFamily:
          'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: '30px',
        lineHeight: '45px',
        color: '#090909',
        padding: '5px 10px',
      }}
    >
      Featured Shows
    </Heading>
  </div>
  <div style={{ display: 'flex' }}>
    <Card
       maxW="lg"
      style={{ margin: '5px', borderRadius: '10px', padding: '10px' }}
    >
      <CardBody style={{ justifyContent: 'center' }}>
        <Image
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--HYBAYhCw--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/2/fe7d9bad-8f54-4a39-8e68-4608f5029b1f.png"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          mx="auto" // Center the image horizontally
          my="3" // Add vertical margin
          _hover={{ opacity: '0.8', cursor: 'pointer' }} // Apply hover effect
        />
        <Text>
          <b>CodeNewbie</b>
        </Text>
      </CardBody>
    </Card>
    <Card
      maxW="lg"
      style={{ margin: '5px', borderRadius: '10px', padding: '10px' }}
    >
      <CardBody style={{ justifyContent: 'center' }}>
        <Image
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--MQM3T79S--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/235/08786d8b-7ef4-4c00-bc40-f4b3cbca5834.jpg"
          borderRadius="lg"
          mx="auto" // Center the image horizontally
          my="3" // Add vertical margin
          _hover={{ opacity: '0.8', cursor: 'pointer' }} // Apply hover effect
        />
        <Text>
          <b>CodeNewbie</b>
        </Text>
      </CardBody>
    </Card>
    <Card
      maxW="lg"
      style={{ margin: '5px', borderRadius: '10px', padding: '10px' }}
    >
      <CardBody style={{ justifyContent: 'center' }}>
        <Image
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--g2OuwHVW--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_500/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/346/5b0bd095-4a8c-4449-a43d-9e9b154b9d09.png"
          borderRadius="lg"
          mx="auto" // Center the image horizontally
          my="3" // Add vertical margin
          _hover={{ opacity: '0.8', cursor: 'pointer' }} // Apply hover effect
        />
        <Text>
          <b>CodeNewbie</b>
        </Text>
      </CardBody>
    </Card>
  </div>
</div>

{/* browse */}

<div className="featured show" style={{ margin: '10px' ,marginLeft:'90px' }}>
  <div style={{ marginLeft: '10px', width: '15%' }}>
    <Heading
      size="lg"
      style={{
        fontWeight: '700',
        fontFamily:
          'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: '30px',
        lineHeight: '45px',
        color: '#090909',
        padding: '5px 10px',
      }}
    >
      Featured Shows
    </Heading>
  </div>
  <div style={{ display: 'flex' }}>
  <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem> 
        <Box
          w="100%"
          h="100%"
          bg="blue.500"
          borderRadius="lg"
          display="flex"
          gap={6}
          p={4}
          _hover={{ cursor: 'pointer', bg: 'blue.600' }}
          onClick={() => {
            // Handle click event
          }}
        >
          <Image
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--1Ex1NTeB--/c_fill,f_auto,fl_progressive,h_100,q_auto,w_100/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/590/8c0be5d8-850d-4646-99e4-805cb458b0d1.jpg"
            alt="Profile Icon"
            boxSize="50px"
            borderRadius="full"
          />
          <Text mt={4} color="white">
          A Cup of Code Podcast
          </Text>
        </Box>
      </GridItem>
      {/* Add more GridItems with the same structure as above */}
    </Grid>
  </div>
</div>




    </div>
  );
};

export default Podcasts;
