import { Flex } from '@chakra-ui/react'
import { Plus } from 'react-feather'

import { usePictures } from '../contexts/PictureContext'

import { MorphButton } from './MorphButton'

export const Navbar: React.FC = () => {
  const [pictures, setPictures] = usePictures();

  const addUrl = (url: string) => {
    setPictures([...pictures, url]);
  }

  return (
    <Flex
      my={1.5}
    >
      <MorphButton
        clearOnEnter
        onEnterKey={addUrl}
        shared={{
          width: "100%",
        }}
        button={{
          leftIcon: <Plus/>
        }}
        input={{
          placeholder: "Esc to exit editing..."
        }}
        >Add
      </MorphButton>
    </Flex>
  )
}