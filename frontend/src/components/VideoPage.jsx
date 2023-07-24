import React from "react";
import { Box, Image, Text, Flex, Stack, VStack, Heading, Card } from "@chakra-ui/react";
import {  CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
const videos = [
  {
    title: "Introduction to React",
    thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--DxYmo11v--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__387562745d479ae8961742001f2f9bd6/thumbs-video-upload__387562745d479ae8961742001f2f9bd6-00001.png",
    author: "John Doe",
    views: 1000,
  },
  {
    title: "Getting Started with Vue.js",
    thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--DxYmo11v--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__387562745d479ae8961742001f2f9bd6/thumbs-video-upload__387562745d479ae8961742001f2f9bd6-00001.png",
    author: "Jane Smith",
    views: 500,
  },
  {
    title: "Getting Started with Vue.js",
    thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--DxYmo11v--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__387562745d479ae8961742001f2f9bd6/thumbs-video-upload__387562745d479ae8961742001f2f9bd6-00001.png",
    author: "Jane Smith",
    views: 500,
  },
  {
    title: "Getting Started with Vue.js",
    thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--DxYmo11v--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__387562745d479ae8961742001f2f9bd6/thumbs-video-upload__387562745d479ae8961742001f2f9bd6-00001.png",
    author: "Jane Smith",
    views: 500,
  },
  {
    title: "Getting Started with Vue.js",
    thumbnail: "https://res.cloudinary.com/practicaldev/image/fetch/s--DxYmo11v--/c_imagga_scale,f_auto,fl_progressive,h_180,q_auto,w_320/https://dw71fyauz7yz9.cloudfront.net/video-upload__387562745d479ae8961742001f2f9bd6/thumbs-video-upload__387562745d479ae8961742001f2f9bd6-00001.png",
    author: "Jane Smith",
    views: 500,
  },
  // Add more video objects here
];

const VideoCard = ({ title, thumbnail, author, views }) => (
  <Card
    maxW="sm"
    borderWidth="1px"
    borderRadius="md"
    overflow="hidden"
    style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
    _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
    onClick={() => {
      // Add logic to handle the click event (e.g., redirect to a video page)
    }}
  >
    <Image src={thumbnail} alt={title} />
    <Box p={4}>
      <Stack spacing={2}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray.500">
          By {author}
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="sm" color="gray.500">
            {views} views
          </Text>
          {/* Add other elements like duration or date */}
        </Flex>
      </Stack>
    </Box>
  </Card>
);

const VideosPage = () => (
  
  <div style={{ display: "flex", flexWrap: "wrap" }}>
  {videos.map((video, index) => (
    <VideoCard key={index} {...video} />
  ))}
</div>
      
  
);

export default VideosPage;
