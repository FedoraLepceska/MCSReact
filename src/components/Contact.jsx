import React, { Fragment } from "react";

function Contact(props) {
    let content = {
        English: {
            title: "Contact Us",
            address: "Lorem ipsum, Lorem ipsum, Lorem, 123456",
            phone: {
                label: "Phone",
                value: "+12 34567"
            },
            email: {
                label: "Email",
                value: "abc@example.com"
            }
        },
        Malayalam: {
            title: "ബന്ധപ്പെടുക",
            address: "ലോറെം ഇപ്സിയം, ലോറെം ഇപ്സിയം, ലോറെം, 123456",
            phone: {
                label: "ഫോൺ",
                value: "+12 34567"
            },
            email: {
                label: "ഇമെയിൽ",
                value: "abc@example.com"
            }
        }
    };

    props.language === "Malayalam"
        ? (content = content.Malayalam)
        : (content = content.English);
    return (
        <Fragment>
            <h2>{content.title}</h2>
            <hr />
            <address>{content.address}</address>
            <address>
                <abbr title="Phone">{content.phone.label}: </abbr>
                {content.phone.value}
                <br />
                <abbr title="Email">{content.email.label}: </abbr>
                <a href={`mailto:${content.email.value}`}>{content.email.value}</a>
            </address>
        </Fragment>
    );
}

export default Contact;