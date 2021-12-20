import React from "react";
import ReactDOM from "react-dom";
import "./services/i18n";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    About,
    Analytics,
    FAQs,
    Help,
    MyProfile,
    Reserve,
    SignUp,
    LogIn, Header
} from "./components";
ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/log-in" element={<LogIn />} />
        </Routes>
    </Router>,

    document.getElementById("root")
);
ReactDOM.render(
    <React.StrictMode>
        <React.Suspense fallback="Loading...">
            <App />
        </React.Suspense>
    </React.StrictMode>,
    document.getElementById("root"),
);

serviceWorker.unregister();
