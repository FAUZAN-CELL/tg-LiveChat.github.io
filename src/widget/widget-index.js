import { h, render } from 'preact';
import Widget from './widget';
import {defaultConfiguration} from './default-configuration';

if (window.attachEvent) {
    window.attachEvent('onload', injectChat);
} else {
    window.addEventListener('load', injectChat, false);
}

function injectChat() {
    if (!window.tgId) {
        console.error('Please set window.tgId (see example at github.com/tg-LiveChat)');
    } else {
        let root = document.createElement('div');
        root.id = 'tgRoot';
        document.getElementsByTagName('body')[0].appendChild(root);
        const server = window.tgServer || 'https://telegram-livechat.herokuapp.com';
        const iFrameSrc = server + '/chat.html';
        const host = window.location.host || 'unknown-host';
        const conf = { ...defaultConfiguration, ...window.tgCustomizations };

        render(
            <Widget tgId={window.tgId}
                    host={host}
                    isMobile={window.screen.width < 500}
                    iFrameSrc={iFrameSrc}
                    conf={conf}
            />,
            root
        );

        try {
            const request = new XMLHttpRequest();
            request.open('POST', server + '/usage-start?host=' + host);
            request.send();
        } catch (e) { /* Fail silently */ }

    }

}
