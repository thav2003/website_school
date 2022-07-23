import {account} from'help.js'
export const matchCredentials = (email, password) => {
    const match = account.find(el => {
       return el.email === email && el.password === password;
    });
    return {flag:!!match,name:match.name};// 2 dấu !! này là vì math sẽ trả về 1 object nếu tìm thấy tài khoản,dấu đầu tiên sẽ check xem đó có phải là object ko,nếu phải thì sẽ trả về false,dấu thứ 2 đảo ngược cái false nên sẽ trả về true
};
