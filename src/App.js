import React, { useState } from "react";
import {Navigation, Footer, Header, About, FAQs, Reserve, Help} from "./components";

function App() {
    let languageStoredInLocalStorage = localStorage.getItem("language");
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
    );

    return (
        <div className="App">
            <Navigation
                language={language}
                handleSetLanguage={language => {
                    setLanguage(language);
                    storeLanguageInLocalStorage(language);
                }}
            />
            <Header language={language} />
            <About language={language} />
            <FAQs language={language} />
            <Reserve language={language} />
            <Help language={language} />
            <Footer language={language} />
        </div>
    );
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem("language", language);
}

export default App;