import io from "socket.io-client";

class WebSocketService {
  constructor(url) {
    this.url = url;
    this.socket = null;
  }

  connect() {
    this.socket = io(this.url);

    this.socket.on("connect", () => {
      console.log("Connected to Hume WebSocket");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from Hume WebSocket");
    });

    this.socket.on("connect_error", (error) => {
      console.error("Connection Error:", error);
    });
  }

  on(event, callback) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  emit(event, data) {
    if (this.socket) {
      this.socket.emit(event, data);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default WebSocketService;
