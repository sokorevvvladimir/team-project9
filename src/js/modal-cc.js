(() => {
  const refs = {
    openModalBtn: document.querySelector('[data3-modal-open]'),
    closeModalBtn: document.querySelector('[data3-modal-close]'),
    modal: document.querySelector('[data3-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden3');
  }
})();