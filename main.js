const burger = document.querySelector('.burger')
const nav = document.querySelector('.linksside')
const stats = document.getElementById('statsHolder')
const course = document.querySelectorAll('.card')

burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active')
    burger.classList.toggle('burger-active')
})

let courses = [{
    "name": "Python Bootcamp",
    "difficulty": "Beginner",
    "hours": "21.5",
    "price": "Paid",
    "link" : "#"
},


{
    "name": "Complete Data Science Bootcamp",
    "difficulty": "Beginner",
    "hours": "28.5",
    "price": "Paid",
    "link" : "#"
},

{
    "name": "Machine Learning A-Z",
    "difficulty": "Intermediate",
    "hours": "44",
    "price": "Paid",
    "link" : "#"
},

{
    "name": "Deep Learning in Python",
    "difficulty": "Intermediate",
    "hours": "10.5",
    "price": "Paid",
    "link" : "#"
},

{
    "name": "PHP for Beginners",
    "difficulty": "Beginner",
    "hours": "37.5",
    "price": "Paid",
    "link" : "#"
},

{
    "name": "Website Development Essentials",
    "difficulty": "Beginner",
    "hours": "2",
    "price": "Paid",
    "link" : "#"
},

{
    "name": "Logic Building with Scratch",
    "difficulty": "Beginner",
    "hours": "10",
    "price": "",
    "link" : "#"
},

{
    "name": "Web Development",
    "difficulty": "Beginner",
    "hours": "12",
    "price": "",
    "link" : "#"
},

{
    "name": "Android App Development",
    "difficulty": "Beginner",
    "hours": "10",
    "price": "",
    "link" : "#"
}
]

let string = ""

courses.forEach(item => 
{
    string += `
    <a class="card" href="${item.link}" onClick="fillForm('${item.name}')">
        <h3 class="courseName">${item.name}</h3>
        <p class="hours">${item.hours} hours</p>
        <div class="linearInfo">
            <p>${item.difficulty}</p>
            <p>${item.price}</p>
        </div>
    </a>
    `
})

document.getElementById("courses").innerHTML += string

function fillForm(asd)
{
    url = "./contact.html?name=" + encodeURIComponent(asd)
    document.location.href = url
}