let captcha;
function generate() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	let uniquechar = "";

	const randomchar =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 5; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}

	// Store generated input
	captcha.innerHTML = uniquechar;
}

function preloader(){
    // Page loading animation
    document.getElementById('loading-popup').style.display = 'flex';
    
}

function printmsg() {
	const usr_input = document.getElementById("submit").value;

	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha.innerHTML) {
		// let s = document.getElementById("key")
		// 	.innerHTML = "Matched";

        preloader();

        const scriptURL = 'https://script.google.com/macros/s/AKfycbxwxCK8DkbyS2BY_iUGOj_Vw8lAyofK2DaMBqrrm7-6C37SG_SKBowG813xQS74AxApEQ/exec'

    const form = document.forms['contact']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                alert("Thank you! your form is submitted successfully.");
        })
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    })
		generate();
	}
	else {
		alert("Captcha Doesn't match")
		generate();
	}
}
