function sendToServer() {
  let socket = new WebSocket("wss://javascript.info/article/websocket/demo/Data_Encrypt");

  socket.onopen = function(e) {
    alert("Sending to server");
    socket.send("DATA ENCODER");
  };
}