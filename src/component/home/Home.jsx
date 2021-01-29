import React from "react";
import "./home.css";

export default function Home(props) {
  return (
    <div className="container">
      <h1 className="tytul">
        Platforma do analizy złożoności obliczeniowej algorytmów sortowania
      </h1>
      <p className="opis">
        <a href="/wykresy">Wykresy</a> - podstrona prezentuje interaktywne
        wykresy pozwalające porównać złożoności obliczeniowe wybranych
        algorytmów sortowania.
      </p>
      <p className="opis">
        <a href="/animacje">Animacje</a> - prezentacja zasady działania
        wybranych algorytmów sortowania za pomocą animacji.
      </p>
    </div>
  );
}
