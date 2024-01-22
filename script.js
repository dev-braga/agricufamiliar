// Adicione este script para controlar a visibilidade da seta
document.addEventListener("DOMContentLoaded", function () {
    var arrow = document.querySelector('.scroll-down-arrow');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        arrow.classList.add('hidden');
      } else {
        arrow.classList.remove('hidden');
      }
    });
  });

  const sr = ScrollReveal({
    duration: 1000, // Duração da animação em milissegundos
    origin: 'bottom', // A origem da animação (pode ser ajustada conforme necessário)
    distance: '20px', // Distância de deslocamento da animação
    easing: 'ease-in-out', // Easing da animação
    reset: true // Reinicia a animação em cada visualização
  });

  // Adiciona animação aos elementos com a classe 'scroll-animated'
  sr.reveal('.scroll-animated');