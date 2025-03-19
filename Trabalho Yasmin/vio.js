function openTab(contentId) {
    // Esconde todos os conteúdos das abas
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active'); // Remove a classe 'active' de todos os conteúdos
        content.setAttribute('aria-hidden', 'true'); // Adiciona um atributo 'aria-hidden' para melhorar a acessibilidade
    });

    // Remove a classe ativa das abas
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active'); // Remove a classe 'active' de todas as abas
        tab.setAttribute('aria-selected', 'false'); // Marca todas as abas como não selecionadas para a acessibilidade
    });

    // Exibe o conteúdo da aba clicada
    const selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active'); // Adiciona a classe 'active' ao conteúdo selecionado
    selectedContent.setAttribute('aria-hidden', 'false'); // Remove o atributo 'aria-hidden' para o conteúdo visível

    // Marca a aba clicada como ativa
    const activeTab = document.querySelector(`#${contentId.replace('content', 'tab')}`);
    activeTab.classList.add('active'); // Adiciona a classe 'active' à aba
    activeTab.setAttribute('aria-selected', 'true'); // Marca a aba como selecionada para acessibilidade
}

// Inicializa a primeira aba como ativa
document.addEventListener('DOMContentLoaded', function() {
    openTab('content1'); // Exibe o conteúdo da primeira aba por padrão
});
