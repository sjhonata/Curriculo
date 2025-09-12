// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal para visualização de PDF
const modal = document.getElementById('pdfModal');
const modalClose = document.querySelector('.modal-close');
const pdfViewer = document.getElementById('pdfViewer');

// Função para abrir o modal com o PDF
function openPdfModal(pdfPath) {
    // Em dispositivos móveis, tentar abrir em uma nova aba primeiro
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open(pdfPath, '_blank');
        return;
    }
    
    // Para desktop, usar o modal
    pdfViewer.src = pdfPath;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fechar o modal quando clicar no X
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    pdfViewer.src = '';
    document.body.style.overflow = ''; // Restaura a rolagem da página
});

// Fechar o modal quando clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        pdfViewer.src = '';
    }
});

// Atualização dinâmica do ano no rodapé
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
