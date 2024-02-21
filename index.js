const petfinder = new Petfinder({
    apiKey: 'YOUR_API_KEY',
    secret: 'YOUR_SECRET'
  });
  
  document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const type = document.getElementById('type').value;
    const status = document.getElementById('status').value;
  
    try {
      const response = await petfinder.animal.search({
        type: type,
        status: status
      });
  
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';
  
      response.animals.forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.innerHTML = `
          <h2>${animal.name}</h2>
          <p>Breed: ${animal.breeds.primary}</p>
          <p>Age: ${animal.age}</p>
          <p>Gender: ${animal.gender}</p>
          <p>Size: ${animal.size}</p>
          <p>Description: ${animal.description}</p>
        `;
        resultsDiv.appendChild(animalDiv);
      });
    } catch (error) {
      console.error(error);
    }
  });