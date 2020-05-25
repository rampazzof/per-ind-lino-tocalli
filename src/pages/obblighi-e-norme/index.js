import React from "react"

import { MdFileDownload } from "react-icons/md"

import downloadFile from "../../downloads/presentazione-studi-tecnici.pdf"

export default () => (
  <div>
    <div className="page-content">
      <div className="page-title">CENNI NORMATIVI ED OBBLIGHI DI LEGGE</div>
      <p>
        La progettazione di impianti elettrici avviene nel rispetto di quanto
        riportato all’interno dei decreti:
      </p>
      <ul className="page-list" style={{ listStyleType: "disc" }}>
        <li style={{ display: "block" }}>
          <b>
            D.Lgs. 9 aprile 2008, n. 81 e s.m.i. “TESTO UNICO SULLA SALUTE E
            SICUREZZA SUL LAVORO”
          </b>
          <br />
          (Attuazione dell’articolo 1 della Legge 3 agosto 2007, n. 123 in
          materia di tutela della salute e della sicurezza nei luoghi di
          lavoro);
        </li>
        <li style={{ display: "block", listStyleType: "disc" }}>
          <b>D.M. 22 gennaio 2008, n. 37</b>
          <br />
          (Regolamento concernente l'attuazione dell'articolo 11-quaterdecies,
          comma 13, lettera (a) della legge n. 248 del 2005, recante riordino
          delle disposizioni in materia di attività di installazione degli
          impianti all'interno degli edifici).
        </li>
      </ul>
      <p>
        Le modalità con cui viene elaborato un progetto sono definite dalla
        <b>Guida CEI “0-2”</b>, denominata
        <b>“GUIDA DOCUMENTAZIONE PROGETTO IMPIANTI ELETTRICI”</b>, la quale
        definisce la documentazione di progetto necessaria per gli impianti
        elettrici ed elettronici di tutte le tipologie di impianti, civili ed
        industriali, compresi gli impianti di protezione contro i fulmini (in
        accordo a quanto previsto dalla Legge 46/90 e dal suo regolamento di
        attuazione DPR 447/91; entrambi abrogati dal Decreto Ministeriale 22
        gennaio 2008 n. 37).
      </p>
      <br />
      <p>A seguire si riportano alcuni estratti della Guida CEI 0-2:</p>
      […] <b>Definizioni</b>
      <p>
        Il progetto è il momento di <b>ideazione dell’impianto</b>, elemento
        fondamentale di <b>garanzia</b> per l’utente, quindi deve essere redatto
        per tutti gli impianti elettrici e ne deve precedere la realizzazione.
      </p>
      <p>
        Il progetto comprende gli <b>studi</b> che, partendo dalla conoscenza
        delle prestazioni richieste nelle condizioni ambientali e di
        funzionamento assegnate, produce le informazioni necessarie e
        sufficienti per la valutazione, la realizzazione, la verifica,
        l’esercizio e la manutenzione, dell’impianto in conformità alla regola
        dell'arte.
      </p>
      <p>
        Il progetto rappresenta il mezzo fondamentale per
        <b>rispondere alle attese del Committente</b> nel rispetto delle
        disposizioni di legge e delle norme tecniche, al fine di conseguire la
        sicurezza e la qualità dell’impianto.
      </p>
      <div className="button-label">
        Scarica la guida realizzata dal nostro studio:
      </div>
      <a className="download-button" href={downloadFile} download>
        Download <MdFileDownload className="inline-item" />
      </a>
    </div>
  </div>
)
