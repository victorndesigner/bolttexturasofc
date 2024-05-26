function filterPosts(searchText) {
    const postTitles = document.querySelectorAll('.postagem h4');

    postTitles.forEach(title => {
        const postTitleText = title.innerText.toLowerCase();
        const postContainer = title.parentElement;

        if (postTitleText.includes(searchText.toLowerCase())) {
            postContainer.style.display = '';
        } else {
            postContainer.style.display = 'none';
        }
    });
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchText = document.getElementById('searchInput').value;
    filterPosts(searchText);
});

document.getElementById('searchInput').addEventListener('input', function() {
    const searchText = this.value;
    filterPosts(searchText);
});
