function apia() {
fetch('https://api.ipify.org/?format=json')
	.then(results => results.json())
	.then(data => document.write(data.ip))
}
apia()

