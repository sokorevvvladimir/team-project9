(() => {
  const refs = {
    openModalBtn: document.querySelector('[data4-modal-open]'),
    closeModalBtn: document.querySelector('[data4-modal-close]'),
    modal: document.querySelector('[data4-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden4');
  }
})();