

module.exports.appendHTML=function(mainHTML,subHTML,finder){
    const indexOfFinder=mainHTML.indexOf(finder)
    const sub=mainHTML.substring(0,indexOfFinder)+"<br>\n"+subHTML+mainHTML.substring(indexOfFinder)+"\n";
    return sub;
}

module.exports.aHTML=function(mainHTML,subHTML,finder){
    const indexOfFinder=mainHTML.indexOf(finder)
    // console.log("indexd:",mainHTML,subHTML,finder)
    // console.log("indexd:",indexOfFinder)
    const sub=mainHTML.substring(0,indexOfFinder)+subHTML+mainHTML.substring(indexOfFinder);
    // console.log(sub)
    return sub;
}

