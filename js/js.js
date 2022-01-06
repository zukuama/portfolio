const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:damian.t.e.sena@hotmail.com?subject=Nombre: ${form.get('nombre')}   Correo: ${form.get('correo')}&body=${form.get('mensaje')}`)
    $buttonMailto.click()
}