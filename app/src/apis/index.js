import axios from 'axios'
import URLS from './URLS'

export async function getItems() {
    let rs = await axios({
        url: URLS.ITEMS
    });

    return rs;
}