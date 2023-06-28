function checkForEmptyText(inputText) {
    console.log("::: Running checkForName :::", inputText);
    
    if (!inputText) {
        alert("Please write a text or an url")
        return -1
    }
    return 0
}

export { checkForEmptyText }
