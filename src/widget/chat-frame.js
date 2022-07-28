import { h, Component } from 'preact';

export default class ChatFrame extends Component {

    shouldComponentUpdate() {
        // jangan dirender ulang melalui diff:
        return false;
    }

    render({tgId, host, iFrameSrc, isMobile, conf},{}) {
        let dynamicConf = window.tgOnOpen || {}; // konfigurasi ini dimuat ketika bingkai obrolan dibuka
        let encodedConf = encodeURIComponent(JSON.stringify({...conf, ...dynamicConf}));
        return (
            <iframe src={iFrameSrc + '?id=' + tgId + '&host=' + host + '&conf=' + encodedConf }
                    width='100%'
                    height={isMobile ? '94%' : '100%'}
                    frameborder='0' >
            </iframe>
        );
    }
}
