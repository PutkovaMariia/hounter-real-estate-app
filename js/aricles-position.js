document.addEventListener('DOMContentLoaded', function () {
  const previewContainer = document.querySelector('.articles__preview');
  const articlesContainer = document.querySelector('.articles');
  let article = articlesContainer.querySelector(':scope > article');

  function swapArticles(previewArticle) {
    previewContainer.removeChild(previewArticle);
    articlesContainer.removeChild(article);

    articlesContainer.appendChild(previewArticle);
    previewContainer.appendChild(article);

    previewArticle.classList.remove('article--preview');
    article.classList.add('article--preview');

    // Swap image classes.
    const previewImg = previewArticle.querySelector('img');
    const articleImg = article.querySelector('img');
    if (previewImg) {
      previewImg.classList.remove('article--preview__img');
      previewImg.classList.add('article__img');
    }
    if (articleImg) {
      articleImg.classList.remove('article__img');
      articleImg.classList.add('article--preview__img');
    }

    // Swap title classes.
    const previewTitle = previewArticle.querySelector('.article__title');
    const articleTitle = article.querySelector('.article__title');
    if (previewTitle) {
      previewTitle.classList.remove('subtitle');
      previewTitle.classList.add('heading-3');
    }
    if (articleTitle) {
      articleTitle.classList.remove('heading-3');
      articleTitle.classList.add('subtitle');
    }

    // Toggle info padding.
    const previewInfo = previewArticle.querySelector('.article__info');
    const articleInfo = article.querySelector('.article__info');
    if (previewInfo) {
      previewInfo.classList.remove('article__info--padding');
    }
    if (articleInfo) {
      articleInfo.classList.add('article__info--padding');
    }

    article = previewArticle;
  }

  previewContainer.addEventListener('click', function (event) {
    const clickedArticle = event.target.closest('.article');
    if (!clickedArticle) return;
    if (clickedArticle.classList.contains('article--preview')) {
      swapArticles(clickedArticle);
    }
  });

// "More articles" button logic.
  const moreBtn = document.getElementById('more-articles-btn');
  const template = document.getElementById('extra-articles-template');
  const extraArticlesList = Array.from(template.content.cloneNode(true).children);

  moreBtn.addEventListener('click', function () {
    const countToAdd = 3;
    const articlesToAdd = extraArticlesList.splice(0, countToAdd);

    const fragment = document.createDocumentFragment();
    articlesToAdd.forEach(article => {
      fragment.appendChild(article);
    });
    previewContainer.appendChild(fragment);

    if (extraArticlesList.length === 0) {
      moreBtn.style.display = 'none';
    }
  })
})
