import { CookieJar } from 'tough-cookie';
import { BASE_URL } from '../pan/driver/baidu/constants';


let key = 'test';
let val = 100;


const cookieJar = new CookieJar


for (let index = 0; index < 10; index++) {
    val = index
    cookieJar.setCookieSync(`${key}=${val}`, BASE_URL)

    console.log(cookieJar.getCookieStringSync(BASE_URL))
}