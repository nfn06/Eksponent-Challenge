const contactsElement = document.getElementById("contacts");
const apiURL = 'https://ekspomotto.herokuapp.com'

function getPersons() {
    fetch(apiURL + '/persons')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json(); 
        })
        .then(persons => { 
            console.log(persons);

            contactsElement.innerHTML = ''; 

            persons.forEach(person => {
                const personHTML = `
                    <div class="contact">
                        <img src="${apiURL + person.imageUrl}" alt="Image of ${person.navn}" width="100" loading="lazy">
                        <h2>${person.navn}</h2>
                        <p>Telefonnummer: ${person.telefonnummer}</p>
                        <p>Motto: "${person.motto}"</p>
                    </div>
                `;
                contactsElement.innerHTML += personHTML;
            });
        })
        .catch(error => console.error('Error:', error));
}

getPersons();
