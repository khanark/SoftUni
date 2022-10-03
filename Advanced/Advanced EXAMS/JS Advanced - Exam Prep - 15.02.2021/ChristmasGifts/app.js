function solution() {
  const input = document.querySelector('.card div input');
  const listOfGifts = document.querySelector('.card:nth-child(2) ul');
  const sentGifts = document.querySelector('.card:nth-child(3) ul');
  const discardtedGifts = document.querySelector('.card:nth-child(4) ul');
  const addBtn = document.querySelector('.card div button');

  addBtn.addEventListener('click', onAdd);

  function onAdd() {
    const li = document.createElement('li');
    li.classList.add('gift');
    li.textContent = input.value;

    const sendBtn = document.createElement('button');
    sendBtn.textContent = 'Send';
    sendBtn.id = 'sendButton';

    const discardBtn = document.createElement('button');
    discardBtn.textContent = 'Discard';
    discardBtn.id = 'discardButton';

    li.appendChild(sendBtn);
    li.appendChild(discardBtn);
    listOfGifts.appendChild(li);

    //sort the gifts
    Array.from(listOfGifts.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((gift) => listOfGifts.appendChild(gift));

    sendBtn.addEventListener('click', onSend);
    discardBtn.addEventListener('click', onDiscard);

    input.value = '';
  }

  function onSend(e) {
    const currentLi = e.target.parentNode;
    sentGifts.appendChild(currentLi);
    Array.from(currentLi.children).forEach((child) => child.remove());
  }

  function onDiscard(e) {
    const currentLi = e.target.parentNode;
    discardtedGifts.appendChild(currentLi);
    Array.from(currentLi.children).forEach((child) => child.remove());
  }
}
