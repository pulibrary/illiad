window.addEventListener("load", function() {
  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#333333"
      },
      "button": {
        "background": "#08415c"
      }
    },
    "showLink": false,
    "theme": "edgeless",
	cookie:{
		name: "lendingilliad_cookieconsent",
		domain: window.location.host
	}
  })
});