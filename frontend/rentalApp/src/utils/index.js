import axios from "axios"

export const base = "https://localhost:7064"

export const api = base + '/api/'
//var fileDownload = require('js-file-download');
function set_header(token = null) {
    try {
        console.log(token);
        if (token == null) {
            var obj = {
                'Content-Type': 'application/json',
            }
        } else {
            var obj = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        console.log(obj);
        return obj
    } catch (error) {
        console.log(error);

    }

}

export const filterData = (data, q) => {
    let limit = 9;
    let final = [];
    let temp = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j].offre.titre.toLowerCase().includes(q)) {
                temp.push(data[i][j]);
                if (temp.length == limit) {
                    final.push(temp);
                    temp = []
                }
            }
        }
    }
    if (temp.length > 0) {
        final.push(temp);
    }
    return final;
}




export const handleResp = (resp, addToast) => {
    if (resp) {
        if (resp.failed == false) {
            addToast(resp.message, {
                autoDismiss: true,
                appearance: "success"
            })

        } else if (resp.failed) {
            addToast(resp.message, {
                autoDismiss: true,
                appearance: "error"
            })
        } else {
            addToast("error", {
                autoDismiss: true,
                appearance: "error"
            })
        }
    } else {
        addToast("Failed", {
            autoDismiss: true,
            appearance: "error"
        })
    }
}

export async function addUserWithUpload(username = null, email = null, password = null, name = null, address = null, tel = null, files = null) {
    let form_data = new FormData();
    let access = sessionStorage.getItem('accessToken');
    //access =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4OTc3OTkwLCJqdGkiOiIyY2EyY2NjMjFmMjQ0YjQyYTc3MjgzYjAzZGM2MTdhMSIsInVzZXJfaWQiOjJ9.uGyjMDKwWTMowoBgxNLiDbfijFcwutbKBkLNrXlvnTA"
    let headers = set_header(access, true);
    let body = {
        email,
        username,
        password,
        name,
        tel,
        address
    }
    console.log(body);
    let key = "logo"
    let endpoint = "adduserwithupload"
    for (let i = 0; i < files.length; i++) {
        form_data.append(key, files[i], files[i].name);
    }

    for (let key of Object.keys(body)) {
        form_data.append(key, body[key]);
    }

    let url = api + endpoint;
    try {
        let resp = await axios.post(url, form_data, {
            headers
        })
        console.log(resp.status)
        console.log(resp.data)

        if (resp.status == 201) {
            return true
        }
        else if (resp.status == 200 || resp.status == 400) {

            return resp.data
        }
        else {
            console.log("other errors")
            return false;
        }
    } catch (error) {
        let resp = error.response
        console.log(resp)
        if (resp.status == 401) {
            let dec = await refreshToken();
            if (dec) {
                return addUserWithUpload(username, email, password, name, address, tel, files);
            } else {

                return false;
            }

        } else {
            console.log("other errors")
            return false;
        }

    }


}





export const registerUploadFiles = async (files, body, key, endpoint) => {
    let form_data = new FormData();
    let access = sessionStorage.getItem('accessToken');
    //access =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4OTc3OTkwLCJqdGkiOiIyY2EyY2NjMjFmMjQ0YjQyYTc3MjgzYjAzZGM2MTdhMSIsInVzZXJfaWQiOjJ9.uGyjMDKwWTMowoBgxNLiDbfijFcwutbKBkLNrXlvnTA"
    let headers = set_header(access, true);
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        form_data.append(key, files[i], files[i].name);
    }

    /* form_data.append('front',files.front,files.front.name);
    form_data.append('back',files.back,files.back.name);
    form_data.append('selfie',files.selfie,files.selfie.name); */

    for (let key of Object.keys(body)) {
        let temp = body[key];
        for (let key2 of Object.keys(temp)) {
            form_data.append(key2, temp[key2]);
        }

    }
    let url = api + endpoint;
    try {
        let resp = await axios.post(url, form_data, {
            headers
        })
        console.log(resp.status)
        console.log(resp.data)

        if (resp.status == 201) {
            return true
        }
        else if (resp.status == 200 || resp.status == 400) {

            return resp.data
        }
        else {
            console.log("other errors")
            return false;
        }
    } catch (error) {
        let resp = error.response
        console.log(resp)
        if (resp.status == 401) {
            let dec = await refreshToken();
            if (dec) {
                return registerUploadFiles(files, body, key, endpoint);
            } else {

                return false;
            }

        } else {
            console.log("other errors")
            return false;
        }

    }
}



