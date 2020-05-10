import React from "react"
import "typeface-chakra-petch"

import { Link } from "gatsby"
import { MdKeyboardArrowRight } from "react-icons/md"
import ScrollableAnchor from "react-scrollable-anchor"

import logo from "../images/logo.jpg"
import LeggiJpg from "../images/OBBLIGHI.jpg"
import ElettriciJpg from "../images/ELETTRICI.jpg"
import FotovoltaiciJpg from "../images/FOTOVOLTAICO.jpg"
import DomoticaJpg from "../images/DOMOTICA.jpg"
import ServiziJpg from "../images/SERVIZI.jpg"

export default () => (
  <div>
    <div className="main-presentation">
      <div className="main-item">
        <img className="main-logo" src={logo} alt="main logo" />
      </div>
      <div className="main-item">
        <div className="main-item-title">
          Progettazione e consulenza impianti elettrici, speciali e fotovoltaici
        </div>
        <div>
          <Link className="discover-button" to="/presentazione">
            Scopri di più
            <MdKeyboardArrowRight
              style={{ display: "inline", fontSize: "24px" }}
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="gradient-bar" />
    <div className="row-container green-5">
      <div className="row-item">
        <div className="row-item-title">PROGETTAZIONE IMPIANTI ELETTRICI</div>
        <div>
          Nell'ambito civile, industriale e terziario, lo studio ha le
          competenze per la progettazione e la direzione lavori di impianti
          elettrici a 360 gradi.
        </div>
      </div>
      <div className="row-item">
        <div className="row-item-list-title">
          Progettazione impianti elettrici in media e bassa tensione:
        </div>
        <ul>
          <li>
            <MdKeyboardArrowRight />
            quadri elettrici;
          </li>
          <li>
            <MdKeyboardArrowRight />
            sistemi di distribuzione dell'energia;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti forza motrice;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di illuminazione (ordinaria e di emergenza);
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di messa a terra ed equipotenziali.
          </li>
        </ul>
      </div>
      <div className="row-item image-row">
        <img
          className="row-item-image"
          src={ElettriciJpg}
          alt="Impianti elettrici jpg"
        />
      </div>
    </div>
    <div className="row-container green-4">
      <div className="row-item image-row">
        <img
          className="row-item-image"
          src={DomoticaJpg}
          alt="Impianti speciali jpg"
        />
      </div>
      <div className="row-item">
        <div className="row-item-title">PROGETTAZIONE IMPIANTI SPECIALI</div>
        <div>
          Progettazione e direzione lavori di impianti a correnti deboli e di
          segnale, denominati impianti speciali.
        </div>
      </div>
      <div className="row-item">
        <div className="row-item-list-title">
          Progettazione impianti speciali in vari settori:
        </div>
        <ul>
          <li>
            <MdKeyboardArrowRight />
            domotica;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti antintrusione;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di rivelazione ed allarme incendi;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di evacuazione EVAC;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di videosorveglianza;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di ricezione segnali TV/SAT;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di cablaggio strutturato;
          </li>
          <li>
            <MdKeyboardArrowRight />
            impianti di diffusione sonora audio.
          </li>
        </ul>
      </div>
    </div>
    <div className="row-container green-3">
      <div className="row-item">
        <div className="row-item-title">
          PROGETTAZIONE IMPIANTI FOTOVOLTAICI
        </div>
        <div>
          Progettazione e gestione pratiche di impianti di produzione da energia
          solare.
        </div>
      </div>
      <div className="row-item">
        <div className="row-item-list-title">
          Progettazione impianti fotovoltaici:
        </div>
        <ul>
          <li>
            <MdKeyboardArrowRight />
            sopralluoghi sul posto e studi di fattibilità;
          </li>
          <li>
            <MdKeyboardArrowRight />
            business plan e analisi tempi di ammortamento;
          </li>
          <li>
            <MdKeyboardArrowRight />
            scelta dei principali componenti (moduli FV e inverter);
          </li>
          <li>
            <MdKeyboardArrowRight />
            elaborazione di schemi elettrici e planimetrici per l'Installatore;
          </li>
          <li>
            <MdKeyboardArrowRight />
            gestione pratiche con i vari Enti coinvolti.
          </li>
        </ul>
      </div>
      <div className="row-item image-row">
        <img
          className="row-item-image"
          src={FotovoltaiciJpg}
          alt="Impianti fotovoltaici jpg"
        />
      </div>
    </div>
    <div className="row-container green-2">
      <div className="row-item image-row">
        <img className="row-item-image" src={ServiziJpg} alt="Servizi jpg" />
      </div>
      <div className="row-item">
        <div className="row-item-title">SERVIZI</div>
        <div>
          Nei settori sopra citati, lo studio offre servizi di consulenza
          tecnica,
          <br />
          analisi dati, verifica, collaudi e messe in servizio.
        </div>
      </div>
      <div className="row-item">
        <div className="row-item-list-title">Servizi:</div>
        <ul>
          <li>
            <MdKeyboardArrowRight />
            consulenza tecnica;
          </li>
          <li>
            <MdKeyboardArrowRight />
            analisi del rischio da scariche atmosferiche (fulmini);
          </li>
          <li>
            <MdKeyboardArrowRight />
            dimensionamenti e calcoli elettrotecnici;
          </li>
          <li>
            <MdKeyboardArrowRight />
            collaudi e messe in servizio;
          </li>
          <li>
            <MdKeyboardArrowRight />
            calcoli, verifiche e rendering illuminotecnici;
          </li>
          <li>
            <MdKeyboardArrowRight />
            verifiche periodiche impianti elettrici Guida CEI 64-14.
          </li>
        </ul>
      </div>
    </div>
    <div className="row-container green-1">
      <div className="row-item">
        <div className="row-item-title">
          CENNI NORMATIVI ED OBBLIGHI DI LEGGE
        </div>
        <div>
          Progettazione impianti in accordo alle prescrizioni riportate nel
          D.Lgs 81/08 e s.m.i. e D.M. 37/08.
        </div>
        <div style={{ marginTop: "8px" }}>
          <Link className="discover-button" to="/obblighi-e-norme">
            Scopri di più
            <MdKeyboardArrowRight
              style={{ display: "inline", fontSize: "24px" }}
            />
          </Link>
        </div>
      </div>
      <div className="row-item">
        <div className="row-item-list-title">
          Prescrizioni D.Lgs 81/08 e D.M. 37/08:
        </div>
        <ul>
          <li>
            <div>
              <MdKeyboardArrowRight />
            </div>
            Nozioni fondamentali espresse dai due decreti più importanti in
            materia di impianti elettrici D.Lgs 81/08 e D.M. 37/08.
          </li>
        </ul>
      </div>
      <div className="row-item image-row">
        <img
          className="row-item-image"
          src={LeggiJpg}
          alt="Obblighi e norme jpg"
        />
      </div>
    </div>
    <ScrollableAnchor id="googlemaps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11052.910261856712!2d9.710459248657225!3d46.16612556580803!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478473103c6c5d73%3A0xedd4a393d5c39f7a!2sVia%20Serta%2C%20190%2C%2023017%20Morbegno%20SO!5e0!3m2!1sit!2sit!4v1588360807863!5m2!1sit!2sit"
        title="googlemaps"
        width="100%"
        height="450px"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
      />
    </ScrollableAnchor>
  </div>
)
