
import {
    MdThumbUp,
    MdBusiness,
    MdCardMembership,
    MdDescription,
    MdSchool,
    MdPersonAdd,
    MdPeople,
    MdPersonSearch,
    MdShoppingCart,
    MdEvent,
    MdGroup,
    MdLocalOffer,
    MdSpeakerNotes,
    MdCallToAction,
  } from "react-icons/md";
  import {  Container, Spacer } from '@chakra-ui/react'
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
  ListIcon,
  ListItem,
  Wrap
} from "@chakra-ui/react";
import { Avatar, IconButton } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import React from "react";
  const ListItemWithHover = ({ children }) => (
    <ListItem
      _hover={{ bg: "gray.100" }}
      p={2}
      display="flex"
      alignItems="center"
      cursor="pointer"
    >
      {children}
    </ListItem>
  );

const Listings = () => {
  return (
    <div className="Listings">
      <div className="top" style={{ display: "flex" }}>
        <Flex minWidth='max-content' alignItems='center' gap='200%'>
  <Box p='2'>
    <Heading size='md'>Listings</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2' style={{marginTop:'10px',marginRight:"-10px"}}>
    <Button variant={"outline"} colorScheme='teal'>Create</Button>
    <Button variant={"outline"} colorScheme='teal'>Manage</Button>
  </ButtonGroup>
</Flex>
      </div>
      <div className="bottom" style={{display:'flex'}}>
        <div className="left" style={{flexBasis:'1'}}>
          <form className="search-form">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <List spacing={2}>
            <ListItemWithHover>
              <ListIcon as={MdThumbUp} color="green.500" />
              All Listings
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdBusiness} color="green.500" />
              Contributors/Collaborators Wanted
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdCardMembership} color="green.500" />
              Conference CFP
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdDescription} color="green.500" />
              Available for Hire
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdSchool} color="green.500" />
              Education/Courses
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdPersonAdd} color="green.500" />
              Job Listings
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdPeople} color="green.500" />
              Offering Mentorship
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdPersonSearch} color="green.500" />
              Seeking a Mentor
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdShoppingCart} color="green.500" />
              Stuff for Sale
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdEvent} color="green.500" />
              Upcoming Events
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdGroup} color="green.500" />
              Miscellaneous
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdLocalOffer} color="green.500" />
              Products/Tools
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdSpeakerNotes} color="green.500" />
              Conference Talks
            </ListItemWithHover>
            <ListItemWithHover>
              <ListIcon as={MdCallToAction} color="green.500" />
              Announcements
            </ListItemWithHover>
          </List>
        </div>
        <div className="right" style={{flexBasis:'3'}}>
            
        <Container maxW="container.xl">
  <Wrap spacing={8}>
    <Box flexBasis={['100%', '50%', '33.33%']}>
      <Card>
        <CardHeader>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box ml="3">
                <Text fontWeight="bold">Dan Abrahmov</Text>
                <Text fontSize="sm">May 28, 2021</Text>
              </Box>
            </Flex>
            <IconButton icon={<BsThreeDotsVertical />} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper,
            et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....
          </Text>
        </CardBody>
        <CardFooter>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <IconButton icon={<BiLike />} />
              <Text>2.7K Likes</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiChat />} />
              <Text>2.7K Comments</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiShare />} />
              <Text>2.7K Shares</Text>
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
    <Box flexBasis={['100%', '50%', '33.33%']}>
      <Card>
        <CardHeader>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box ml="3">
                <Text fontWeight="bold">Dan Abrahmov</Text>
                <Text fontSize="sm">May 28, 2021</Text>
              </Box>
            </Flex>
            <IconButton icon={<BsThreeDotsVertical />} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper,
            et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....  
          </Text>
        </CardBody>
        <CardFooter>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <IconButton icon={<BiLike />} />
              <Text>2.7K Likes</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiChat />} />
              <Text>2.7K Comments</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiShare />} />
              <Text>2.7K Shares</Text>
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
    <Box flexBasis={['100%', '50%', '33.33%']}>
      <Card>
        <CardHeader>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box ml="3">
                <Text fontWeight="bold">Dan Abrahmov</Text>
                <Text fontSize="sm">May 28, 2021</Text>
              </Box>
            </Flex>
            <IconButton icon={<BsThreeDotsVertical />} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper,
            et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....
          </Text>
        </CardBody>
        <CardFooter>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <IconButton icon={<BiLike />} />
              <Text>2.7K Likes</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiChat />} />
              <Text>2.7K Comments</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiShare />} />
              <Text>2.7K Shares</Text>
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
    <Box flexBasis={['100%', '50%', '33.33%']}>
      <Card>
        <CardHeader>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box ml="3">
                <Text fontWeight="bold">Dan Abrahmov</Text>
                <Text fontSize="sm">May 28, 2021</Text>
              </Box>
            </Flex>
            <IconButton icon={<BsThreeDotsVertical />} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper,
            et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....
          </Text>
        </CardBody>
        <CardFooter>
          <Flex alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <IconButton icon={<BiLike />} />
              <Text>2.7K Likes</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiChat />} />
              <Text>2.7K Comments</Text>
            </Flex>
            <Flex alignItems="center">
              <IconButton icon={<BiShare />} />
              <Text>2.7K Shares</Text>
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
    </Box>
    {/* Add more Box components for additional cards */}
  </Wrap>
</Container>



        </div>
      </div>
    </div>
  );
};

export default Listings;
