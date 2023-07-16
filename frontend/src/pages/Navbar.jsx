import React from "react";
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
  Heading,
  Text,
  Image,
  Button,
  Stack,
  Divider,
  ButtonGroup,
  StackDivider,
} from "@chakra-ui/react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import "../pages/Navbar.scss";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Box
          cursor="pointer"
          onClick={() => {
            /* Handle the click event here */
          }}
        >
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="Dan Abramov"
          />
        </Box>
      </div>
      <div className="navbar-right">
        <form className="search-form">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="submit" className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </form>

        <Button variant="outline" colorScheme="blue">
          Register
        </Button>
        <Button variant="outline" colorScheme="blue">
          Login
        </Button>
        <Wrap>
          <WrapItem>
            <Box
              cursor="pointer"
              onClick={() => {
                /* Handle the click event here */
              }}
            >
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </Box>
          </WrapItem>
        </Wrap>
      </div>
    </nav>
  );
};

export default Navbar;
