/* On Load Function */
window.onload = function onLoadFunction() {
    const navTag = document.querySelector("nav");
    const footerTag = document.querySelector("footer");

    const indexWidgetTag = document.getElementById("holidayWidgetContainer"); // Index Page
    const carouselChunks = document.querySelectorAll(".carouselChunk"); // Carousel, Index Page
    console.log(carouselChunks);

    const springWidgetTag = document.getElementById("springWidgetContainer"); // Spring Page
    const summerWidgetTag = document.getElementById("summerWidgetContainer"); // Summer Page
    const fallWidgetTag = document.getElementById("fallWidgetContainer"); // Fall Page
    const winterWidgetTag = document.getElementById("winterWidgetContainer"); // Winter Page

    var currentDate = new Date();
        const DD = String(currentDate.getDate()).padStart(2, "0");
        const MM = String(currentDate.getMonth() + 1).padStart(2, "0"); // List of months start with January as 0
        const YYYY = currentDate.getFullYear();

        // 'localStorage' stores value for use in other web pages
        localStorage.year = YYYY;
        localStorage.dateConcat = (MM + "." + DD);

    // Navbar
    myNavbar = elementFromHTML(`
    <div class="container">
        <a href="index.html" class="navbar-brand w-25">
            <img src="img/solelogo.png" alt="SePoCo" class="w-25">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item py-3">
                    <form class="d-flex navbar-search" role="search">
                    <input type="search" placeholder="Search..." class="form-control me-2" onkeyup="searchFunction()">
                </form></li>
                <li class="nav-item">
                    <a href="spring.html" class="nav-link">Spring</a></li>
                <li class="nav-item">
                    <a href="summer.html" class="nav-link">Summer</a></li>
                <li class="nav-item">
                    <a href="fall.html" class="nav-link">Fall</a></li>
                <li class="nav-item">
                    <a href="winter.html" class="nav-link">Winter</a></li>
                <li class="nav-item">
                    <a href="list.html" class="nav-link">A-Z List</a></li>
                <li class="nav-item">
                    <a href="bac.html" class="nav-link">BAC Calculator</a></li>
            </ul>
        </div>
    </div>
    `);
    navTag.appendChild(myNavbar);

    // Footer
    myFooter = elementFromHTML(`
    <div class="text-center text-light bg-primary">
        <p>
            <a href="contact.html" class="link-light">Contact Us</a> ||
            <a href="list.html" class="link-light">A-Z List</a> ||
            <a href="feedback.html" class="link-light">Feedback</a> ||
            <a href="about.html" class="link-light">About Us</a>
        </p>
        <p class="fst-italic">Copyright &copy; 2022 DrinksOnUs LLC</p>
    </div>
    `);
    footerTag.appendChild(myFooter);

    // Index Widget
    // Draws Widgets for the Index Page
    if (indexWidgetTag) {
        determineNextHolidays();

        for (i in upComingArr) {
            myWidget = elementFromHTML(`
            <div class="row pb-5">
                <div class="col-md">
                    <div class="card background-light text-dark">
                        <div class="d-flex flex-row m-1 px-3">
                            <div class="w-25">
                                <img id="holidayImg" class="image-thumbnail img-fluid d-none d-md-block w-75" src="img/menuButton.png" alt="holiday img">
                            </div>

                            <div class="align-self-center">
                                <h1 id="holidayName" class="card-title mb-3">${upComingArr[i]}</h1>
                                <h4 id="holidayDescription">[Import Holiday Description Here]</h4>
                                <h6 id="date">[Import Holiday Date Here]</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);

            indexWidgetTag.appendChild(myWidget);
        }
    }

    // Carousel
    if (carouselChunks) {
        var chunksArray = Array.prototype.slice.call(carouselChunks);
        for (i in chunksArray) {
            myCarousel = elementFromHTML(`
            <div class="d-flex flex-row m-1 px-3">
                <div class="w-25">
                    <img id="holidayImg" class="image-thumbnail img-fluid d-none d-md-block w-75" src="img/cocktailplaceholder.png" alt="Holiday Image">
                </div>

                <div class="align-self-center">
                    <h1 id="holidayName" class="card-title mb-3">Drink ${(i)}</h1>
                    <h4 id="holidayDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quod!</h4>
                </div>
            </div>
            `);
            chunksArray[i].appendChild(myCarousel);
        }
    }

    if (springWidgetTag) {
        determineSeasonHolidays();

        for (i in springHolidays) {
            myWidget = elementFromHTML(`
            <div class="row pb-5">
                <div class="col-md">
                    <div class="card background-light text-dark">
                        <div class="d-flex flex-row m-1 px-3">
                            <div class="w-25">
                                <img id="holidayImg" class="image-thumbnail img-fluid d-none d-md-block w-75" src="img/menuButton.png" alt="holiday img">
                            </div>

                            <div class="align-self-center">
                                <h1 id="holidayName" class="card-title mb-3">${springHolidays[i]}</h1>
                                <h4 id="holidayDescription">[Import Holiday Description Here]</h4>
                                <h6 id="date">[Import Holiday Date Here]</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);

            springWidgetTag.appendChild(myWidget);
        }
    }
    if (summerWidgetTag) {
        determineSeasonHolidays();

        for (i in summerHolidays) {
            myWidget = elementFromHTML(`
            <div class="row pb-5">
                <div class="col-md">
                    <div class="card background-light text-dark">
                        <div class="d-flex flex-row m-1 px-3">
                            <div class="w-25">
                                <img id="holidayImg" class="image-thumbnail img-fluid d-none d-md-block w-75" src="img/menuButton.png" alt="holiday img">
                            </div>

                            <div class="align-self-center">
                                <h1 id="holidayName" class="card-title mb-3">${summerHolidays[i]}</h1>
                                <h4 id="holidayDescription">[Import Holiday Description Here]</h4>
                                <h6 id="date">[Import Holiday Date Here]</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);

            summerWidgetTag.appendChild(myWidget);
        }
    }
    if (fallWidgetTag) {
        determineSeasonHolidays();

        for (i in fallHolidays) {
            myWidget = elementFromHTML(`
            <div class="row pb-5">
                <div class="col-md">
                    <div class="card background-light text-dark">
                        <div class="d-flex flex-row m-1 px-3">
                            <div class="w-25">
                                <img id="holidayImg" class="image-thumbnail img-fluid d-none d-md-block w-75" src="img/menuButton.png" alt="holiday img">
                            </div>

                            <div class="align-self-center">
                                <h1 id="holidayName" class="card-title mb-3">${fallHolidays[i]}</h1>
                                <h4 id="holidayDescription">[Import Holiday Description Here]</h4>
                                <h6 id="date">[Import Holiday Date Here]</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);

            fallWidgetTag.appendChild(myWidget);
        }
    }
    if (winterWidgetTag) {
        determineSeasonHolidays();

        for (i in winterHolidays) {
            myWidget = elementFromHTML(`
            <div class="row pb-5">
                <div class="col-md">
                    <div class="card background-light text-dark">
                        <div class="d-flex flex-row m-1 px-3">
                            <div class="w-25">
                                <img id="holidayImg" class="image-thumbnail img-fluid d-none d-md-block w-75" src="img/menuButton.png" alt="holiday img">
                            </div>

                            <div class="align-self-center">
                                <h1 id="holidayName" class="card-title mb-3">${winterHolidays[i]}</h1>
                                <h4 id="holidayDescription">[Import Holiday Description Here]</h4>
                                <h6 id="date">[Import Holiday Date Here]</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `);

            winterWidgetTag.appendChild(myWidget);
        }
    }




}

