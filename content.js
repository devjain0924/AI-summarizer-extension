function getArticleText(){
    const article=document.querySelector("article"); 
    if(article){
        return article.innerText;
    }
    const paragraphs=Array.from(document.querySelectorAll("p"));
    return paragraphs.map((p) => p.innerText).join("\n");
}

// This function will extract the text from the article or paragraphs on the page
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if(req.type === 'GET_ARTICLE_TEXT'){
        const text = getArticleText();
        sendResponse({text});
        console.log('Content script loaded');
        // return true; // indicates that the response will be sent asynchronously
    }
});

