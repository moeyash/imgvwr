import { Grid, Image } from "@chakra-ui/react"

import { usePictures } from "../contexts/PictureContext"

interface GalleryProps {
  onExpand: (picture: string) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onExpand }) => {
  const [pictures] = usePictures();

  return (
    <Grid
      mt={3}
      templateColumns="repeat(5, 1fr)"
      gap={.5}
      overflowY="scroll"
      h="90vh"
    >

      {pictures.map((picture, index) => (
        <Image  
          key={index}
          src={picture}
          onClick={() => onExpand(picture)}
          boxSize="100%"
          maxH={60}
          minH={60}
          objectFit="cover"
          border="1px solid black"
          _hover={{
            transform: "scale(1.1)",
            transition: "transform .725s"
          }}
        />
      ))}
      
    </Grid>
  )
}