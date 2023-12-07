const fetch = require('node-fetch');

const fetchNews = async () => {
  const apiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4a0e337df2df442dac38476d8c9ea4d7';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok') {
      console.log('Top Business Headlines (US):');
      data.articles.forEach((article, index) => {
        console.log(`\n${index + 1}. ${article.title}`);
        console.log(`   ${article.description}`);
        console.log(`   Read more: ${article.url}\n`);
      });
    } else {
      console.error('Error:', data.message);
    }
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
};

fetchNews();
