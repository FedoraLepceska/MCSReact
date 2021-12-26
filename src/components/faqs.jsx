import React from 'react';
import '../App.css';
import '../bootstrap.css';

class FAQs extends React.Component {
    
    constructor(props){
        super(props);
    };

    componentDidMount(){
        window.toggle();

    }

    render() {
        let content = {
            English: {
                title: "About us",
                description: "MyChargingStation development team is filled with eco-friendly gadgetism and are big advocates for ecology. " +
                    "That being said we are a non-profit organisation, and with your help and contribution to the environement for being a electric vehicle owner, " +
                    "in return we offer a ser\n" + "service which will fundamentally help you easen your life.",
                q1: "Can you charge a hybrid vehicle be charged on the EVN charging stations?",
                a1: "Yes of course. As long as your vehicle is a so-called plug-in hybrid model or your vehicle comes with a appropriate Type 2 charging cabel.",
                q2: "Is my vehichle compatible with what our service offers?",
                a2: "The EVN chargers are from Type 2(check the next question for more details).",
                q3: "What is a Type 2 connector?",
                a3: "The Type 2 connector is a unified charger by the European Union. Despite this type, there exist Type 1 and Type 3, Commando, Chademo, Schuko, 3 Pinqsquare and many more...",
                q4: "What is the power of these charging stations/connectors?",
                a4: "EVN in our region has installed 5 charging stations of which are 22kW and 35 charging stations of 2x22 kW, where 2 vehicles could be charged.",
                q5: "How and where can I access these charging stations?",
                a5: "Access a fully detailed map here.",
                q6: "Does this type of charging cost me anything?",
                a6: "First off you need a membership card. The first year of charging is always free, after that you have a paying program.",
                q7: "Where can I get a membership card?",
                a7: "You could file a request here on our website. If you wanna do it phisically you can go to the EVN info centre which is located under GTC(The City Commerce Centre).",
                q8: "Can anybody be a member?",
                a8: "Yes, anyone can be a member. You just have to own an electrical vehicle and just file a request for recieving the membership card. :)"
            },
            Macedonian: {
                title: "За Нас",
                description: "Во позадината на MyChargingStation, стои тим од големи еколошки поборници кои пробуваат да ја зголемат еколошката свест на граѓаните преку модерна технологија. Покрај тоа како непрофитабилна организација ние нудиме на сите поседувачи на електрични моторни возила, лесен пристап и опслужување за полнење на истите.",
                q1: "Дали хибридно возило може да се полни на полначите на ЕВН?",
                a1: "Хибридно возило може да се полни на ЕВН полначите, само доколку станува збор за прилучен или т.н. “plug in” хибрид, односно доколку возилото има опција за полнење и поседува соодветен кабел со соодветен приклучок (Тип 2).",
                q2: "Кој тип на приклучок се полначите кои ги поседува ЕВН?",
                a2: "Полначите кои се инсталирани од страна на ЕВН се со приклучок Тип 2.",
                q3: "Што е Тип 2 конектор?",
                a3: "Тип 2 претставува модел на приклучок што е унифициран на ниво на Европска Унија. Покрај Тип 2, во светот се користат и друг тип на приклучоци (Type 1, Type 3,  Commando, Chademo, CCS/ Combo, Schuko,  3 Pinsquare...)",
                q4: "Со колкава моќност се инсталираните полначи?",
                a4: "ЕВН на територија на Македонија има инсталирано 5 полначи со моќност од 22 kW (за полнење на по едно возило) и 35 полначи со моќност од 2x22 kW, каде две возила истовремено можат да вршат полнење.",
                q5: "На кои локаци се наоѓаат електричните полначи?",
                a5: "Детална мапа на локации тука.",
                q6: "Како се врши полнење на полначите на ЕВН?",
                a6: "Полнењето на полначите на ЕВН во првите година дена од програмата е бесплатно. За промените корисниците ќе бидат навремено известени.",
                q7: "Како до картичка за полнење?",
                a7: "Пополнете барање онлајн тука или пак обратете се во Инфо центарот на ЕВН (ГТЦ приземје).",
                q8: "Кој може да поседува картичка за полнење?",
                a8: "Картичка може добие било кое физичко лице или компанија што поседува електрично возило со тоа што задолжително мора да пополни барање за издавање на картичка.",
            },
            Albanian: {
                title: "Rreth nesh",
                description: "Ekipi i zhvillimit të MyChargingStation është i mbushur me pajisje miqësore me mjedisin dhe janë avokatë të mëdhenj për ekologjinë." +
                    "Me këtë thënë ne jemi një organizatë jofitimprurëse dhe me ndihmën dhe kontributin tuaj në mjedis për të qenë pronar i automjeteve elektrike," +
                    "në këmbim ne ofrojmë një ser\n" + "shërbim i cili do t'ju ndihmojë në thelb të lehtësoni jetën tuaj.",
                q1: "A mund të karikoni një automjet hibrid të karikohet në stacionet e karikimit të EVN?",
                a1: "Po sigurisht. Për sa kohë që automjeti juaj është një i ashtuquajtur model hibrid plug-in ose automjeti juaj vjen me një kabëll të përshtatshëm karikimi të tipit 2.",
                q2: "A është automjeti im i pajtueshëm me atë që ofron shërbimi ynë?",
                a2: "Ngarkuesit EVN janë nga Tipi 2 (kontrolloni pyetjen tjetër për më shumë detaje).",
                q3: "Çfarë është një lidhës i tipit 2?",
                a3: "Lidhësi i tipit 2 është një karikues i unifikuar nga Bashkimi Evropian. Pavarësisht nga ky lloj, ekzistojnë Tipi 1 dhe Lloji 3, Komando, Chademo, Schuko, 3 Pinqsquare dhe shumë të tjera...",
                q4: "Sa është fuqia e këtyre stacioneve/lidhësve të karikimit?",
                a4: "EVN në rajonin tonë ka instaluar 5 stacione karikimi prej të cilave 22 kW dhe 35 stacione karikimi 2x22 kW, ku mund të karikoheshin 2 automjete.",
                q5: "Si dhe ku mund të aksesoj këto stacione karikimi?",
                a5: "Qasni një hartë plotësisht të detajuar këtu.",
                Q6: "A më kushton ndonjë gjë ky lloj tarifimi?",
                a6: "Së pari ju duhet një kartë anëtarësimi. Viti i parë i tarifimit është gjithmonë falas, pastaj keni një program pagese.",
                Q7: "Ku mund të marr një kartë anëtarësimi?",
                a7: "Mund të paraqisni një kërkesë këtu në faqen tonë të internetit. Nëse dëshironi ta bëni atë fizikisht, mund të shkoni në qendrën e informacionit të EVN-së, e cila ndodhet nën GTC (Qendra Tregtare e Qytetit).",
                q8: "A mund të jetë dikush anëtar?",
                a8: "Po, çdokush mund të jetë anëtar. Thjesht duhet të kesh një automjet elektrik dhe thjesht të bësh një kërkesë për marrjen e kartës së anëtarësimit. :)"
            }
        }
        if(this.props.language === "Macedonian") {
            content = content.Macedonian;
        }
        else if(this.props.language === "English") {
            content = content.English
        }else {
            content = content.Albanian
        }
        return (
            <div id="faqs">
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <div className="text-container">
                                        <h1>FAQs</h1>

                                        <button className="accordion">{content.q1}</button>
                                        <div className="panel">
                                            <p>{content.a1}</p>
                                        </div>

                                        <button className="accordion">{content.q2}</button>
                                        <div className="panel">
                                            <p>{content.a2}</p>
                                        </div>

                                        <button className="accordion">{content.q3}</button>
                                        <div className="panel">
                                            <p>{content.a3}</p>
                                        </div>
                                        <button className="accordion">{content.q4}</button>
                                        <div className="panel">
                                            <p>{content.a4}</p>
                                        </div>
                                        <button className="accordion">{content.q5}</button>
                                        <div className="panel">
                                            <p>{content.a5}</p>
                                        </div>
                                        <button className="accordion">{content.q6}</button>
                                        <div className="panel">
                                            <p>{content.a6}</p>
                                        </div>
                                        <button className="accordion">{content.q7}</button>
                                        <div className="panel">
                                            <p>{content.a7}</p>
                                        </div>
                                        <button className="accordion">{content.q8}</button>
                                        <div className="panel">
                                            <p>{content.a8}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7">
                                    <div className="image-container">
                                        <div className="img-wrapper">
                                            <img className="img-fluid margin" src={require('../images/questions.png')} alt="alternative" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default FAQs;