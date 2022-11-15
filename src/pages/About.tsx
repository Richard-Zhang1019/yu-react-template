import { Flex } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'

const About = () => {
  return (
    <Flex justify="center" align="center" direction="column" gap={10}>
      <FaReact size={50} />
      <h1>Yu-React-template</h1>
    </Flex>
  )
}

export default About
