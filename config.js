// 植物有解 網站設定：網站和訂單後台都讀這個檔案
window.PA_CONFIG = {
  // 部署 Google Apps Script 後拿到的「網頁應用程式網址」，貼在引號內
  endpoint: "https://script.google.com/macros/s/AKfycbz8O_RF3Kbz9hz6Zy0EP7XoarY6tQI3dIJrweAxNe5qOujWF9EJV2V5XTS7TscAIq4/exec",

  // 轉帳資訊（顯示在下單完成頁、訂單查詢與後台的付款通知）
  bank: {
    code: "822",
    name: "中國信託",
    account: "129-533-076-754",
    holder: "鄭希婭"
  },
  payDays: 3,            // 幾天內完成轉帳
  lineId: "@795smcix",   // LINE 官方帳號
  shippingNote: "未滿 NT$3,000：店到店運費 NT$70、宅配運費 NT$130；滿額免運。"
};
