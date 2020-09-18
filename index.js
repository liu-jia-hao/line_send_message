console.clear()
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'l8uzmsSt16fkqrLuisPq0RSgP0ANrmQk2r2QnwllzwCCYnwiz1KXAr2BbUzgvrZmXlChADTifxIdHpraWfGs3lxAQIhf0EFqxwEAf14xMSyBWdQYBI7PwcOMZJ8JhcU7kgfnAsgCX77kLs2OENN+qgdB04t89/1O/w1cDnyilFU='
});

const message = {
  type: 'text',
  text: 'Hello World!'
};

client.pushMessage('jiahao1111', message)
  .then(() => {
  })
  .catch((err) => {
    console.log(err)
  });