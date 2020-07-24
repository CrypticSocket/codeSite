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
    "price": "415"
},


{
    "name": "Complete Data Science Bootcamp",
    "difficulty": "Beginner",
    "hours": "28.5",
    "price": "532"
},

{
    "name": "Machine Learning A-Z",
    "difficulty": "Intermediate",
    "hours": "44",
    "price": "490"
},

{
    "name": "Deep Learning in Python",
    "difficulty": "Intermediate",
    "hours": "10.5",
    "price": "490"
},

{
    "name": "PHP for Beginners",
    "difficulty": "Beginner",
    "hours": "37.5",
    "price": "490"
},

{
    "name": "Website Development Essentials",
    "difficulty": "Beginner",
    "hours": "2",
    "price": "490"
},

{
    "name": "Logic Building with Scratch",
    "difficulty": "Beginner",
    "hours": "10",
    "price": "?"
},

{
    "name": "Web Development",
    "difficulty": "Beginner",
    "hours": "12",
    "price": "?"
},

{
    "name": "Android App Development",
    "difficulty": "Beginner",
    "hours": "10",
    "price": "?"
}
]

courses.forEach(item => 
{
    
})