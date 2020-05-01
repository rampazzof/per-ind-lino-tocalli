import React from "react"

import { Box, Grid, Image } from "@chakra-ui/core"

import logoBlack from "../../images/logo-black.jpg"

const Footer = () => (
  <Grid
    templateColumns="repeat(2, 1fr)"
    columnGap={6}
    bg="black"
    color="white"
    fontSize="lg"
    fontWeight="bold"
    pt={4}
    pl={8}
    pr={8}
  >
    <Box id="contacts" ml={4}>
      <Box>Per. Ind. Lino Tocalli</Box>
      <Box>Via Serta, 190 - 23017 Morbegno (SO)</Box>
      <Box mt={2}>Tel.: +39.349.28.10.172</Box>
      <Box>mail: lino.tocalli@live.com</Box>
      <Box mt={2} mb={4}>
        Pec: lino.tocalli@pec.eppi.it
      </Box>
    </Box>
    <Box mr={4} mb={4} textAlign="right">
      <Image className="svg-up" src={logoBlack} h="118px" ml="auto" mr="0" />
      P. Iva 00948340146
    </Box>
  </Grid>
)

export default Footer
