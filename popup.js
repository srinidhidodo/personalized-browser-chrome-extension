document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tab) { d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'get';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
	  console.log(f.action);
	  console.log("I am extension");
	  var site=window.prompt("Enter a site name");
	  var siteUrl="http://www."+site+".com";
	  console.log(chrome.bookmarks.MAX_WRITE_OPERATIONS_PER_HOUR);
	  chrome.bookmarks.create({url:siteUrl});
	  //chrome.tabs.create({url:siteUrl});
    });
  }, false);
}, false);