//[1] J. Cruz, “How to build a search bar with JavaScript,” a, 06-Sep-2020. [Online]. Available: https://plainenglish.io/blog/how-to-build-a-search-bar-7d8a8a3d9d00. [Accessed: 09-Mar-2023]. -->
//[1]
// get search bar element

const searchInput = document.getElementById('searchInput');

// store name elements in array-like object

const namesFromDOM = document.getElementsByClassName("courseNamesItems");

// listen for user events

searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;


    // get user search input converted to lowercase

    const searchQuery = value.toLowerCase();

    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase

        let name = nameElement.textContent.toLowerCase();

        // compare current name to search input

        if (name.includes(searchQuery)) {
            // found name matching search, display it

            nameElement.style.display = "block";
        } else {
            // no match, don't display name

            nameElement.style.display = "none";
        }
    }
});

const select = document.querySelector("#levelSelect");

select.addEventListener('change', selectit);

function selectit() {

    const courses = document.querySelectorAll('.coursesContent');

    const selectedValue = select.value;

    const level2Content = document.getElementById("level2Content");
    
    const level1Content = document.getElementById("level1Content");

    const headers = document.getElementById("courseHeaders");

    courses.forEach(course => {
        if (selectedValue === 'All') {
            course.style.display = "flex";
            level1Content.style.display = "flex";
            level2Content.style.display = 'flex';
            headers.style.display = 'flex';
        } else if (selectedValue === "level1") {
            level1Content.style.display = "flex";
            level2Content.style.display = "none";
            headers.style.display = 'none';
        } else if (selectedValue === "level2") {
            level2Content.style.display = 'flex';
            level1Content.style.display = 'none';
            headers.style.display = 'none';
        }

    });
    console.log(selectedValue);
}


