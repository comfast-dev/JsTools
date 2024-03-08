/** Locates element using any locator: CSS or XPATH, parent node can be passed as second argument */
const any$ = (cssOrXpath, parent = document) => {
    return /^[\.\(]*\/.*/.test(cssOrXpath)
        ? document.evaluate(cssOrXpath.replace(/^\/, "./"), parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        : parent.querySelector(cssOrXpath);
}
