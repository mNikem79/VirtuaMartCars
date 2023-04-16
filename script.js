// MENU ITEM
document.querySelector('.menu_item:first-child').addEventListener('click', function(ev) {
  ev.preventDefault()
  window.location.href = 'https://google.com'
})

// MENU MOBILE
document.querySelector('.menu_mob .trigger').addEventListener('click', function(ev) {
  ev.preventDefault()
  const menu = document.querySelector('.menu_mob')
  const wrapper = menu.querySelector('.menu_mob_wrapper')
  if (+menu.getAttribute('data-open')) {
    menu.setAttribute('data-open', 0)
    wrapper.style.display = 'none'
  } else {
    menu.setAttribute('data-open', 1)
    wrapper.style.display = 'block'
  }
})

// MODAL
function openModal() {
  document.querySelector('.modal').classList.add('visible')
}

function closeModal() {
  document.querySelector('.modal').classList.remove('visible')
}

document.querySelectorAll('.card_item .btn_order').forEach(i => i.addEventListener('click', openModal))
document.querySelector('.modal .modal_back').addEventListener('click', closeModal)
document.querySelector('.modal .modal_close').addEventListener('click', closeModal)

// SEND DATA
document.querySelector('.modal .btn_order').addEventListener('click', function() {
  const inputs = []
  document.querySelectorAll('.modal input').forEach(i => inputs.push({ name: i.name, value: i.value}))

  const q = new URLSearchParams({
    fio: inputs.find(i => i.name === 'fio').value,
    phone: inputs.find(i => i.name === 'phone').value,
  })

  fetch(`http://127.0.0.1:3000/form?${q}`, {
    mode: "no-cors",
  })
})