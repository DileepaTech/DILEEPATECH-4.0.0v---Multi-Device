/**
* @project_name Queen Amdi [WA Multi-device]
* @author BlackAmda <https://github.com/BlackAmda>
* @description A WhatsApp based 3ʳᵈ party application that provide many services with a real-time automated conversational experience
* @link <https://github.com/BlackAmda/QueenAmdi>
* @version 4.0.0
* @file  amdiModule.js - QueenAmdi bot module and Web WA connection

© 2022 Black Amda, ANTECH. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/

const amdiWA = require('queen_amdi_core/dist/amdiCore');

amdiWA.start().catch(() => {amdiWA.start()});

const events = async () => {
    const WASocket = await amdiWA.ev.on("open.connection");
    
    amdiWA.ev.on("connection.update", WASocket);
    amdiWA.ev.on("auth.update", WASocket);
    amdiWA.ev.on("messages.upsert", WASocket);
    
    amdiWA.ev.on("group.updates", WASocket);
    amdiWA.ev.on("call.manage", WASocket);
}
events();

const console_info = console.info
console.info = function() {
    if(!require("util").format(...arguments).includes("SessionEntry")){
        return console_info(...arguments)
    }
}