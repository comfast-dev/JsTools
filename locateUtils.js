/** 
 * Locate element using CSS OR XPATH
 * any$  - return first match 
 * any$$ - return all matches
 */
const isXpath = cssOrXpath => /^[\.\(]*\/.*/.test(cssOrXpath)
const fixXpath = xpath => xpath.replace(/^\//, "./")

const any$ = (cssOrXpath, parent = document) => !isXpath(cssOrXpath) ? parent.querySelector(cssOrXpath)
        : document.evaluate(fixXpath(cssOrXpath), parent, null, 9, null).singleNodeValue 

const any$$ = (cssOrXpath, parent = document) => {
    if(!isXpath(cssOrXpath)) return parent.querySelector(cssOrXpath)
    const query = document.evaluate(fixXpath(cssOrXpath), parent, null, 5, null);
    
    const results = []
    while (node = query.iterateNext()) results.push(node)
    return results
}
