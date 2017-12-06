const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
import * as TrelloNodeAPI from 'trello-node-api';

const Trello = new TrelloNodeAPI();

let listRequest = async function () {
    Trello.setApiKey(apiKey);
    Trello.setOauthToken(oauthToken);
    let data = {
        name: 'LIST_NAME',
        idBoard: 'BOARD_ID',
        idListSource: '',
        pos: 'top'
    };
    let response = await Trello.list.create(data).catch(error => {
        if (error) {
            console.log('error ', error);
        }
    });

    console.log('response', response);
};

listRequest();