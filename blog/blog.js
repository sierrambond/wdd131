const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]

const articlesContainer = document.getElementById('articles-container');

articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('article'); 

    const articleDetails = document.createElement('div');
    articleDetails.classList.add('article-details');
    articleDetails.innerHTML = `
        <p class="date">${article.date}</p>
        <p class="age">Age: ${article.ages}</p>
        <p class="genre">Genre: ${article.genre}</p>
        <p class="rating">Rating: ${article.stars}</p>
    `;

    const articleContent = document.createElement('div');
    articleContent.classList.add('article-content');
    articleContent.innerHTML = `
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p class="description">${article.description}</p>
    `;

    const articleFilters = document.createElement('aside');
    articleFilters.classList.add('article-filters');
    articleFilters.innerHTML = `
        <p>Filters for this book will go here.</p>
    `;

    const articleWrapper = document.createElement('div');
    articleWrapper.classList.add('article-wrapper');

    const detailsColumn = document.createElement('div');
    detailsColumn.classList.add('details-column');
    detailsColumn.appendChild(articleDetails);

    const contentColumn = document.createElement('div');
    contentColumn.classList.add('content-column');
    contentColumn.appendChild(articleContent);

    const filtersColumn = document.createElement('div');
    filtersColumn.classList.add('filters-column');
    filtersColumn.appendChild(articleFilters);

    articleWrapper.appendChild(detailsColumn);
    articleWrapper.appendChild(contentColumn);
    articleWrapper.appendChild(filtersColumn);

    articlesContainer.appendChild(articleWrapper);
});