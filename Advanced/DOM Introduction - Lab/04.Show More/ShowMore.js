function showText() {
    // get the element that twe need to show
    const textToShow = document.getElementById("text")

    // get the more (link) element
    const show = document.getElementById("more")

    // change the link's style -> display property to none when clicked
    show.style.display = "none"

    // change the new text style -> display property to inline in order to be shown when the link is clicked
    textToShow.style.display = "inline"
 }