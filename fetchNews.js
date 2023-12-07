const axios = require('axios');

const fetchNews = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'us',
        category: 'business',
        apiKey: '4a0e337df2df442dac38476d8c9ea4d7',
      },
    });

    const articles = response.data.articles;
    articles.forEach((article) => {
      console.log(`Title: ${article.title}`);
      console.log(`Description: ${article.description}`);
      console.log(`URL: ${article.url}`);
      console.log('------------------------');
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
};

// Call the function to fetch news
fetchNews();
