import React from "react";

function Footer(props) {
    let content = {
        English: {
            Copyright: "Copyright",
            description: "My Charging Station 2021"
        },
        Macedonian: {
            Copyright: "Авторски права",
            description: "Мојата станица за полнење 2021"
        },
        Albanian: {
            Copyright: "E drejta e autorit",
            description: "Stacioni im i karikimit 2021"
        }
    };

    if(props.language === "Macedonian") {
        content = content.Macedonian;
    }
    else if(props.language === "English"){
        content = content.English
    }else {
        content = content.Albanian
    }
    return (
        <div className="footer">
            <footer class="py-3 bg-dark fixed-bottom">
                <div class="container">
                    <p class="m-0 text-center text-white">
                        {content.Copyright} &copy; {content.description}
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;