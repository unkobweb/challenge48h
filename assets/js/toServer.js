function sendToServer() {
  let socket = new WebSocket("wss://javascript.info/article/websocket/demo/Data_Encrypt");

  socket.onopen = function(e) {
    alert("Sending to server");
    socket.send(`-----BEGIN AES128 PRIVATE KEY-----
    MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIK
    97vFdIgdT+wtcR0q9rSwtqNLaQ9NoNMdEmlMnxIc0v4QW5b7YVA
    ukYa8QTq34jKadhP94L3XetAtie5yjiH6/iYdLOiHAriVN4YTBI
    5ypfvuNESDsZVv3Baj0XU2ybCko0pEarqu4B4D2OPCaNUuGHlRR
    K7b+O20DAg1tqeCjAgMBAAECgYEAgLqiWeRpbO2zcSwaxeycZbN
    PVsyxm6Yu0UUq7lVpm/bD2zrwW0iE+DGSPNzBm2nukt7l5ORhVp
    1AiTUeoMwjx7J/3XKOmbIqk3jG3FOHhbEns2H4ma0mQ25gIwpAI
    vRBfNOgf9J+ynj95fG3erH2BJA+jYmTTszKg1zxDE6JvoECQQDx
    W/IlmQCjnblGKfdSCqM1FtHcA4DGkrH1CNLUY/kP3jHdiCuc655
    rJHLOjLVuEJ58pLdC1/Y5OBPoI5ByKyvPAkEAiqw308K5IuMT2S
    XapLhDbwWQ7eElXJpr+RY4qZP4Uq8IaZRVKnyKstw0PgbTemggG
    ECvHU3hROGDu0GZ/iMO7QJBANxdEoz5UPgRvWMuVbz2MWT7XMf/
    +sdSkGAkmjmIvZGbUPPuq8Mt7Qnt0VR8a/n9+nXa/edtvkUnyiU
    cs3lJqUkCQGqKO+4O6cxa6BHqWlw5UV3HyfxpARpvbcsWfnwSuj
    NUVMNA+lnFC461TdHlzq55t0bK039RKWSRWnMQyK4O41UCQAOjy
    plW4xM+Ad6gwa39mR+ysenzVOPAaDb6pHJx86razvVHR1LtP9bV
    niI7glaP9QKrUJUgHXF9wBXL8ExpzJk=
    -----END RSA PRIVATE KEY-----`);
  };
}