
async function searchBooks() {

    const searchInput = document.getElementById("searchInput");
    const results = document.getElementById("results");

    const query = searchInput.value.trim();

    if (query === "") {
        results.innerHTML = `
            <p class="message">Please enter a book title.</p>
        `;
        return;
    }

    results.innerHTML = `
        <p class="message">Searching...</p>
    `;

    try {

        const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`
        );

        const data = await response.json();

        results.innerHTML = "";

        if (!data.items) {
            results.innerHTML = `
                <p class="message">boook found.</p>
            `;
            return;
        }

        data.items.forEach(book => {

            const info = book.volumeInfo;

            const title = info.title || "Unknown Title";

            const author = info.authors
                ? info.authors.join(", ")
                : "Unknown Author";

            const description = info.description
                ? info.description.substring(0, 120) + "..."
                : "No description available.";

            const image = info.imageLinks
                ? info.imageLinks.thumbnail
                : "https://via.placeholder.com/300x400?text=No+Cover";

            results.innerHTML += `
                <div class="book">

                    <img src="${image}" alt="${title}">

                    <h2>${title}</h2>

                    <p>
                        <strong>Author:</strong> ${author}
                    </p>

                    <p>${description}</p>

                </div>
            `;
        });

    } catch (error) {

        results.innerHTML = `
            <p class="message">
                Something went wrong. Please try again.
            </p>
        `;

        console.error(error);
    }
}




