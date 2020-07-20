import https from './httpStore'

const axios_1 = https.axios_1


let request = (url,data,func,method) => {
    axios_1({
        method: method || 'post',
        url,
        params: method === 'get'? data:null,
        data: method === 'get'? null:data,
    }).then((data) => {
        func(data)
    }).catch((data) => {
        throw data
    })
}

export default {
    request,
}