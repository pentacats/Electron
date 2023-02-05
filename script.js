// Clock
function setTime() {

  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();

  var period = "";
  if (hour >= 12) {
    period = "PM";
  } else {
    period = "AM";
  }

  if (hour == 0) {
    hour = 12;
  } else {
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  hour = update(hour);
  minute = update(minute);

  // Adding time elements to the div
  document.getElementById("time-text").innerText = hour + ":" + minute + " " + period;
  setTimeout(setTime, 1000);
}

function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

setTime();

// about:blank
document.getElementById("launch").addEventListener("click", function() {
  const url = document.getElementById("urlInput").value;

  if (url.startsWith("https://")) {
    blank(url)
  } else {
    alert("Unable to confirm URL. Please make sure it starts with https://")
  }

});

function blank(url) {
  const tab = window.open('about:blank', '_blank');
  const iframe = tab.document.createElement('iframe');
  const stl = iframe.style;
  stl.border = stl.outline = 'none';
  stl.width = '100vw';
  stl.height = '100vh';
  stl.position = 'fixed';
  stl.left = stl.right = stl.top = stl.bottom = '0';
  iframe.src = url;
  tab.document.body.appendChild(iframe);
}

// tab name and favicon
function updateTabNames() {
  const tabNameInput = document.getElementById("tabname")
  document.title = tabNameInput.value;
  tabNameInput.value = ''
  localStorage.setItem('tabname', tabNameInput.value)
}

function updateFavicon() {
  const faviconInput = document.getElementById("faviconInput")
  const favicon = document.getElementById("favicon");
  favicon.setAttribute("href", faviconInput.value);
  faviconInput.value = ''
  localStorage.setItem('tabicon', faviconInput.value)
         
}
