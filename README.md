# ReactをS3に静的ホスティングして、API GateWay を使って、Lambdaをコールして、Line Notifyにメッセージを送信

## set up

下記のURLを設定したURLに

``` 
App.tsx

await fetch('https://xxxxxxxx.execute-api.ap-northeast-1.amazonaws.com/<api-path>',
    {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({message: message}),
    }
);

```