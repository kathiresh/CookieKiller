function removeCookies(){

  //Get current tab cookies
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function(tab) {

    chrome.cookies.getAll({
      "url" :tab[0].url
    },function (cookies){

        if(cookies.length !== 0) {
          //Remove all cookies
          for(var i=0; i < cookies.length; i++) {
            chrome.cookies.remove({url: tab[0].url + cookies[i].path, name: cookies[i].name});
          }
          document.getElementById("cookie").innerHTML = "Cookies Deleted !"
        } else {
          document.getElementById("cookie").innerHTML = "No Cookies Found !";
        }
        setTimeout(function() {
            self.close();
        }, 3000);

      });
  });
}

//call on load
window.onload = removeCookies;
