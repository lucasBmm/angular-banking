export function requisition(){
    return {
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
        },
        "registerForms": {
            "email": {
                "type": "email",
                "required": true,
                "label": "Email*"
            },
            "password": {
                "type": "password",
                "required": true,
                "label": "Senha*"
            },
            "municipio": {
                "type": "input",
                "required": false,
                "label": "Município"
            },
            "termos": {
                "type": "checkbox",
                "required": true,
                "text": "Li e aceito os termos e condições de acesso ao MotoShow. As informações coletadas neste termo serão excluídas após 7 (sete) dias, seguindo as boas práticas da Michelin na proteção de dados.*",
                "link": "www.google.com"
            },
            "nome": {
                "type": "text",
                "required": true,
                "label": "Nome*"
            },
            "perfil": {
                "type": "select",
                "required": true,
                "label": "Perfil*",
                "option": [
                    "Funcionário Michelin",
                    "Distribuidor Michelin",
                    "Distribuidor Michelin",
                    "Lojista",
                    "Produtora" 
                ]
            },
            "pais": {
                "type": "select",
                "required": true,
                "label": "País*",
                "option": [
                    "Brasil",
                    "Espanha"
                ]
            },
            "estados": {
                "type": "select",
                "required": true,
                "label": "Estado*",
                "option": [
                    "Acre",
                    "Alagoas",
                    "Amapá",
                    "Amazonas",
                    "Bahia",
                    "Ceará",
                    "Distrito Federal",
                    "Espírito Santo",
                    "Goiás",
                    "Maranhão",
                    "Mato Grosso",
                    "Mato Grosso do Sul",
                    "Minas Gerais",
                    "Pará",
                    "Paraíba",
                    "Paraná",
                    "Pernambuco",
                    "Piauí",
                    "Rio de Janeiro",
                    "Rio Grande do Norte",
                    "Rio Grande do Sul",
                    "Rondônia",
                    "Roraima",
                    "Santa Catarina",
                    "São Paulo",
                    "Sergipe",
                    "Tocantins"
                ]
            }
        }
    }
}