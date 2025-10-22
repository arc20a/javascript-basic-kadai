// mdn.js
const today = new Date();            // 現在日時を取得
const year  = today.getFullYear();   // 年 (例: 2024)
const month = today.getMonth() + 1;  // 月 (0〜11なので +1 が必要)
const day   = today.getDate();       // 日

console.log(`${year}年${month}月${day}日`);
