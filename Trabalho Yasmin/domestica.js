function openTab(tabId) {
    // Esconde todos os conteúdos das abas
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Desmarca todas as abas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Marca a aba ativa
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');

    // Marca a tab como ativa
    const activeTabButton = document.getElementById('tab' + tabId.charAt(tabId.length - 1));
    activeTabButton.classList.add('active');
}
