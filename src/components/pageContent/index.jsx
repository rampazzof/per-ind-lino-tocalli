import React from "react"

import { Flex, Box } from "@chakra-ui/core"

const PageContent = ({ children }) => {
  return (
    <Flex justify="center">
      <Box width={1 / 2}>{children}</Box>
    </Flex>
  )
}

export default PageContent
