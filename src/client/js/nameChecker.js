function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    /*let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }*/
    if (!inputText) {
        alert("Please write a text or an url")
        return -1
    }
    return 0
}

export { checkForName }
