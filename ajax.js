function makeAjaxCall(url, methodType) {
  let promiseObj = new Promise(function(resolve, reject) {
    debug ? console.log(url) : ""; //conditional ternary
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open(methodType, url, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          debug ? console.log("xmlhttp done successfully") : "";
          let serverResponse = xmlhttp.responseText; // server antwoord met string
          debug ? console.log(serverResponse) : "";
          resolve(serverResponse); // word via return promiseObj teruggegeven
        } else {
          reject(xmlhttp.status);
          console.log("xmlhttp failed"); // debug
        }
      } else {
        debug ? console.log("xmlhttp going on") : ""; //debug
      }
    }
    debug ? console.log("request sent succsesfully") : ""; //debug
  });
  console.log("return");
  return promiseObj;
}

function errorHandler(statusCode) {
  console.log("failed whit status", status);
}
