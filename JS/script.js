const email = new URLSearchParams()
email.append('email', 'h.sarhan@innopolis.university')

fetch('https://fwd.innopolis.app/api/hw2?' + email.toString())
.then(identifier => identifier.json())
.then(data => {
    fetch('https://fwd.innopolis.university/api/comic?id='+ data)
    .then(response => response.json())
    .then(Img => {

        const date = new Date(Img.day, Img.month - 1, Img.year)

        const imageElement = document.createElement('img')
        imageElement.src = Img.img
        imageElement.alt = Img.alt

        const titleElement = document.createElement('h2')
        titleElement.textContent = Img.safe_title

        const dateElement = document.createElement('p')
        dateElement.textContent = date.toLocaleDateString("en-UK")

        const container = document.getElementById('image')
        container.appendChild(titleElement)
        container.appendChild(imageElement)
        container.appendChild(dateElement)
    })

    .catch(error => {
        console.error('Error:', error)}
    )
    }
)