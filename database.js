// database.js
document.addEventListener('DOMContentLoaded', () => {
    const contentSections = document.querySelectorAll('.content');
    contentSections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#f5f5f5';
        });
        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = '#fff';
        });
    });
});
