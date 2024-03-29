const calcReadTime = () => {
    const paragraphs = document.getElementsByTagName('p');
    let wordCount: number;
    for (let i = 0; i < 20; i++) {
        let p = paragraphs[i];
        let pContent = p.innerHTML;
        wordCount += pContent.split(" ").length;
    }
    wordCount /= 130;
    let readTime = Math.round(wordCount);
    return readTime;
}

export default calcReadTime;