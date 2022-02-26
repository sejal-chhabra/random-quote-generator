const text=document.querySelector('#quote');
const author=document.querySelector('.author');
const nextbtn=document.querySelector('#generate');
const getQuote= async()=>{
    const res= await fetch('https://type.fit/api/quotes');
    const quotes= await res.json();
    const num= Math.floor(Math.random()*quotes.length);
    const item = quotes[num];
    const quote= item.text;
    const authorname=item.author;
    text.innerText=quote;
    author.innerText=authorname;
} 
nextbtn.addEventListener('click',getQuote)  
getQuote()
