import React from "react"

import { Box, Button, Icon, Stack, Text, List, ListItem } from "@chakra-ui/core"
import { MdFileDownload } from "react-icons/md"

import Header from "../../components/header"
import Footer from "../../components/footer"
import GradientBar from "../../components/gradientBar"

import downloadFile from "../../downloads/presentazione-studi-tecnici.pdf"

export default () => (
  <Box>
    <Header />
    <GradientBar />
    <Box w="50%" ml="auto" mr="auto" pb={8}>
      <Box fontWeight="bold" fontSize="4xl" pt={8} pb={8} textAlign="center">
        CENNI NORMATIVI ED OBBLIGHI DI LEGGE
      </Box>
      <Stack spacing={3} textAlign="justify">
        <Text>
          La progettazione di impianti elettrici avviene nel rispetto di quanto
          riportato all’interno dei decreti:
        </Text>
        <List styleType="disc" stylePos="outside" spacing={3} pl={8}>
          <ListItem>
            <Text fontWeight="bold">
              D.Lgs. 9 aprile 2008, n. 81 e s.m.i. “TESTO UNICO SULLA SALUTE E
              SICUREZZA SUL LAVORO”
            </Text>
            (Attuazione dell’articolo 1 della Legge 3 agosto 2007, n. 123 in
            materia di tutela della salute e della sicurezza nei luoghi di
            lavoro);
          </ListItem>
          <ListItem>
            <Text fontWeight="bold">D.M. 22 gennaio 2008, n. 37</Text>
            (Regolamento concernente l'attuazione dell'articolo 11-quaterdecies,
            comma 13, lettera (a) della legge n. 248 del 2005, recante riordino
            delle disposizioni in materia di attività di installazione degli
            impianti all'interno degli edifici).
          </ListItem>
        </List>
        <Text>
          Inoltre, le modalità con cui viene elaborato un progetto sono definite
          dalla Guida CEI “0-2”, denominata “GUIDA DOCUMENTAZIONE PROGETTO
          IMPIANTI ELETTRICI”, la quale definisce la documentazione di progetto
          necessaria per gli impianti elettrici ed elettronici di tutte le
          tipologie di impianti, civili ed industriali, compresi gli impianti di
          protezione contro i fulmini (in accordo a quanto previsto dalla Legge
          46/90 e dal suo regolamento di attuazione DPR 447/91; entrambi
          abrogati dal Decreto Ministeriale 22 gennaio 2008 n. 37).
        </Text>
        <Text>A seguire si riportano alcuni estratti della Guida CEI 0-2:</Text>
        […] Definizioni
        <Text>
          Il progetto è il momento di ideazione dell’impianto, elemento
          fondamentale di garanzia per l’utente, quindi deve essere redatto per
          tutti gli impianti elettrici e ne deve precedere la realizzazione.
        </Text>
        <Text>
          Il progetto comprende gli studi che, partendo dalla conoscenza delle
          prestazioni richieste nelle condizioni ambientali e di funzionamento
          assegnate, produce le informazioni necessarie e sufficienti per la
          valutazione, la realizzazione, la verifica, l’esercizio e la
          manutenzione, dell’impianto in conformità alla regola dell’arte.
        </Text>
        <Text>
          Il progetto rappresenta il mezzo fondamentale per rispondere alle
          attese del Committente nel rispetto delle disposizioni di legge e
          delle norme tecniche, al fine di conseguire la sicurezza e la qualità
          dell’impianto.
        </Text>
        […] Progetto dell’impianto
        <Text>
          Progetto preliminare: definisce le caratteristiche qualitative e
          funzionali dei lavori, il quadro delle esigenze da soddisfare e delle
          specifiche prestazioni da fornire. Il progetto preliminare può
          individuare altresì i profili e le caratteristiche più significative
          dei successivi livelli di progettazione, in funzione delle dimensioni
          economiche e della tipologia e categoria dell’intervento.
        </Text>
        <Text>
          Progetto definitivo: redatto sulla base delle indicazioni del progetto
          preliminare approvato, contiene tutti gli elementi necessari ai fini
          del rilascio della concessione edilizia o del permesso per costruire o
          di altro atto equivalente.
        </Text>
        <Text>
          Progetto esecutivo: costituisce l’ingegnerizzazione di tutte le
          lavorazioni e, pertanto, definisce completamente ed in ogni
          particolare impiantistico l’intervento da realizzare. Il progetto è
          redatto nel pieno rispetto del progetto definitivo e delle eventuali
          prescrizioni dettate in sede di rilascio della concessione edilizia o
          permesso di costruire.
        </Text>
        Link download Guida PROGETTAZIONE DEGLI IMPIANTI ELETTRICI (D.Lgs 81/08
        e s.m.i. – D.M. 37/08).
        <Text fontSize="xl" fontWeight="bold">
          Scarica la guida completa
        </Text>
        <Button
          bg="#bfff00"
          _hover={{ fontWeight: "bold" }}
          _active={{}}
          _focus={{}}
        >
          <a href={downloadFile} download>
            Download <Icon as={MdFileDownload} size={6} />
          </a>
        </Button>
      </Stack>
    </Box>
    <Footer />
  </Box>
)
