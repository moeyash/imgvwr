import { Flex, IconButton, Image } from "@chakra-ui/react"
import { X } from "react-feather";

interface FullViewProps {
  picture: string;
  onClose: () => void;
}

export const FullView: React.FC<FullViewProps> = ({ picture, onClose }) => {
  return (
    <>
      <Flex
      width="100vw"
      position="absolute"
      padding={4}
      alignContent="flex-end"
      opacity={0}
      mb={8}
      _hover={{
        opacity: 1,
        transition: "opacity 1s"
      }}
    >
        <IconButton 
          aria-label="Close"
          icon={<X />}
          onClick={onClose}
        />
    </Flex>
      <Flex
        h="100vh"
        w="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={picture} boxSize="fit-content" objectFit="cover"/>
      </Flex>
    </>
  )
}