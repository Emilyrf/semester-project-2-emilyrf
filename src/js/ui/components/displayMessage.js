export default function displayMessage(
  type,
  message,
  target,
  showRefreshLink = false,
  showLoginLink = false,
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
    if (showLoginLink) {
      messageElement.innerHTML = `
      ${message} <a href="/profile/login/" id="#loginLink">Log in</a> 
    `;
    const loginLink = messageElement.querySelector('#loginLink');
    
    if (loginLink) {
      loginLink.addEventListener('click', (event) => {
        event.preventDefault();
      });
    }

    }
  } else {
    messageElement.textContent = message;
  }

  container.innerHTML = '';
  container.appendChild(messageElement);
}
