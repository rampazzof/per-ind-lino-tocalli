import React from "react"

import { Icon } from "@chakra-ui/core"
import { MdFileDownload } from "react-icons/md"

import downloadFile from "../../downloads/lavori.pdf"

import "./style.css"

export default () => (
  <div>
    <div className="page-content">
      <div className="page-title">PRESENTAZIONE</div>
      <p>
        Nell’anno 2010, subito dopo aver conseguito il Diploma di Maturità in
        Elettrotecnica ed Automazione presso l’Istituto Tecnico Industriale
        Statale “Enea Mattei” di Sondrio (SO), ho intrapreso il periodo di
        praticantato all’interno dello studio di progettazione “Forgad”.
      </p>
      <p>
        Durante questo percorso di formazione, durato 18 mesi, ho maturato i
        requisiti per accedere all’esame di abilitazione alla libera professione
        e l’esperienza necessaria a superarlo.
      </p>
      <p>
        Nell’anno 2013 inizia ufficialmente la mia carriera di Libero
        Professionista con qualifica di Progettista d’impianti elettrici,
        speciali e fotovoltaici; sia mantenendo la collaborazione con lo studio
        Forgad, che cercando nuovi contatti e opportunità di lavoro.
      </p>
      <p>
        Oltre i lavori progettati e seguiti in autonomia, la continua
        collaborazione con una realtà importante del settore mi ha permesso di
        entrare in un team di progettazione che ha gestito commesse di notevole
        spessore, sia dal punto di vista tecnico, che economico.
      </p>
      <p>
        Negli anni ho avuto la fortuna di poter seguire le più svariate
        tipologie di opere legate all’impiantistica elettrica; spaziando in
        diversi ambiti ed ampliando, di volta in volta, il mio bagaglio di
        conoscenze e competenze.
      </p>
      <p>
        Gli impianti fotovoltaici hanno segnato l’inizio della mia carriera
        lavorativa, in quanto, ho contribuito alla progettazione di oltre 300
        impianti dislocati in varie zone del nostro paese. Il lavoro di
        progettazione e successivamente di gestione degli aspetti burocratici
        con i vari Enti coinvolti, mi ha permesso di acquisire una notevole
        esperienza che ancora oggi trovo utile nell’ambito delle energie
        rinnovabili destinate alle nuove costruzioni.
      </p>
      <p>
        In seguito, nell’ottica di un continuo processo di formazione, la libera
        professione mi ha portato a sviluppare una figura necessariamente
        competente in diversi ambiti e, di conseguenza, mi sono orientato verso
        nuovi obbiettivi, dando maggiore importanza alla progettazione del
        settore elettrico.
      </p>
      <p>
        Questo percorso mi ha garantito un costante aggiornamento sia in materia
        tecnica, che normativa, così da mantenere preparata la mia figura di
        Professionista. Durante questi anni, il mondo dell’impiantistica
        elettrica, ha introdotto innovazioni e tecnologie che hanno trasformato
        gli impianti tradizionali in sistemi decisamente più complessi in grado
        di gestire le più svariate funzioni.
      </p>
      Sulla base di quest’ultima considerazione legata al progresso tecnologico,
      ritengo indispensabile proseguire il mio percorso di formazione per
      mantenere un costante aggiornamento, in modo tale da garantire un servizio
      di progettazione e consulenza valido in tutti i suoi aspetti.
      <p className="right">Per. Ind. Lino Tocalli</p>
      <div className="button-label">Ultimi lavori</div>
      <a className="download-button" href={downloadFile} download>
        Download <Icon as={MdFileDownload} size={6} />
      </a>
    </div>
  </div>
)
