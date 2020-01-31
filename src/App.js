import React from "react";
import Header from "./components/Header.js";
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Route path="/Search" component={SearchForm}/>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
