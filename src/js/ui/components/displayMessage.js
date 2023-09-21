export default function displayMessage(
  type,
  message,
  target,
  showRefreshLink = false,
) {
  const container = document.querySelector(target);

  const messageElement = document.createElement('div');
  messageElement.classList.add('alert', `alert-${type}`);

  if (showRefreshLink) {
    messageElement.innerHTML = `
      ${message} <a href="#" id="refreshLink">Refresh</a>
    `;

    const refreshLink = messageElement.querySelector('#refreshLink');
    if (refreshLink) {
      refreshLink.addEventListener('click', (event) => {
        event.preventDefault();
        location.reload();
      });
    }
  } else {
    messageElement.textContent = message;
  }

  container.innerHTML = '';
  container.appendChild(messageElement);
}
