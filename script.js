document.addEventListener("DOMContentLoaded", () => {
  const chatbox = document.getElementById("chatbox");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatBody = document.getElementById("chat-body");

  if (!chatbox) return; // only run chat code on chat page

  appendWelcomeMessage();

  function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    const time = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });

    chatBody.innerHTML += `
      <div class="user-message">
        <p>${msg}</p><small>${time}</small>
      </div>
    `;
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      chatBody.innerHTML += `
        <div class="bot-message">
          <p>✅ Got your message: <b>${msg}</b></p>
          <p>💬 For faster reply, chat directly on WhatsApp:</p>
          <a href="https://wa.me/9866952500?text=${encodeURIComponent(msg)}"
             target="_blank"
             style="display:inline-block;margin-top:6px;padding:8px 12px;background:#25D366;border-radius:8px;color:white;font-weight:bold;text-decoration:none;">
             📲 Open WhatsApp Chat
          </a>
          <small>${time}</small>
        </div>
      `;
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 600);
  }

  function appendWelcomeMessage() {
    const time = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
    chatBody.innerHTML += `
      <div class="bot-message">
        <p>👋 Welcome to <b>Top-Up X Support!</b></p>
        <p>How can we help you today?</p>
        <p>📲 You can also contact us on WhatsApp for instant response:</p>
        <a href="https://wa.me/9866952500?text=Hello!%20I%20need%20help%20with%20a%20top-up"
           target="_blank"
           style="display:inline-block;margin-top:8px;padding:8px 12px;background:#25D366;border-radius:8px;color:white;font-weight:bold;text-decoration:none;">
           ✅ Chat on WhatsApp
        </a>
        <small>${time}</small>
      </div>
    `;
  }

  if (chatSend) chatSend.addEventListener("click", sendMessage);
  if (chatInput) chatInput.addEventListener("keypress", e => e.key === "Enter" && sendMessage());
});
