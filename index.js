console.clear()
const line = require('@line/bot-sdk');

const client = new line.Client({
  // 這有兩個官方帳號
  // try20200919
  channelAccessToken: 'l8uzmsSt16fkqrLuisPq0RSgP0ANrmQk2r2QnwllzwCCYnwiz1KXAr2BbUzgvrZmXlChADTifxIdHpraWfGs3lxAQIhf0EFqxwEAf14xMSyBWdQYBI7PwcOMZJ8JhcU7kgfnAsgCX77kLs2OENN+qgdB04t89/1O/w1cDnyilFU='
  // test123 
  // channelAccessToken: 'O+k0c0NaBbllEuRrErSXDkG4UloemoO97iEWK0EMr2qciHnGbv4ysKiQXQYk0O8HU8yCj4BAhjDGrJWK0rLePJew2i44lU7HwGMIn3sSxI7z7THEhxr5RgD+kTMD47XGiDiO0xvo/cCQ/fjSY9W4bAdB04t89/1O/w1cDnyilFU='
});

const uidList = [
  // 這有兩個好友
  'U12cf5a7d53acb513bbe5498aeb1b46a5',
  'Ud3c61dc859a83313398bb1192c0e65ed',
]
const message = {
  type: 'text',
  text: 'hello'
};
client.multicast(uidList, message)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  });