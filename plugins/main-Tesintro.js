let handler = async (m, { conn }) => await conn.sendMessage(m.chat, {text: `
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
Silahkan isi Data Di Bawah ini 
untuk memperkenalkan diri kamu
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
🚀  Nama :
🚀  Umur :
🚀  nama tiktok :
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
Selamat Bergabung 
Patuhi Peraturan Di Group ini
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰ 
`}, { quoted: m})
handler.customPrefix = /^(intro ngab|intro|member baru|new member|intro kak|intro dek)$/i
handler.command = new RegExp

module.exports = handler
 
