window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
document.getElementById('typeFilter').addEventListener('change', filterPosts);
document.getElementById('searchInput').addEventListener('input', filterPosts);

function filterPosts() {
    const type = document.getElementById('typeFilter').value.toLowerCase();
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.shlong-card');

    cards.forEach(card => {
        const cardType = card.getAttribute('data-type')?.toLowerCase() || '';
        const cardContent = card.textContent.toLowerCase();

        if ((type === 'all' || cardType === type) && cardContent.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


