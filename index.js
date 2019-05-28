function handleClick() {
  let api = document.getElementById('git');
  console.log("You clicked me");
  fetch("https://api.github.com/orgs/HackYourFuture/repos")
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      api.innerHTML = JSON.stringify(result);
    })
}

function getUserInput(event) {
  var userInput = document.getElementById("userinput").value;
  console.log("User typed in: " + userInput);
  getRepositories(userInput);
}

function getRepositories(searchTerm) {
  var requestURL = 'https://api.github.com/repos/HackYourFuture/' + searchTerm;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', requestURL, true);
  xhr.send();
  xhr.onload = processRequest;
  xhr.onerror = handleError;

  function processRequest() {

    let result = JSON.parse(xhr.response);
    let repo = document.getElementById('link');
    repo.innerHTML = `<a href= "${result.clone_url}" target="_blank"> click me </a>`;
    console.log(result);
    console.log(result.clone_url);

  }

  function handleError() {
    console.log('An error occurred \uD83D\uDE1E');
  }
}