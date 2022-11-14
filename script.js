
//displaying the first slide by default
let slideIndex = 1
slidesControl(slideIndex);

//setting each slides to display on click
function showSlides(n) {
    slidesControl(slideIndex += n)
}

function slidesControl(n) {
    //declaring variable named i
    let i;

    //to get all the slides
    let allSlides = document.getElementsByClassName('relianceSlides')

//setting display first slide when the last slide has displayed and next button is clicked
if (n > allSlides.length) {
    //setting slide to display to first slide
    slideIndex = 1
}

//setting display last slide when first slide has displayed and previous button is clicked
if (n < 1){
    //setting slide to display to last slide
    slideIndex = allSlides.length
}

//hide all slides by loop
for (let index = 0; index < allSlides.length; index++) {
    allSlides[index].style.display = "none";
}

//setting the current slide to display
allSlides[slideIndex - 1].style.display = "block";

//to get the caption for each slide based on the alt value of each image
let displayCaption = document.getElementsByClassName("imgcaption")

//to get the caption of each slide
let captionsOfSlides = document.getElementById('caption')

//setting the caption of the current slide based on the alt value of the slide
captionsOfSlides.innerHTML = displayCaption[slideIndex - 1].alt;
}