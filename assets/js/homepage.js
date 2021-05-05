var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=Nixon&appid=9e398d752f41483a9829912733925aab" + user + "/repos";

  const apiKey =9e398d752f41483a9829912733925aab


  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};
  