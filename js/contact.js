function submitData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("select").value;
    let message = document.getElementById("message").value

    if (name === "") {
        return alert ("Name must be filled!");
    } else if (email == "") {
        return alert ("Email must be filled!");
    } else if (number === "") {
        return alert ("Number must be filled!");
    } else if (subject === "") {
        return alert ("Subject must be selected!");
    } else if (message === "") {
        return alert ("Message must be filled!");
    }

    let emailReceiver = "liidia.maulida@gmail.com"

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo, my name ${name},${message}. Please contact me on number ${number} or email me at ${email}`
    a.click()

    let messagers = {
        nama: name,
        email: email,
        phone_number: number,
        subject: subject,
        message: message,
    };

    console.log (messagers);
}