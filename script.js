
const btn = document.querySelector('#faleConosco');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#fechar');
const form = document.querySelector('#formulario');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
  form.style.display = 'none';
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  form.style.display = 'grid';
});