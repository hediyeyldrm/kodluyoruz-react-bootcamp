// GET 
// fetch metoduna istek yapacağımız URL'yi parametre olarak ekledim.
// res yani response durumunun başarılı bir şekilde gelip gelmediğini kontrol ettim. 
// Ve gelen data bilgilerini console'a yazdırdım.
fetch('https://reqres.in/api/users')
    .then(res => {
        if (res.ok) {
            console.log("GET request successful")
        } else {
            console.log("GET request unsuccessful")
        }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// POST 
// POST isteği ile verileri server'a gönderdim.
// POST isteğinin başarılı  bir şekilde olup olmadığını kontrol ettim.
fetch('https://reqres.in/api/users', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "name": "morpheus",
            "job": "leader"
        }
    )
})
    .then(res => {
        if (res.ok) {
            console.log("POST request successful")
        } else {
            console.log("POST request unsuccessful")
        }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))

// PUT 
fetch('https://reqres.in/api/users/2', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        {
            "name": "morpheus",
            "job": "leader"
        }
    )
})
    .then(res => {
        if (res.ok) {
            console.log("PUT request successful")
        } else {
            console.log("PUT request unsuccessful")
        }
        return res
    })
    .then(res => res.json())
    .then(data => console.log(data))

// DELETE 
// id değeri 2 olan user nesnesini sildi.
// Silme işleminin başarılı bir şekilde olup olmadığını kontrol ettim.
fetch('https://reqres.in/api/users/2', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    },
})
    .then(res => {
        if (res.ok) {
            console.log("DELETE request successful")
        } else {
            console.log("DELETE request unsuccessful")
        }
        return res
    })
    .then(res => console.log(res))