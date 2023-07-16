import React from "react";
import { Link } from "react-router-dom";
import "../components/profile.scss";
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
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Avatar, IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { MdEmail, MdDateRange, MdLink } from "react-icons/md";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
const Profile = () => {
  return (
    <div
      className="profile"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card align="center" style={{ width: "50%", margin: "10px" }}>
        <CardHeader>
          <Link style={{ position: "absolute", top: "-34px", left: "45%" }}>
            <Avatar
              name="Dan Abrahmov"
              size="lg"
              src="https://bit.ly/dan-abramov"
            />
          </Link>
          <Flex style={{justifyContent:'flex-end'}}>
           <Button variant={"outline"} colorScheme='green'>Update Profile</Button>
          </Flex>
          <Heading size="md" style={{ marginTop: "10px" }}>
            Sahil Kumar
          </Heading>
          <Text>
            Software developer. Lover of electronic music and games. 🎧 🎮
          </Text>
        </CardHeader>
        <CardBody>
    <List spacing={3}>
    <Flex direction="column">
  <ListItem
    display="flex"
    alignItems="center"
    _hover={{ color: "green.500" }}
  >
    <ListIcon as={MdEmail} color="green.500" />
    <a href="mailto:example@example.com">example@example.com</a>
  </ListItem>
  <ListItem
    display="flex"
    alignItems="center"
    _hover={{ color: "green.500" }}
  >
    <ListIcon as={MdDateRange} color="green.500" />
    Joined on January 1, 2022
  </ListItem>
  <ListItem
    display="flex"
    alignItems="center"
    _hover={{ color: "green.500" }}
  >
    <ListIcon as={MdLink} color="green.500" />
    <a
      href="https://github.com/example"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub Profile
    </a>
  </ListItem>
</Flex>
  
</List>
        </CardBody>
        <Divider />
        <CardFooter
          style={{
            gap: "10px",
            display: "flex",
            alignContent: "justify-content",
          }}
        >
          <div className="education">
            <b>Education</b>
            <p>
              Bachelor Degree in Computer Science and a Master's degree in Web
              Engineering
            </p>
          </div>

          <Divider orientation="vertical" />
          <div className="work">
            <b>Work</b>
            <p>Senior Front end at Meta(.es)</p>
          </div>
         
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
