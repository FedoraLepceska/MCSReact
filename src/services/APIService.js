
const BASE_URL = "http://localhost:9090"

const REGISTER_URL = BASE_URL + "/register";
const LOGIN_URL = BASE_URL + "/login";
const FAQS_URL = BASE_URL + "/faqs";
const RESERVATION_URL = BASE_URL + "/reservations";
const RATING_URL = BASE_URL + "/ratings";
const LOCATION_URL = BASE_URL + "/locations";

const BEARER = "Bearer ";

class APIService {

    //GET
    getFAQs(){
        return fetch(FAQS_URL,
            {
                method : 'GET',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                }
            }).then((res) => res.json())
    
    }

    getLocations(){
        return fetch(LOCATION_URL,
            {
                method : 'GET',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'//,
                    //'Authorization' : BEARER + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY0MDMzMDQ4OCwiaWF0IjoxNjQwMjk0NDg4fQ.KWxs83_6xs6-1zoLXQP3tDwGQhl5BDHOPq7-CQ-PUMc'
                }
            }).then((res) => res.json())
    }

    //POST
    // postReservation(){ //prati reservation vo input argumenti
    //     try{
    //         const res = fetch(RESERVATION_URL,
    //             {
    //                 method : "POST",
    //                 headers: {
    //                     'Accept' : 'application/json',
    //                     'Content-Type' : 'application/json',
    //                     "Authorization" : BEARER + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY0MDMzMDQ4OCwiaWF0IjoxNjQwMjk0NDg4fQ.KWxs83_6xs6-1zoLXQP3tDwGQhl5BDHOPq7-CQ-PUMc"
    //                 },
    //                 body : JSON.stringify(reservation),
    //             });

    //         if (!res.ok){
    //             const message = `An error has occured: ${res.status} - ${res.statusText}`;
    //             throw new Error(message);
    //         }

    //         return res.json();
    //     }catch (err) {
    //         err.message;
    //     }

    // }


        // const postData = {
        //   title: post_title.current.value,
        //   description: post_description.current.value,
        // };
    
}

export default new APIService();