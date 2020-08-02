import axios from 'axios'
import URLS from './URLS'

export async function getItems() {
    let rs = await axios({
        url: URLS.ITEMS
    });

    return rs;
}


export async function getItem(id) {

    let rs = await axios({
        url: URLS.ITEM + '/' + id
    });

    return rs;
}