const burger = document.querySelector('.burger')
const nav = document.querySelector('.linksside')
const stats = document.getElementById('statsHolder')

burger.addEventListener('click', function(){
    nav.classList.toggle('nav-active')
    burger.classList.toggle('burger-active')
})

let courses = [{
    "name": "Python Bootcamp",
    "difficulty": "Beginner",
    "hours": "21.5",
    "price": "Paid",
    "link" : "https://www.udemy.com/course/complete-python-bootcamp/"
},


{
    "name": "Complete Data Science Bootcamp",
    "difficulty": "Beginner",
    "hours": "28.5",
    "price": "Paid",
    "link" : "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/"
},

{
    "name": "Machine Learning A-Z",
    "difficulty": "Intermediate",
    "hours": "44",
    "price": "Paid",
    "link" : "https://www.udemy.com/course/machinelearning/"
},

{
    "name": "Deep Learning in Python",
    "difficulty": "Intermediate",
    "hours": "10.5",
    "price": "Paid",
    "link" : "https://www.udemy.com/course/unsupervised-deep-learning-in-python/"
},

{
    "name": "PHP for Beginners",
    "difficulty": "Beginner",
    "hours": "37.5",
    "price": "Paid",
    "link" : "https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/"
},

{
    "name": "Website Development Essentials",
    "difficulty": "Beginner",
    "hours": "2",
    "price": "Paid",
    "link" : "https://www.udemy.com/course/be-creative-designdevelop-a-website-from-scratch/"
},

{
    "name": "Logic Building with Scratch",
    "difficulty": "Beginner",
    "hours": "10",
    "price": "",
    "link" : "https://juniorpandit.com/"
},

{
    "name": "Web Development",
    "difficulty": "Beginner",
    "hours": "12",
    "price": "",
    "link" : "https://juniorpandit.com/"
},

{
    "name": "Android App Development",
    "difficulty": "Beginner",
    "hours": "10",
    "price": "",
    "link" : "https://juniorpandit.com/"
}
]

let string = ""

courses.forEach(item => 
{
    string += `
    <a class="card" href="${item.link}">
        <p class="courseName">${item.name}</p>
        <p class="hours">${item.hours} hours</p>
        <div class="linearInfo">
            <p>${item.difficulty}</p>
            <p>${item.price}</p>
        </div>
    </a>
    `
})

document.getElementById("courses").innerHTML = string