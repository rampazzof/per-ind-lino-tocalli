import React from "react"

import { Link as GatsbyLink } from "gatsby"
import { Box, Grid, Link, Icon } from "@chakra-ui/core"

import { MdHome, MdPhone, MdPlace } from "react-icons/md"

const Header = () => (
  <Grid
    bg="black"
    color="white"
    h={16}
    alignContent="center"
    templateColumns="repeat(2, 1fr)"
    gap={6}
    fontSize={30}
    w="100%"
  >
    <Box pl={8} textAlign="left">
      Studio Tecnico Per. Ind. Lino Tocalli
    </Box>
    <Grid
      pl={8}
      templateColumns="repeat(3, 1fr)"
      gap={12}
      textAlign="center"
      ml="auto"
      mr="auto"
    >
      <Link as={GatsbyLink} to="/">
        Home
        <Icon as={MdHome} size={10} pb={2} />
      </Link>
      <Link as={GatsbyLink} to="#googlemaps">
        Dove Siamo
        <Icon as={MdPlace} size={10} pb={2} />
      </Link>
      <Link as={GatsbyLink} to="#contacts">
        Contatti
        <Icon as={MdPhone} size={10} pb={2} />
      </Link>
    </Grid>
  </Grid>
)

export default Header