// Creates HTML content from javascript code typed in HTML format
function elementFromHTML(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

// Calculates the next four holidays based on current date
function determineNextHolidays() {
    var today = parseFloat(localStorage.dateConcat, 10);
    var returned = 0;
    upComingArr = [];

    for (i in holidayList) {
        //console.log(`${holidayList[i]}`);
        //console.log(i);
        if (today > 12.25 && returned < 4) {
            upComingArr.push("New Years Eve");
            upComingArr.push("Easter");
            upComingArr.push("Memorial Day");
            upComingArr.push("Pride");
            returned+=4;
        }else if (today > 11.23 && returned < 4) {
            upComingArr.push("Christmas");
            upComingArr.push("New Years Eve");
            upComingArr.push("Easter");
            upComingArr.push("Memorial Day");
            returned+=4;
        }else if (today > 10.31 && returned < 4) {
            upComingArr.push("Thanksgiving");
            upComingArr.push("Christmas");
            upComingArr.push("New Years Eve");
            upComingArr.push("Easter");
            returned+=4;
        }else{
            if (holidayList[i] >= today && returned < 4) {
                upComingArr.push(i);
                returned++;
            }
        }
    }
}

function determineSeasonHolidays(){
    fallHolidays = [];
    springHolidays = [];
    winterHolidays = [];
    summerHolidays = [];
    fallDate = [];
    springDate = [];
    winterDate = [];
    summerDate = [];
    fallDrink = [3,3];
    springDrink = [3,3,1];
    winterDrink = [0,3,3];
    summerDrink = [0,3];
    
    //Sorts the holiday names based on the dates
    for (i in holidayList) {
        if (holidayList[i] > 3.20 && 6.21 > holidayList[i]) {
            springHolidays.push(i);
        }else
        if (holidayList[i] > 6.21 && 9.23 > holidayList[i]) {
            summerHolidays.push(i);
        }else
        if (holidayList[i] > 9.21 && 12.20 > holidayList[i]) {
            fallHolidays.push(i);
        }else
        {
            winterHolidays.push(i);
        }
    }
    //Sorts the holiday dates based on the dates
    for (i in holidayDate) {
        if (holidayDate[i] > 3.20 && 6.21 > holidayDate[i]) {
            springDate.push(i);
        }
    }
    for (i in holidayDate) {
        if (holidayDate[i] > 12.21 || holidayDate[i] < 3.20) {
            winterDate.push(i);
        }
    }
    for (i in holidayDate) {
        if (holidayDate[i] > 6.21 && 9.23 > holidayDate[i]) {
            summerDate.push(i);
        }
    }
    for (i in holidayDate) {
        if (holidayDate[i] > 9.21 && 12.20 > holidayDate[i]) {
            fallDate.push(i);
        }
    }
}


// First time page Alert
var visited = localStorage.getItem('visited');
if (!visited) {
    alert("Warning! Please ensure you are the proper drinking age in your country don't do illegal stuff. Are we in the clear now? Can we not be held liable?");
    localStorage.setItem('visited', true);
}

/*   Lists and Objects   */
// Holidays Object, always seem to fall in same order, regardless of changing dates
const holidayList = {"Easter" : 4.09, "Memorial Day" : 5.29, "Pride" : 6.02, "4th of July" : 7.04,
    "Labor Day" : 9.04, "Halloween" : 10.31, "Thanksgiving" : 11.23, "Christmas" : 12.25, "New Years Eve" : 12.31};

const holidayDate = {"April 9" : 4.09, "May 29" : 5.29, "June 2" : 6.02, "July 4" : 7.04,
    "September 4" : 9.04, "October 31" : 10.31, "November 23" : 11.23, "December 25" : 12.25, "December 31" : 12.31};




// Search Bar Function Hopefully
function searchFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("navmenu");
    a = div.getElementsByTagName("a");

    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}