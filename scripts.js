
function showContent(discipline) {
    let contents = document.querySelectorAll('.discipline-content');
    contents.forEach(content => content.classList.remove('active'));

    let selectedContent = document.getElementById(discipline);
    selectedContent.classList.add('active');
}
