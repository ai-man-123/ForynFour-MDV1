
let fs = require('fs')
let handler = async (m, { conn }) => {

let d = global.dana
let p = global.pulsa
let o = global.ovo
let g = global.gopay
let s = global.shopay


let ehe = `┌─── 〔 D O N A S I 〕 ───
❍ Bantu donasi yuk supaya bot aktif selalu
❍ Donasi untuk Upgrade fitur lebih bagus

Kalian bisa mendukung bot ini dengan cara 

┌〔 PAYMANT 〕
├📌 Pulsa : 0102810046
└────
Berapapun donasi kalian akan sangat berarti buat ku 👍

Arigatou!

Contact person Owner:
 ࿑ Owner wa.me/60102810046( pemilik bot )`
  conn.sendButtonImg(m.chat, fotonya1, ehe, wm, 'Owner', '.owner', m) 
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi|donate)$/i

module.exports = handler


