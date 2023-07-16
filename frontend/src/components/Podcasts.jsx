import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.scss";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
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
    <div className="podcast" style={{justifyContent:'center'}}>
      <div className="top" style={{ display: "flex" }}>
        <Flex minWidth="max-content" alignItems="center" gap="200%">
          <Box p="2">
            <Heading size="md">Listings</Heading>
          </Box>
          <Spacer />
          <ButtonGroup
            gap="2"
            style={{ marginTop: "10px", marginRight: "-10px" }}
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
      <div className="latest" >
        <div>
          <Heading size="md" >
            Latest episodes
          </Heading>
        </div>
        <div style={{ display: "flex" }}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s---YpFRjbP--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/956/39deafb2-dad0-42a3-87bc-a6c401beb025.jpg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Text flexWrap='wrap'>Ep. 164 - User Stories e Product Ownership con Matteo Guidotto (Da Vinci Salute)</Text>
               
              </Stack>
            </CardBody>
            <div style={{ margin: "5px" }}>
             
            </div>

            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--lVhry1aO--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/736/580995f5-fa9b-4400-89d4-8836671214e0.png"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">refine DEV Hackathon (2)</Heading>
                <Text>RSVQuick: Online Invitation App Made Using Refine</Text>
                <Text color="blue.600" fontSize="2xl">
                  PRIZE:$450
                </Text>
              </Stack>
            </CardBody>
            <div style={{ margin: "5px" }}>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                style={{ width: "100px" }}
              >
                Create Listing
              </Button>
            </div>

            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--eJk7bjbg--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/46/ce547895-87b7-4443-a752-3ea70febb311.svg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">refine DEV Hackathon (2)</Heading>
                <Text>RSVQuick: Online Invitation App Made Using Refine</Text>
                <Text color="blue.600" fontSize="2xl">
                  PRIZE:$450
                </Text>
              </Stack>
            </CardBody>
            <div style={{ margin: "5px" }}>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                style={{ width: "100px" }}
              >
                Create Listing
              </Button>
            </div>

            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--CcVU-UpK--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/133/cc925b12-4a47-4892-a119-7f09c05dd8be.jpg"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">refine DEV Hackathon (2)</Heading>
                <Text>RSVQuick: Online Invitation App Made Using Refine</Text>
                <Text color="blue.600" fontSize="2xl">
                  PRIZE:$450
                </Text>
              </Stack>
            </CardBody>
            <div style={{ margin: "5px" }}>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                style={{ width: "100px" }}
              >
                Create Listing
              </Button>
            </div>

            <Divider />
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--nomJmJFF--/c_imagga_scale,f_auto,fl_progressive,h_240,q_auto,w_240/https://dev-to-uploads.s3.amazonaws.com/uploads/podcast/image/146/e320e48a-406b-457d-88be-034dc4a197df.jpeg"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">refine DEV Hackathon (2)</Heading>
                <Text>RSVQuick: Online Invitation App Made Using Refine</Text>
                <Text color="blue.600" fontSize="2xl">
                  PRIZE:$450
                </Text>
              </Stack>
            </CardBody>
            <div style={{ margin: "5px" }}>
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                style={{ width: "100px" }}
              >
                Create Listing
              </Button>
            </div>

            <Divider />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
