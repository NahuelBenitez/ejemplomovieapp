/* const movie = async ()=>{
    try {
        const res= await fetch ("https://api.tvmaze.com/search/shows?q=star%20wars");
        const data = await res.json();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
movie();
 */

const API = "https://api.tvmaze.com/";
 export function get(path){
    return fetch(API).then((result)=>result.json());
 }