export function doLogin(email, password) {
    return new Promise((response, reject)=>{

        if(email === 'teste@mail.com' && password === '123'){
            response(true);
        }
        reject(`E-mail e/ou senha inválidos`);
    });
}