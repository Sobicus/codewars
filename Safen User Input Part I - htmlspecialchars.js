/*
Safen User Input Part I - htmlspecialchars
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business
website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger.
Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting).
This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
Good luck :D
 */

function htmlspecialchars(formData) {
    const hackerInjectingOne = '&lt;';
    const hackerInjectingTwo = '&gt;';
    const hackerInjectingThree = '&quot;';
    const hackerInjectingFour = '&amp;';
    while (formData.includes(hackerInjectingOne, hackerInjectingTwo, hackerInjectingThree, hackerInjectingFour)) {
       formData=formData.replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"').replace('&amp;', '&')
    }
    // return formData.replace(hackerInjectingOne, '<').replace(hackerInjectingTwo, '>').replace(hackerInjectingThree, '"').replace(hackerInjectingFour, '&')
    // function test(a){
    //     while(str.includes('&lt;')){
    //         console.log(1)
    //     }
    //     return
    // }
    return formData
}

console.log(htmlspecialchars("&lt;h2&gt;Hello World&lt;/h2&gt;"))

function htmlspecialchars(formData) {
    return formData.replace('<','&lt;').replace('>','&gt;').replace('"','&quot;').replace('&','&amp;')
}

function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}