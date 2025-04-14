
// arr object is created which store dp image , story image source and its names
let arr = [
    { nam:"you story",dp: "https://wallpapercave.com/wp/wp2521772.jpg", story: "https://cdn.pixabay.com/photo/2023/02/19/08/39/man-7799486_1280.jpg" },
    {nam:"kajal",dp:"https://th.bing.com/th/id/OIP.WlGibnxAxsY_d4BCCEFG3wHaEK?rs=1&pid=ImgDetMain",story:"https://cdn.pixabay.com/photo/2017/02/20/10/56/model-2082138_1280.jpg"},
    {nam:"Ayaan",dp:"https://wallpapercave.com/wp/wp2623200.jpg",story:"https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain"},
    {nam:"Muskan",dp:"https://wallpapercave.com/wp/wp7105804.jpg",story:"https://wallpapercave.com/wp/wp7476068.jpg"},
    {nam:"shahid",dp:"https://th.bing.com/th/id/OIP.T0s-LrEK_nZCBIf0Ugr19wHaEo?rs=1&pid=ImgDetMain",story:"https://static1.bigstockphoto.com/4/6/1/large1500/164090999.jpg"},
    {nam:"Shumit",dp:"https://freedesignfile.com/upload/2017/01/Handsome-man-HD-picture-09.jpg",story:"https://i.pinimg.com/originals/a2/cd/ff/a2cdfffeff68767c743bf385e57625f2.jpg"},
    {nam:"Ayesha",dp:"https://wallpapercave.com/wp/wp7105804.jpg",story:"https://th.bing.com/th/id/OIP.G4eYmGAbtfbWAnt8R9EtqAHaLH?rs=1&pid=ImgDetMain"},
    {nam:"Nikhil",dp:"https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",story:"https://images.hdqwalls.com/wallpapers/model-girl-hd-gy.jpg"},
];


let clutter = ""; // pre define variable to store dp photo and name 

// loop for accese arr's object
arr.forEach(function(elem, idx) {
    clutter += `
        <div class="photo-wrapper">
            <img id="${idx}" src="${elem.dp}" class="photo">
            <h5 class="name">${elem.nam}</h5>
        </div>
    `;
});

//  to clutter's values store in storiya variable
let storiya = document.querySelector(".storya");
storiya.innerHTML = clutter;

// apply click event on storiya name div where show story photo
storiya.addEventListener("click", (dets) => {

    let story1 = document.querySelector("#full-screen");
    story1.style.display = "block";
    story1.style.backgroundImage = `url(${arr[dets.target.id].story})`; // store story image in story1 variable

    setTimeout(function() {   // to reset story1 state to gate original state
        story1.style.display = "none"; 
    }, 3000);
});





