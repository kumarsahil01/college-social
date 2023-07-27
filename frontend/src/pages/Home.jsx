import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.scss";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdBook, MdViewList, MdHeadset, MdOndemandVideo, MdLocalOffer, MdHelp, MdShoppingCart, MdStars, MdInfo, MdMail, MdMenuBook, MdCompareArrows,MdAssignment,MdGavel,MdLock, MdPeople} from "react-icons/md";
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
} from "@chakra-ui/react";
import { Avatar, IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

function Listing({ title, category }) {
  return (
    <div className="listing">
      <h3 className="listing-title">{title}</h3>
      <span className="listing-category">{category}</span>
    </div>
  );
}

const listingsData = [
  { title: "Tech Writer Available For Hire", category: "forhire" },
  { title: "GNU Telephony Releases", category: "collabs" },
  {
    title: "Free Workshop: Build Web Applications with React & Next.js",
    category: "events",
  },
  { title: "Frontend Technical Writer", category: "cfp" },
  {
    title:
      "Freelance Developer Ready for Duty. Node.js, Laravel, Vue.js, MySQL, MongoDB",
    category: "forhire",
  },
];

const Home = () => {
  return (
    <div className="home">
     <div className="left">
  <List spacing={3}>
    <Link to="/readinglist">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdBook} color="green.500" />
        Reading List
      </ListItem>
    </Link>
    <Link to="/listings">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdViewList} color="green.500" />
        Listings
      </ListItem>
    </Link>
    <Link to="/podcasts">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdHeadset} color="green.500" />
        Podcasts
      </ListItem>
    </Link>
    <Link to="/videos">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdOndemandVideo} color="green.500" />
        Videos
      </ListItem>
    </Link>
    <Link to="/tags">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdLocalOffer} color="green.500" />
        Tags
      </ListItem>
    </Link>
    <Link to="/community">
  <ListItem _hover={{ color: "green.500" }}>
    <ListIcon as={MdPeople} color="green.500" />
    Community
  </ListItem>
</Link>

    <Link to="/faq">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdHelp} color="green.500" />
        FAQ
      </ListItem>
    </Link>
    <Link to="/forem-shop">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdShoppingCart} color="green.500" />
        Forem Shop
      </ListItem>
    </Link>
    <Link to="/sponsors">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdStars} color="green.500" />
        Sponsors
      </ListItem>
    </Link>
    <Link to="/about">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdInfo} color="green.500" />
        About
      </ListItem>
    </Link>
    <Link to="/contact">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdMail} color="green.500" />
        Contact
      </ListItem>
    </Link>
    <Link to="/guides">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdMenuBook} color="green.500" />
        Guides
      </ListItem>
    </Link>
    <Link to="/software-comparisons">
      <ListItem _hover={{ color: "green.500" }}>
        <ListIcon as={MdCompareArrows} color="green.500" />
        Software Comparisons
      </ListItem>
    </Link>
  </List>
  {/* others  */}
  <Card maxW="sm">
  <CardBody>
    <List>
      <Link to="/privacy">
        <ListItem _hover={{ color: "green.500" }}>
          <ListIcon as={MdLock} color="green.500" />
          Privacy Policy
        </ListItem>
      </Link>
      <Link to="/code-of-conduct">
        <ListItem _hover={{ color: "green.500" }}>
          <ListIcon as={MdGavel} color="green.500" />
          Code of Conduct
        </ListItem>
      </Link>
      <Link to="/terms-of-use">
        <ListItem _hover={{ color: "green.500" }}>
          <ListIcon as={MdAssignment} color="green.500" />
          Terms of Use
        </ListItem>
      </Link>
    </List>
  </CardBody>
  <Flex style={{marginLeft:"2px"}}>
    <List display="flex" alignItems="center">
      <Link to="#" _hover={{ color: "green.500" }}>
        <ListItem _hover={{ color: "green.500" }} mx="1">
          <ListIcon as={FaTwitter} color="green.500" />
        </ListItem>
      </Link>
      <Link to="#" _hover={{ color: "green.500" }}>
        <ListItem _hover={{ color: "green.500" }} mx="1">
          <ListIcon as={FaFacebook} color="green.500" />
        </ListItem>
      </Link>
      <Link to="#" _hover={{ color: "green.500" }}>
        <ListItem _hover={{ color: "green.500" }} mx="1">
          <ListIcon as={FaInstagram} color="green.500" />
        </ListItem>
      </Link>
      <Link to="#" _hover={{ color: "green.500" }}>
        <ListItem _hover={{ color: "green.500" }} mx="1">
          <ListIcon as={FaLinkedin} color="green.500" />
        </ListItem>
      </Link>
    </List>
  </Flex>
  <Divider />
</Card>


</div>

      {/* this is mid */}
      <div className="mid">
        <Card maxW="lg">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1 " variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
            <Tag>Sample Tag</Tag>
            <Tag>Sample Tag</Tag>
            <Tag>Sample Tag</Tag>
          </CardFooter>
        </Card>
        <Card maxW="lg">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />

                <Box>
                  <Heading size="sm">Segun Adebayo</Heading>
                  <Text>Creator, Chakra UI</Text>
                </Box>
              </Flex>
              <IconButton
                variant="ghost"
                colorScheme="gray"
                aria-label="See menu"
                icon={<BsThreeDotsVertical />}
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
          />

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          >
            <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
              Like
            </Button>
            <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
              Comment
            </Button>
            <Button flex="1 " variant="ghost" leftIcon={<BiShare />}>
              Share
            </Button>
            <Tag>Sample Tag</Tag>
            <Tag>Sample Tag</Tag>
            <Tag>Sample Tag</Tag>
          </CardFooter>
        </Card>
      </div>

      {/* this is right  */}

      <div className="right">
        <Card maxW="sm">
          <CardBody>
            <Image
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--My8FaSJi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w0ntep7qf8r756vxqus0.jpg"
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
          <div style={{margin:"5px"}}>
          <Button variant="outline" colorScheme="blue" size="sm" style={{ width: "100px" }}>
            Create Listing
          </Button>
          </div>
         
          <Divider />
        </Card>
        {/* lisitngs */}

 <div >
 <Card maxW="sm">
          <CardHeader display={"flex"}>
            <Heading size="md">Listings...</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="2">
              <Box
                border="1px solid black"
                borderRadius="md"
                p="4"
                cursor="pointer"
                _hover={{ borderColor: "blue.500" }}
                onClick={() => {
                  // Handle the click event here
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="md">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Box
                border="1px solid black"
                borderRadius="md"
                p="4"
                cursor="pointer"
                _hover={{ borderColor: "blue.500" }}
                onClick={() => {
                  // Handle the click event here
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="md">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
 </div>
     
      </div>
    </div>
  );
};

export default Home;
