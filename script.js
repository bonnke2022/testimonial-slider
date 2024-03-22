const testimonials = [
    {
        pic:'images/image-john.jpg',
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        info: 'If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.',
    },
    {
        pic: 'images/image-tanya.jpg',
        name: 'Tanya Sinclair',
        job: 'UX Engineer',
        info: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    },
];

let count = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});

const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const image = document.getElementById('image');
const para = document.getElementById('para');
const names = document.getElementById('name');
const job = document.getElementById('job');

nextBtn.addEventListener('click', function(){
    count++;
    if (count > testimonials.length - 1) {
        count = 0;
    }
    showPerson();
});
prevBtn.addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = testimonials.length - 1;
    }
    showPerson();
});

function showPerson() {
    const item = testimonials[count]
    image.src = item.pic;
    para.innerText = item.info;
    names.innerText = item.name;
    job.innerText = item.job;
}