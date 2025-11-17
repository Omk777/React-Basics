import axios from "axios";

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1"
})


export const getCountrydata=()=>{
    return api.get("/all?fields=name,capital,population,region,flags")
}


export const getCountryInddata=(name)=>{
     return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
}