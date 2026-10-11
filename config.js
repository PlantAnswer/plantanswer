// 植物有解 網站設定：網站和訂單後台都讀這個檔案
window.PA_CONFIG = {
  // 部署 Google Apps Script 後拿到的「網頁應用程式網址」，貼在引號內
  endpoint: "https://script.google.com/macros/s/AKfycbz8O_RF3Kbz9hz6Zy0EP7XoarY6tQI3dIJrweAxNe5qOujWF9EJV2V5XTS7TscAIq4/exec",

  // 轉帳資訊（顯示在下單完成頁、訂單查詢與後台的付款通知）
  bank: {
code: "017",
name: "兆豐銀行",
account: "20310314146",
holder: "張淑惠"
   
  },
  payDays: 3,            // 幾天內完成轉帳
  lineId: "@688kumet",   // LINE 官方帳號
  shippingNote: "未滿 NT$3,000 運費 NT$100，滿額免運。"
};
