function showMessage(reponse) {
    if  (reponse === "No") {
        const noButton = document.getElementById("no-button");
        const container = document.querySelector(".container");
        const maxWidth = window.innerwidth - noButton.offsetWidth;
        const maxHeight = window.innerHeight - noButton.offsetHeight;

        noButton.style.position = "absolute";

        document.getElementsByClassName("image")[0].src = "images/IMG_2055.JPG"

        const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
        const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";

        document.getElementById("question").textContent =
        "Kanti wena why unomuntu? lol🥹";
        document.getElementById("name").style.display = "none";
    }

    if (reponse === "Yes") {
        document.getElementById("name").remove();
        document.getElementById("no-button").remove();

        const yesMessage = document.getElementById("question");
        yesMessage.textContent = "Forever Wena my Dali😘, see you on the 14th babygirl";
        yesMessage.style.display = "block";
        yesMessage.style.fontStyle = "normal";
        document.getElementsByClassName("image")[0].src = "images/IMG_2056.JPG";

        document.getElementById("yesButton").remove();
    }
}