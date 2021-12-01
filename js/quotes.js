const quotes = [
    {
        quote: "It ain't over till it's over.",
        author: "author" 
    },
    {
        quote: "Only I can change my life, No one can do it for me.",
        author: "author" 
    },
    {
        quote: "Better the last smile than the first laughter.",
        author: "author" 
    },
    {
        quote: "We can give advice, but we cannot give conduct.",
        author: "author" 
    },
    {
        quote: "Success doesn't come overnight.",
        author: "author" 
    },
    {
        quote: "Better late than never.",
        author: "author" 
    }
    ,
    {
        quote: "Slow and steady win the race.",
        author: "author" 
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 0~1 사이의 소수를 반환하기 때문에 배열의 크기를 곱해준다.
// 소수점 아랫자리를 없애기 위해 floor(내림) 또는 round(반올림) 사용
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
