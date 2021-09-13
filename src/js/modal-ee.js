(() => {
  const refs = {
    openModalBtn: document.querySelector('[data5-modal-open]'),
    closeModalBtn: document.querySelector('[data5-modal-close]'),
    modal: document.querySelector('[data5-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden5');
  }
})();