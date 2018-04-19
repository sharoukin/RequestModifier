var pattern = "*";

function modifyRequestHeaders(e) {
  for (var header of e.requestHeaders) {
    if (header.name.toLowerCase() == "host"
        && header.value.slice(-1) != ".") {
      header.value =  header.value + ".";
    }
  }
  return {requestHeaders: e.requestHeaders};
}

browser.webRequest.onBeforeSendHeaders.addListener(
  modifyRequestHeaders,
  {urls: ["<all_urls>"]},
  ["blocking", "requestHeaders"]
);
