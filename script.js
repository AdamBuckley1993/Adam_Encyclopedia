function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function contactUs() {
    const fName = document.getElementById("fname").value
    const lName = document.getElementById("lname").value
    const subjectText = document.getElementById("subject").value

    if (subjectText.length < 10) {
        alert("Subject must be 10 characters or longer!")
    } else {

        alert("Hello, " + fName + " " + lName);
    }
}

function helloBeautiful() {
    let person = prompt("What's your name?")
    if (person != null) {
        document.getElementById("hello").innerHTML =
            "Hello, " + person + "! Welcome to Adam's Encyclopedia of Dad Jokes, Inspirational Quotes and Feel-Good Stories!";
    }
}
