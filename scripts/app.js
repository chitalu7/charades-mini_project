// document.addEventListener('DOMContentLoaded', function () {
//     var words = ["Hello", "World", "Bootstrap", "Carousel"]; // Your JSON array
//     var carouselInner = document.querySelector('.carousel-inner');

//     words.forEach(function(word, index) {
//         var item = document.createElement('div');
//         item.className = 'carousel-item' + (index === 0 ? ' active' : '');
//         item.innerHTML = `<h1>${word}</h1>`;
//         carouselInner.appendChild(item);
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const words = ["Hello", "World", "Bootstrap", "Carousel", "Example"];
//     const carouselInner = document.querySelector('.carousel-inner');

//     words.forEach((word, index) => {
//         const item = document.createElement('div');
//         item.className = 'carousel-item';
//         if (index === 0) item.classList.add('active'); // First item is active

//         const text = document.createElement('h1');
//         text.innerText = word;
//         text.className = 'text-center';

//         item.appendChild(text);
//         carouselInner.appendChild(item);
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const words = ["Hello", "World", "Bootstrap", "Carousel", "Example"];
//     const carouselInner = document.querySelector('.carousel-inner');

//     words.forEach((word, index) => {
//         const item = document.createElement('div');
//         item.className = 'carousel-item';
//         if (index === 0) item.classList.add('active'); // First item is active

//         const text = document.createElement('h1');
//         text.innerText = word;
//         text.className = 'text-center';

//         item.appendChild(text);
//         carouselInner.appendChild(item);
//     });

//     // Initialize the carousel with no automatic cycling
//     $('.carousel').carousel({
//         interval: false
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const words = [
        "Bump", "Teething", "Blanket", "Glow", "Kick",
        "Parent", "Sibling", "Nanny", "Breastfeeding", "Lamaze",
        "Hormones", "BabyBump", "Giggle", "Cooing", "Nap",
        "Rattle", "HighChair", "Blue", "Pink", "Reveal",
        "Announcement", "Blessing", "BurpCloth", "Mobile", "Pram",
        "CarSeat", "Booties", "Bib", "Crawling", "Waddle",
        "Storytime", "Playdate", "Milestone", "Tummy", "Daddy",
        "Mommy", "Sunrise", "Moonlight", "Star", "Cherish",
        "Embrace", "Yawn", "Snuggle", "Gentle", "Peaceful",
        "Journey", "Pacify", "Dream", "Whisper", "BundleOfJoy",
        "Baby", "Cradle", "Diaper", "Stroller", "Bottle",
    "Ultrasound", "Pacifier", "Nursery", "Booties", "Belly",
    "Crib", "Maternity", "Swaddle", "DueDate", "Heartbeat",
    "Bassinet", "Onesie", "Pregnant", "Motherhood", "Fatherhood",
    "Lullaby", "Midnight", "Naptime", "RockingChair", "TeddyBear",
    "Twins", "Triplets", "Vitamins", "Sonogram", "Maternal",
    "Paternal", "Fetal", "GenderReveal", "BunInOven", "Newborn",
    "Infant", "Milk", "Siblings", "Family", "Cuddles",
    "Cute", "Joy", "Love", "Happiness", "Celebration",
    "Gifts", "BabyShower", "Expecting", "LittleOne", "Miracle"
        
    ];
    
    const numberOfSlides = 50; // Number of slides you want to show
    const shuffledWords = shuffleArray(words).slice(0, numberOfSlides);
    const carouselInner = document.querySelector('.carousel-inner');

    shuffledWords.forEach((word, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        if (index === 0) item.classList.add('active'); // First item is active

        const text = document.createElement('h1');
        text.innerText = word;
        text.className = 'text-center';

        item.appendChild(text);
        carouselInner.appendChild(item);
    });

    // Initialize the carousel with no automatic cycling
    $('.carousel').carousel({
        interval: false
    });
});

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

