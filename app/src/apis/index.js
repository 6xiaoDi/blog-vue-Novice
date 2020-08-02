import axios from 'axios'

export async function getItems() {

    let rs = await axios({
        url: '/api/items'
    });

    return rs;
}