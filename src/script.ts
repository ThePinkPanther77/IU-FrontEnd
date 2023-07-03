import dayjs from 'dayjs';

const email = new URLSearchParams();
email.append('email', 'h.sarhan@innopolis.university');

fetch('https://fwd.innopolis.app/api/hw2?' + email.toString())
  .then(identifier => identifier.json())
  .then(data => {
    fetch('https://fwd.innopolis.university/api/comic?id=' + data)
      .then(response => response.json())
      .then(Img => {

        const date = dayjs().set('year', Img.year).set('month', Img.month - 1).set('date', Img.day);

        const imageElement = document.createElement('img');
        imageElement.src = Img.img;
        imageElement.alt = Img.alt;

        const titleElement = document.createElement('h2');
        titleElement.textContent = Img.safe_title;

        const dateElement = document.createElement('p');
        dateElement.textContent = date.format('DD-MM-YYYY');

        const container = document.getElementById('image')!;
        container.appendChild(titleElement);
        container.appendChild(imageElement);
        container.appendChild(dateElement);

      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
