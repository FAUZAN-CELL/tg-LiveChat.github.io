# FAUZAN-CELL

Provides **Free** live chat widget linked to your Telegram messenger.
![](docs/telegram-demo.gif)

### Embed Live Chat in your website with these 2 simple steps

1. Open [Telegram messenger](https://telegram.org/), search for `@tgLiveChatBot` and hit `/start` to get your chat ID.

  <p align="center"> <img src="docs/bot-start.gif"/> </p>

2. Paste this snippet right before the closing body tag of every page where you want the chat to appear 
(Don't forget to add your actual chat ID). 

```html
<script> window.tgId = <Your chat ID> </script>
<script id="tg" type="text/javascript" src="https://telegram-livechat.herokuapp.com/js/widget.js"></script>
```

*Note: replying to a specific message should be used to respond to that specific visitor. Sending a standard message will broadcast to all connected chat clients (You might find it easier to use if you have only one active conversation)*

<p align="center"> <img src="docs/hello.jpg"/> </p>

I have tried to keep the footprint as small as possible. 
  - [Preact](https://github.com/developit/preact)
  - The widget injection script is about 5KB gziped and executes only after the host page finished loading ('onload' event).
  - The chat iframe will only be loaded if the user interacts with the chat widget (currently about 40KB gziped).
  
![](docs/footprint.png)
 
Since the hosting cost are quite minimal (server, domain, cdn), I plan to keep this service 100% free (no ads also!). The only thing I might use it for, is testing new technologies from other projects I work on.

### Deploy your own Live Chat instance (The hard way)
1. Talk to Telegram [@BotFather](https://t.me/botfather), create a new bot and get its API Token.

2. Deploy this repo to your own chat server. 
  - Clone it locally and install or if you use Heroku, fork this repository and point the new app to it.
  - Set an .env varible named `TELEGRAM_TOKEN` with the value you got from @BotFather

3. Point the bot webhook to your bot server by making a `GET` request to the following url
  `https://api.telegram.org/bot<TOKEN>/setWebhook?url=<Server URL>/hook`
  (Don't forget to replace with your token and server url)

4. Open a chat with your bot and hit `/start` to get your chat ID

5. Embed this sinpet in your website
  ```html
  <script> 
    window.tgId = <Your chat ID>
    window.tgIFrameSrc = <Server URL> + '/chat.html'
  </script>
  <script id="tg" type="text/javascript" src="<Server URL>/js/widget.js"></script>
  ```
6. :tada:
