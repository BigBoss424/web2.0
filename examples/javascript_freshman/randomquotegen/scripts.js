const newQuoteButton = document.querySelector('#js-new-quote');
const spinner = document.querySelector('#js-spinner');
const twitterButton = document.querySelector('#js-tweet');

newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote(){
    const err = "Failed to fetch new quote";

   try{
    const response = await fetch(endpoint);

    if(!response.ok){
        throw Error(response.statusText);
    }

    const json = await response.json();
    displayQuote(json.message);
    setTweetButton(json.message);
   }// end try block
   catch (err){
        console.log(err);
        alert('Failed to fetch new quote');
   }//end catch
    // console.log("quote button was clicked");
}

//Display quote on screen 
function displayQuote(quote){
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

//Twitter button
function setTweetButton(quote){
    twitterButton.setAttribute('href', 'https://twitter.com/share?text=${quote} - Donald Trump');
}