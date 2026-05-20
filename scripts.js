function printRecipe() {
    window.print();
}

// Optionally, focus the print button for accessibility when arriving on recipe pages
window.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.btn-print');
    if (btn) btn.setAttribute('aria-label', '匯出此頁為 PDF 或列印');
});
