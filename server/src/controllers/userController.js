// É necessário adicionar essa função em toda requisição, porque se não, 
// o CORS irá recusar a conexão e vai dar erro no front ao ser feita
// uma requisição de um host diferente da API
const host = 'http://localhost:3000';
function acceptDifferentHost(res){
    res.setHeader('Access-Control-Allow-Origin', host);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
}

exports.post = (req, res, next) => {
    acceptDifferentHost(res);
    const {user, password} = req.body;
    res.status(201).send('Rota POST');
}

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com id -> ${id}`);
}

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com id -> ${id}`);
}

exports.get = (req, res, next) => {
    acceptDifferentHost(res);
    res.status(200).send({
        "login": 'testando'
    })
}
exports.getById = (req, res, next) => {
    let id = req.params.id;
    acceptDifferentHost(res);

    res.status(201).send({
        "login": `testeLogin ${id}`
    });
}
exports.getPage = (req, res, next) => {
    acceptDifferentHost(res);
    let response = {
        "navbar": {
            "companyIcon": {
                "companyUrl": "../images/logo-michelin-levorin_bP1MQ2r.png",
                "position": "left"
            },
            "digitalIcon": {
                "digitalUrl": "../images/digitalvideo-x-small.png",
                "position": "right"
            }
        },
        "background": {
            "topImage": "../images/index.png"
        },
        "player": {
            "poster": "../images/bannervideo.jpg",
            "source": "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
        },
        "rightPainel": {
            "image": "../images/logo_motoshow_quadrado_8pBTAx4.svg",
            "textTitle": "Seja bem vindo user",
            "textContent": "Lorem ipsum testando" 
        },
        "banner": {
            "image": "../images/bannervideo_QexPFEg.png"
        },
        "forms": {
            "email": true,
            "password" : true
        }
    }
    res.status(200).send(response);
}