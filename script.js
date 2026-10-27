const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const noticeList = document.getElementById("noticeList");
const noResults = document.getElementById("noResults");
const noticeCount = document.getElementById("noticeCount");

function searchNotices() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    const cards = noticeList.querySelectorAll(".notice-card");
    let visibleCount = 0;

    cards.forEach(function (card) {
        const text = card.textContent.toLowerCase();
        const category = card.dataset.category;

        const matchesSearch = text.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        const isVisible = matchesSearch && matchesCategory;

        card.hidden = !isVisible;

        if (isVisible) {
            visibleCount++;
        }
    });

    noResults.hidden = visibleCount !== 0;

    noticeCount.textContent =
        visibleCount + (visibleCount === 1 ? " notice" : " notices");
}

searchInput.addEventListener("input", searchNotices);
categoryFilter.addEventListener("change", searchNotices);

// Set the correct initial notice count.
searchNotices();
