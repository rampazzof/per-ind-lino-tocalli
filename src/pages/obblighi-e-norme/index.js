import React from "react"

import { Icon } from "@chakra-ui/core"
import { MdFileDownload } from "react-icons/md"

import downloadFile from "../../downloads/presentazione-studi-tecnici.pdf"

import "./style.css"

export default () => (
  <div>
    <div className="page-content">
      <div className="page-title">CENNI NORMATIVI ED OBBLIGHI DI LEGGE</div>
      <p>
        La progettazione di impianti elettrici avviene nel rispetto di quanto
        riportato all’interno dei decreti:
      </p>
      <ul>
        <li>
          D.Lgs. 9 aprile 2008, n. 81 e s.m.i. “TESTO UNICO SULLA SALUTE E
          SICUREZZA SUL LAVORO”
          <br />
          (Attuazione dell’articolo 1 della Legge 3 agosto 2007, n. 123 in
          materia di tutela della salute e della sicurezza nei luoghi di
          lavoro);
        </li>
        <li>
          D.M. 22 gennaio 2008, n. 37
          <br />
          (Regolamento concernente l'attuazione dell'articolo 11-quaterdecies,
          comma 13, lettera (a) della legge n. 248 del 2005, recante riordino
          delle disposizioni in materia di attività di installazione degli
          impianti all'interno degli edifici).
        </li>
      </ul>
      <p>
        Inoltre, le modalità con cui viene elaborato un progetto sono definite
        dalla Guida CEI “0-2”, denominata “GUIDA DOCUMENTAZIONE PROGETTO
        IMPIANTI ELETTRICI”, la quale definisce la documentazione di progetto
        necessaria per gli impianti elettrici ed elettronici di tutte le
        tipologie di impianti, civili ed industriali, compresi gli impianti di
        protezione contro i fulmini (in accordo a quanto previsto dalla Legge
        46/90 e dal suo regolamento di attuazione DPR 447/91; entrambi abrogati
        dal Decreto Ministeriale 22 gennaio 2008 n. 37).
      </p>
      <p>A seguire si riportano alcuni estratti della Guida CEI 0-2:</p>
      […] Definizioni
      <p>
        Il progetto è il momento di ideazione dell’impianto, elemento
        fondamentale di garanzia per l’utente, quindi deve essere redatto per
        tutti gli impianti elettrici e ne deve precedere la realizzazione.
      </p>
      <p>
        Il progetto comprende gli studi che, partendo dalla conoscenza delle
        prestazioni richieste nelle condizioni ambientali e di funzionamento
        assegnate, produce le informazioni necessarie e sufficienti per la
        valutazione, la realizzazione, la verifica, l’esercizio e la
        manutenzione, dell’impianto in conformità alla regola dell’arte.
      </p>
      <p>
        Il progetto rappresenta il mezzo fondamentale per rispondere alle attese
        del Committente nel rispetto delle disposizioni di legge e delle norme
        tecniche, al fine di conseguire la sicurezza e la qualità dell’impianto.
      </p>
      […] Progetto dell’impianto
      <p>
        Progetto preliminare: definisce le caratteristiche qualitative e
        funzionali dei lavori, il quadro delle esigenze da soddisfare e delle
        specifiche prestazioni da fornire. Il progetto preliminare può
        individuare altresì i profili e le caratteristiche più significative dei
        successivi livelli di progettazione, in funzione delle dimensioni
        economiche e della tipologia e categoria dell’intervento.
      </p>
      <p>
        Progetto definitivo: redatto sulla base delle indicazioni del progetto
        preliminare approvato, contiene tutti gli elementi necessari ai fini del
        rilascio della concessione edilizia o del permesso per costruire o di
        altro atto equivalente.
      </p>
      <p>
        Progetto esecutivo: costituisce l’ingegnerizzazione di tutte le
        lavorazioni e, pertanto, definisce completamente ed in ogni particolare
        impiantistico l’intervento da realizzare. Il progetto è redatto nel
        pieno rispetto del progetto definitivo e delle eventuali prescrizioni
        dettate in sede di rilascio della concessione edilizia o permesso di
        costruire.
      </p>
      <div className="button-label">Scarica la guida completa</div>
      <a className="download-button" href={downloadFile} download>
        Download <Icon as={MdFileDownload} size={6} />
      </a>
    </div>
  </div>
)
