document.addEventListener('DOMContentLoaded', () => {
    // 1. Funcionalitat del menú desplegable per a mòbils
    const botoMenu = document.getElementById('boto-menu');
    const navegacio = document.getElementById('navegacio');

    if (botoMenu && navegacio) {
        botoMenu.addEventListener('click', () => {
            navegacio.classList.toggle('actiu');
        });
    }

    // 2. Actualització automàtica de l'any al footer
    const elementAny = document.getElementById('any-actual');
    if (elementAny) {
        elementAny.textContent = new Date().getFullYear();
    }
});