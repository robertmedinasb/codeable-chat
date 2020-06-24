const ws = new WebSocket(`ws://localhost:3000`);
let username = prompt("Hello!, what's your name?");
Notification.requestPermission().then(function(result) {
    console.log(result);
  });
const text = `${username} is connected`;
ws.onopen = () =>  new Notification('To do list', { body: text });
const generateDate = () => {
    return new Date().toLocaleTimeString("en-US", {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
};
const log = document.getElementById("log");
document.querySelector("button").onclick = () => {
    let text = document.getElementById("text");
    let message = {
        text: text.value,
        username: username
    }
    ws.send(JSON.stringify(message));
    log.innerHTML += generateDate() + " " + message.username + ": " + message.text + "<br>";
    text.value =""
};
ws.onmessage = (event) => {
    log.innerHTML += generateDate() + " " + event.data + "<br>";
};
ws.onerror = (error) => {
    console.log("Server error message: ", error.message);
};