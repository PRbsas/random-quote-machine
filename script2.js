const getQuotes = document.getElementById('getQuote');
const getTweets = document.getElementById('getTweet');
let content = document.getElementById('quote-content');

function requestQuote() {
  const request = new XMLHttpRequest();
  request.open('GET', 'http://quotes.stormconsultancy.co.uk/random.json?callback?', true);

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      let data = JSON.parse(request.responseText);
      content.innerHTML = `<span>${data.quote}<br> - <strong>${data.author}</strong></span>`;
    }
  };
  request.onerror = () => {
    console.log('error');
  };
  request.send();
};

getQuotes.addEventListener('click', requestQuote, false);

getTweets.addEventListener('click', () => {
  let textTweet = `From prbsas\' quote machine: ${content.textContent}`;
  if (textTweet.length <= 140) {
    window.open('https://twitter.com/intent/tweet?text=' + textTweet);
  } else {
    alert('This is more than 140 characters. Try the next one!')
  }
}, false);