export const uploadFiles = async (files, body, key, endpoint) => {

    let form_data = new FormData();
    let access = sessionStorage.getItem('accessToken');
    //access =  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ4OTc3OTkwLCJqdGkiOiIyY2EyY2NjMjFmMjQ0YjQyYTc3MjgzYjAzZGM2MTdhMSIsInVzZXJfaWQiOjJ9.uGyjMDKwWTMowoBgxNLiDbfijFcwutbKBkLNrXlvnTA"
    let headers = set_header(access, true);
    console.log(files)
    for (let i = 0; i < files.length; i++) {
        form_data.append(key, files[i], files[i].name);
    }

    /* form_data.append('front',files.front,files.front.name);
    form_data.append('back',files.back,files.back.name);
    form_data.append('selfie',files.selfie,files.selfie.name); */

    for (let key of Object.keys(body)) {
        form_data.append(key, body[key]);
    }
    let url = api + endpoint;
    try {
        let resp = await axios.post(url, form_data, {
            headers
        })
        console.log(resp.status)

        if (resp.status == 201) {
            return true
        }
        else {
            console.log("other errors")
            return false;
        }
    } catch (error) {
        let resp = error.response
        console.log(resp)
        if (resp.status == 401) {
            let dec = await refreshToken();
            if (dec) {
                return uploadFiles(files, body, key, endpoint);
            } else {

                return false;
            }

        } else {
            console.log("other errors")
            return false;
        }

    }


};








export async function registerCall(data) {
    console.log(data);


    let headers = set_header();

    let options = {
        method: 'post',
        body: JSON.stringify(data),
        headers: headers,
        mode: 'cors'
    }



    let preResp = await fetch(api + 'register', options);

    if (preResp.ok) {
        let nextresp = await get_token(data.username, data.password);
        return nextresp;

    } else {
        return false
    }


}



export async function refreshToken() {
    let refresh = sessionStorage.getItem('refreshToken');
    let headers = set_header();
    let options = {
        method: 'post',
        body: JSON.stringify({
            refresh
        }),
        headers: headers,
        mode: 'cors'

    }

    let preResp = await fetch(api + 'token/refresh', options);
    if (preResp.ok) {
        let resp = await preResp.json();
        let access = resp.access;
        sessionStorage.setItem('accessToken', access);
        return true;

    } else {
        console.log('need to login');
        return false;
    }


}













export async function req_body(url, body) {
    let access = sessionStorage.getItem('accessToken');
    let headers = set_header(access);

    let options = {
        method: 'get',
        headers: headers,
        body,
        mode: 'cors'
    }

    let preResp = await fetch(api + url, options);
    if (preResp.ok) {
        let resp = await preResp.json();
        return resp;
    } else if (preResp.status == 401) {
        let dec = await refreshToken();
        if (dec) {
            return req(url);
        } else {

            return false;
        }
    } else {
        console.log('other errors');
        return false;
    }


}









function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function formatDate(date) {
    return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
    ].join('/');
}


// fresh functions

export async function req(url) {
    let access = sessionStorage.getItem('accessToken');
    let headers = set_header(access);

    let options = {
        method: 'get',
        headers: headers,
        mode: 'cors'
    }

    let preResp = await fetch(api + url, options);
    if (preResp.ok) {
        try{
            let resp = await preResp.json();
        return resp;
        }catch {
            return true;
        }
        
    } else if (preResp.status == 401) {
        return false;
    } else {
        console.log('other errors');
        return false;
    }


}


export async function postReq(url, body) {
    let access = sessionStorage.getItem('accessToken');
    let headers = set_header(access);
    let options = {
        method: 'post',
        body: JSON.stringify(body),
        headers: headers,
        mode: 'cors'
    }

    let preResp = await fetch(api + url, options);
    if (preResp.ok) {
        let resp = await preResp.json();
        console.log(resp);
        return resp;
    } else if (preResp.status == 401) {
        return false;
    } else {
        console.log('other errors');
        return false;
    }

}


export async function isLogged() {
    let resp = await req('token/test');
    return resp;
}

export async function adduser(body){ //username = null, email = null, password = null, nom = null,prenom = null, telephone = null, address = null, utype=null) {
    let access = sessionStorage.getItem('accessToken');

    /* let body = {
        "user": {
          username,
          password,
          isAdmin: false
        },
        nom,
        prenom,
        address,
        telephone,
        email,
        utype,
        "isBlackListed": false,
        "isFavorite": false
      } */
   

    let headers = set_header(access);

    let options = {
        method: 'post',
        body: JSON.stringify(body),
        headers: headers
    }



    let res = await postReq('userinformations', body)
    return res;


}


export async function moduser(username = null, email = null, password = null, nom = null,prenom = null, telephone = null, address = null, utype=null) {
    let access = sessionStorage.getItem('accessToken');

    let body = {
        "user": {
          username,
          password,
          "isAdmin": false
        },
        nom,
        prenom,
        address,
        telephone,
        email,
        utype,
        "isBlackListed": false,
        "isFavorite": false
      }

    let headers = set_header(access);

    let options = {
        method: 'post',
        body: JSON.stringify(body),
        headers: headers
    }



    //let preResp = await fetch(api + 'users', options);

    let res = await postReq('users', body);
    return res;


}

export async function get_token(body) {

    

    let headers = set_header();

    let options = {
        method: 'post',
        body: JSON.stringify(body),
        headers: headers,
        mode: 'cors'
    }



    let preResp = await fetch(api + 'token', options);
    if (preResp.ok) {
        console.log('got token');
        var resp = await preResp.json();
        let access = resp.token;
        sessionStorage.setItem('accessToken', access);
        
        return preResp;
    } else {
        return false;
    }


}

export function logout(setUser) {
    console.log("logged out")
    let obj = {
        logged : false,
        user : null
    }
    
    sessionStorage.removeItem("accessToken");
    setUser(obj);
}

