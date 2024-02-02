import React, { useState, useEffect } from 'react';

function App() {
    //Defining state variables using the useState hook
  const [animalImage, setAnimalImage] = useState(null);
  const [loading, setLoading] = useState(true);

  //Using the useEffect hook to perform side effects in the component
  useEffect(() => {
    // Fetch a random dog image from the Dog CEO API when the component mounts
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update state with the URL of the fetched dog image and mark loading as false
        setAnimalImage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching animal image:', error);
        setLoading(false);
      });
  }, []);
// Return JSX representing the component's UI
  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={animalImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

