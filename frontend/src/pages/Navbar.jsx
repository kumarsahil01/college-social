import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Box, Image, Button, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import "../pages/Navbar.scss";
import { Link } from "react-router-dom";
var currentUser=JSON.parse(localStorage.getItem("currentUser"));

const Navbar = () => {
  // Get the current breakpoint value (screen size)
  const isMobile = useBreakpointValue({ base: true, md: false });
   console.log(currentUser);
  return (
    <>
     {currentUser ?
      <nav
      className="navbar"
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 999,
        padding: isMobile ? "0.5rem" : "1rem", // Adjust padding based on screen size
      }}
    >
      <div className="navbar-left">
        <Box
          cursor="pointer"
          onClick={() => {
            /* Handle the click event here */
          }}
        >
          <Image
            borderRadius="full"
            boxSize={isMobile ? "40px" : "50px"} // Adjust avatar size based on screen size
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
        <Wrap>
          <WrapItem>
            <Box
              cursor="pointer"
              onClick={() => {
                /* Handle the click event here */
              }}
            >
              <Link to="/userprofile">

              <Avatar name="Dan Abrahmov" src="" />
              </Link>
            </Box>
          </WrapItem>
        </Wrap>
      </div>
    </nav>: <nav
      className="navbar"
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 999,
        padding: isMobile ? "0.5rem" : "1rem", // Adjust padding based on screen size
      }}
    >
      <div className="navbar-left">
        <Box
          cursor="pointer"
          onClick={() => {
            /* Handle the click event here */
          }}
        >
          <Image
            borderRadius="full"
            boxSize={isMobile ? "40px" : "50px"} // Adjust avatar size based on screen size
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
     }
   
    </>
  );
};

export default Navbar;
