
import { API } from './../config';


export const GetProducts = (sortBy) => {

    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=8`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err)
        return err

    })

}
