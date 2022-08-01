function getArticleGenerator(articles) {
    // return the inner function with articles array as it's closure
    return () => {
        if (articles.length > 0) {
            document
                .querySelector('#content')
                .appendChild(createElement('article', articles.shift()));
        }
    };

    // create function to create a new element with content
    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
