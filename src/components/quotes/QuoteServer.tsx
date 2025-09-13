import QuoteContent from "./QuoteContent";


async function getInitialQuote() {
    const res = await fetch("http://localhost:3000/api/phrase", {
      cache: "no-cache",
    });
    return res.json();
}

export default async function QuoteServer () {
    const initialQuote = await getInitialQuote();
    return (  
      <QuoteContent initialQuote={initialQuote}/>
  )
}
