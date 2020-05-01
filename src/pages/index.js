import React from "react"
import "typeface-chakra-petch"

import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Button,
  Grid,
  Image,
  Link,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/core"

import Header from "../components/header"
import Footer from "../components/footer"

import logo from "../images/logo.jpg"
import LeggiJpg from "../images/OBBLIGHI.jpg"
import ElettriciJpg from "../images/ELETTRICI.jpg"
import FotovoltaiciJpg from "../images/FOTOVOLTAICO.jpg"
import DomoticaJpg from "../images/DOMOTICA.jpg"
import ServiziJpg from "../images/SERVIZI.jpg"

export default () => (
  <Box>
    <Header />
    <Box h={2}></Box>
    <Box className="gradientBar" h={8} />
    <Grid templateColumns="repeat(2, 1fr)" alignItems="center" h="300px">
      <Image className="svg-up" src={logo} h="300px" ml="auto" mr="auto" />
      <Box fontSize="4xl" fontWeight="bold" pl={24}>
        <Text>
          Progettazione e consulenza impianti elettrici, speciali e fotovoltaici
        </Text>
        <Link as={GatsbyLink} to="/presentazione" float="left">
          <Button
            color="#bfff00"
            variant="link"
            leftIcon="arrow-forward"
            fontSize="xl"
          >
            Scopri di più
          </Button>
        </Link>
      </Box>
    </Grid>
    <Box className="gradientBar" h={8} />
    <Box h={2}></Box>
    <Box color="white">
      <Grid
        h="300px"
        templateColumns="repeat(3, 1fr)"
        columnGap={6}
        bg="#192e26ff"
        alignItems="center"
      >
        <Box fontWeight="bold" fontSize="45xl" pl={8} pr={8}>
          PROGETTAZIONE IMPIANTI ELETTRICI
          <Box fontWeight="normal" fontSize="md">
            Nell'ambito civile, industriale e terziario, lo studio ha le
            competenze per la progettazione e la direzione lavori di impianti
            elettrici a 360 gradi.
          </Box>
        </Box>
        <Box pl={8} pr={8}>
          <Box fontWeight="bold">
            Progettazione impianti elettrici in media e bassa tensione:
          </Box>
          <List>
            <ListItem>
              <ListIcon icon="chevron-right" />
              quadri elettrici;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              sistemi di distribuzione dell'energia;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti forza motrice;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di illuminazione (ordinaria e di emergenza);
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di messa a terra ed equipotenziali.
            </ListItem>
          </List>
        </Box>
        <Box pl={8} pr={8}>
          <Image
            src={ElettriciJpg}
            alt="Impianti elettrici jpg"
            opacity="0.3"
            h="275px"
            w="475px"
          />
        </Box>
      </Grid>
      <Box h={2} />
      <Grid
        h="300px"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        bg="#214e34ff"
        alignItems="center"
      >
        <Box pl={8} pr={8}>
          <Image
            src={DomoticaJpg}
            alt="Impianti speciali jpg"
            opacity="0.3"
            h="275px"
            w="475px"
          />
        </Box>
        <Box fontWeight="bold" fontSize="45xl" pl={8} pr={8}>
          PROGETTAZIONE IMPIANTI SPECIALI
          <Box fontWeight="normal" fontSize="md">
            Progettazione e direzione lavori di impianti a correnti deboli e di
            segnale, denominati impianti speciali.
          </Box>
        </Box>
        <Box pl={8} pr={8}>
          <Box fontWeight="bold">
            Progettazione impianti speciali in vari settori:
          </Box>
          <List>
            <ListItem>
              <ListIcon icon="chevron-right" />
              domotica;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti antintrusione;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di rivelazione ed allarme incendi;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di evacuazione EVAC;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di videosorveglianza;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di ricezione segnali TV/SAT;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di cablaggio strutturato;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              impianti di diffusione sonora audio.
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Box h={2} />
      <Grid
        h="300px"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        bg="#5c7457ff"
        alignItems="center"
      >
        <Box fontWeight="bold" fontSize="45xl" pl={8} pr={8}>
          PROGETTAZIONE IMPIANTI FOTOVOLTAICI
          <Box fontWeight="normal" fontSize="md">
            Progettazione e gestione pratiche burocratiche di impianti di
            produzione da energia solare.
          </Box>
        </Box>
        <Box pl={8} pr={8}>
          <Box fontWeight="bold">Progettazione impianti fotovoltaici:</Box>
          <List>
            <ListItem>
              <ListIcon icon="chevron-right" />
              sopralluoghi sul posto e studi di fattibilità;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              business plan e analisi tempi di ammortamento;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              scelta dei principali componenti (moduli FV e inverter);
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              elaborazione di schemi elettrici e planimetrici per
              l'Installatore;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              gestione pratiche con i vari Enti coinvolti.
            </ListItem>
          </List>
        </Box>
        <Box pl={8} pr={8}>
          <Image
            src={FotovoltaiciJpg}
            alt="Impianti fotovoltaici jpg"
            opacity="0.3"
            h="275px"
            w="475px"
          />
        </Box>
      </Grid>
      <Box h={2} />
      <Grid
        h="300px"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        bg="#475A49"
        alignItems="center"
      >
        <Box pl={8} pr={8}>
          <Image
            src={ServiziJpg}
            alt="Servizi jpg"
            opacity="0.3"
            h="275px"
            w="475px"
          />
        </Box>
        <Box fontWeight="bold" fontSize="45xl" pl={8} pr={8}>
          SERVIZI
          <Box fontWeight="normal" fontSize="md">
            Nei settori sopra citati, lo studio offre servizi di consulenza
            tecnica, analisi dati, verifica di impianti, collaudi e messe in
            servizio.
          </Box>
        </Box>
        <Box pl={8} pr={8}>
          <Box fontWeight="bold">Servizi:</Box>
          <List>
            <ListItem>
              <ListIcon icon="chevron-right" />
              consulenza tecnica generale;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              analisi del rischio da scariche atmosferiche;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              dimensionamenti e calcoli elettrotecnici;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              collaudi e messe in servizio;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              calcoli, verifiche e rendering illuminotecnici;
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" />
              verifiche periodiche impianti elettrici Guida CEI 64-14.
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Box h={2} />
      <Grid
        h="300px"
        templateColumns="repeat(3, 1fr)"
        gap={6}
        bg="#979B8D"
        alignItems="center"
      >
        <Box fontWeight="bold" fontSize="45xl" pl={8} pr={8}>
          CENNI NORMATIVI ED OBBLIGHI DI LEGGE
          <Box fontWeight="normal" fontSize="md">
            Progettazione impianti in accordo alle prescrizioni riportate nel
            D.Lgs 81/08 e s.m.i. e D.M. 37/08.
          </Box>
          <Link as={GatsbyLink} to="/obblighi-e-norme" float="left">
            <Button
              color="#bfff00"
              variant="link"
              leftIcon="arrow-forward"
              fontSize="xl"
            >
              Scopri di più
            </Button>
          </Link>
        </Box>
        <Box pl={8} pr={8}>
          <Box fontWeight="bold">Prescrizioni D.Lgs 81/08 e D.M. 37/08:</Box>
          <List>
            <ListItem>
              <ListIcon icon="chevron-right" />
              Nozioni fondamentali espresse dai due decreti più importanti in
              materia di impianti elettrici D.Lgs 81/08 e D.M. 37/08.
            </ListItem>
          </List>
        </Box>
        <Box pl={8} pr={8}>
          <Image
            src={LeggiJpg}
            alt="Obblighi e norme jpg"
            opacity="0.3"
            h="275px"
            w="475px"
          />
        </Box>
      </Grid>
    </Box>
    <Box h={2} />
    <Footer />
  </Box>
)
