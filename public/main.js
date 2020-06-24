const ws = new WebSocket(`ws://localhost:3000`);
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
    ws.send(text.value);
    log.innerHTML += generateDate() + " You: " + text.value + "<br>";
    text.value =""
};
ws.onmessage = (event) => {
    log.innerHTML += generateDate() + " " + event.data + "<br>";
};
ws.onerror = (error) => {
    console.log("Server error message: ", error.message);
};