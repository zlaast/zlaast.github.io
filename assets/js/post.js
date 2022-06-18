(function mobileListing() {
    const stickyTag = document.querySelector('.recent-posts-sticky');
    const excerpt = document.querySelectorAll('.post-excerpt');
    const postTitle = document.querySelectorAll('.post-title');
    const pageSearchResults = document.querySelector('.page-search-results');
    if (!stickyTag)
        return;
    if (detectMobile()) {
        postTitle.forEach(title => { title.style.fontSize = 'small'; });
        pageSearchResults.style.fontSize = 'small';
        document.querySelector('.sticky-container').remove();
        document.querySelectorAll('.post-image').forEach(image => {
            image.remove();
        });
    }
    else {
        excerpt.forEach(text => { text.style.fontSize = 'large'; });
        stickyTag.style.fontSize = 'large';
    }
})();
function createExternalLinks() {
    let eURLs = document.querySelector('.external-urls');
    let windowURL = window.location.href.replace(`${url}`, '');
    const windowURLLength = windowURL.split('/').slice(1, -1).length;
    const entry = Object.values(DB).filter(data => data.IURL().includes(`${windowURL}`));
    if (entry.length && entry[0].EURL().length && windowURLLength > 2) {
        let h4 = document.createElement('h4');
        h4.style.display = 'inline';
        h4.textContent = 'Links: ';
        eURLs.appendChild(h4);
        [...entry[0].EURL()].forEach((url) => {
            let link = url.split('@');
            let a = document.createElement('a');
            a.classList.add('ui', 'label');
            a.textContent = link[0];
            a.href = link[1];
            eURLs.appendChild(a);
        });
    }
}
function postDate() {
    let dateTag = document.querySelector('.post-date');
    let windowURL = window.location.href.replace(`${url}`, '');
    const entry = Object.values(DB).filter(data => data.IURL().includes(`${windowURL}`));
    if (entry.length) {
        let date = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(entry[0].DATE));
        dateTag.textContent = `Posted ${date}`;
    }
}
let postListingDate = (function () {
    const sticky = document.querySelector('.recent-posts-sticky');
    const postLinks = document.querySelectorAll('.post-link');
    const body = document.querySelector('body');
    let postLinksPositions = [];
    function getPostLinkPositions() {
        postLinksPositions = [];
        postLinks.forEach(link => {
            let linkURL = link.href.replace(url, '');
            let entry = Object.values(DB).filter(data => data.IURL().includes(`${linkURL}`));
            let postLinkTop = body.scrollTop + link.getBoundingClientRect().top - link.getBoundingClientRect().height / 2;
            if (entry.length) {
                let date = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(entry[0].DATE));
                postLinksPositions.push([postLinkTop, `${date}`]);
            }
        });
    }
    ;
    return function () {
        getPostLinkPositions();
        postLinksPositions.forEach(pos => {
            if (pos[0] - body.scrollTop < 0)
                sticky.textContent = `Posted ${pos[1]}`;
        });
    };
})();
function pageSearch() {
    const searchbox = document.querySelector('.page-searchbox');
    const output = document.querySelector('.page-search-results');
    let userInput = '';
    if (getCookie("search") !== undefined) {
        userInput = getCookie("search");
        searchbox.value = getCookie("search");
        deleteCookie("search");
    }
    else
        userInput = searchbox.value.toLowerCase();
    let results = Object.values(DB).filter(data => data.TITLE.toLowerCase().includes(userInput) ||
        data.SUBTITLE.toLowerCase().includes(userInput) ||
        data.SUBID.includes(userInput));
    output.textContent = '';
    for (let i = 0; i < results.length; i++) {
        const a = document.createElement('a');
        const li = document.createElement('li');
        a.href = `${url}${results[i].IURL()}`;
        if (results[i].TITLE == 'Project Euler')
            a.textContent = `${results[i].TITLE} ${results[i].SUBID} - ${results[i].SUBTITLE}`;
        else
            a.textContent = `${results[i].TITLE} - ${results[i].SUBTITLE}`;
        li.appendChild(a);
        output.appendChild(li);
    }
    const fullPostListing = document.querySelector('.full-post-listing');
    if (!fullPostListing) {
        if (userInput == '') {
            clearPageSearch();
        }
    }
}
function clearPageSearch() {
    document.querySelector('.page-search-results').textContent = '';
}
window.addEventListener('load', () => {
    pageSearch();
    if (document.querySelector('.post-list')) {
        if (!detectMobile()) {
            const body = document.querySelector('body');
            body.addEventListener('scroll', postListingDate);
            window.addEventListener('resize', postListingDate);
        }
    }
});
