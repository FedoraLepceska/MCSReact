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
                    //'Authorization' : BEARER + localStorage.getItem('token')
                }
            }).then((res) => res.json());
 
    }
 
    getLocations(){
        return fetch(LOCATION_URL,
            {
                method : 'GET',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                    //'Authorization' : BEARER + localStorage.getItem('token')
                }
            }).then((res) => res.json());
    }
 
 
    login(mcs_user){
            return fetch(LOGIN_URL,
              {
                method : "POST",
                headers: {
                  'Accept' : 'application/json',
                  'Content-Type' : 'application/json'
                },
                body : JSON.stringify(mcs_user)
              }).then((res) => res.json());
 
    }
 
    register(mcs_user){
        return fetch(REGISTER_URL,
            {
                method : "POST",
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                  },
                  body : JSON.stringify(mcs_user)
            }).then((res) => res.json());
    } 

    postRating(rating){
        return fetch(RATING_URL,
            {
                method : "POST",
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                  },
                  body : JSON.stringify(rating)
            }).then((res) => res.json());
    } 
 
 
    //POST
    postReservation(reservation){ //prati reservation vo input argumenti
            return fetch(RESERVATION_URL,
                {
                    method : "POST",
                    headers: {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'//,
                        //"Authorization" : BEARER + localStorage.getItem('token')
                    },
                    body : JSON.stringify(reservation),
                });
    }    
}
 
export default new APIService();