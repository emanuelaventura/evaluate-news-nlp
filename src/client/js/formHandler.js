function handleSubmit(event) {
    event.preventDefault()
    console.log("I am inside the handlesubmit")

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.checkForName(formText) == 0) {
        console.log("inside ")
        postData('http://localhost:8081/sendUrlOrText', {'urlOrText':formText} )
        .then(function(res){

            console.log("::: Form Submitted :::")
            //fetch('http://localhost:8080/test')
            //.then(res => res.json())
            //.then(function(res) {
                document.getElementById('results').innerHTML = JSON.stringify(res)
            //})
        })
    }
}

export { handleSubmit }

const postData = async ( url = '', data = {})=>{
    console.log(data);
    console.log(JSON.stringify(data))
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
       body: JSON.stringify(data), 
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}


