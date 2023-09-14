fetch('http://localhost:3000/addresses', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "id":2,
        "userId": 1,
        "country": "США",
        "state": "state",
        "city": "Лос-Анджелес",
        "zipCode": "90001",
        "address": "123 Main St"
    })
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
