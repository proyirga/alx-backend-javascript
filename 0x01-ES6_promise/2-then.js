function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch((error) => {
      console.error('Error from the API:', error);
      return new Error();
    });
}

export default handleResponseFromAPI;
