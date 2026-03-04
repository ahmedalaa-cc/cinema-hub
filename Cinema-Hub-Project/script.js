const movies = [
    { 
        title: "Inception", 
        category: "خيال علمي", 
        year: 2010, 
        rating: "⭐ 8.8", 
        img: "images/Inception.jpg", 
        desc: "لص يسرق أسرار الشركات من خلال استخدام تكنولوجيا مشاركة الأحلام." 
    },
    { 
        title: "Interstellar", 
        category: "خيال علمي", 
        year: 2014, 
        rating: "⭐ 8.7", 
        img: "images/Interstellar.jpg", 
        desc: "فريق من الرواد يسافر عبر ثقب دودي لإنقاذ البشرية من الفناء." 
    },
    { 
        title: "The Dark Knight", 
        category: "أكشن", 
        year: 2008, 
        rating: "⭐ 9.0", 
        img: "images/The_Dark_Knight.jpg", 
        desc: "باتمان يواجه الجوكر في صراع يختبر فيه مبادئه وقوته." 
    },
    { 
        title: "The Conjuring", 
        category: "رعب", 
        year: 2013, 
        rating: "⭐ 7.5", 
        img: "images/The Conjuring.jpg", 
        desc: "قصة حقيقية لمحققين يواجهون كيانًا شريرًا في مزرعة منعزلة." 
    },
    { 
        title: "John Wick 4", 
        category: "أكشن", 
        year: 2023, 
        rating: "⭐ 7.8", 
        img: "images/John Wick 4.jpg", 
        desc: "جون ويك يجد طريقًا لهزيمة 'المجلس الأعلى' واستعادة حريته." 
    },
    { 
        title: "Parasite", 
        category: "دراما", 
        year: 2019, 
        rating: "⭐ 8.5", 
        img: "images/Parasite.png",
        desc: "عائلة فقيرة تحتال لتعمل لدى عائلة ثرية وتتوالى الأحداث الصادمة." 
    },
    { 
        title: "Oppenheimer", 
        category: "دراما", 
        year: 2023, 
        rating: "⭐ 8.4", 
        img: "images/oppenheimer.jpg", 
        desc: "قصة العالم روبرت أوبنهايمر ودوره في تطوير القنبلة الذرية." 
    },
    { 
        title: "Dune: Part Two", 
        category: "خيال علمي", 
        year: 2024, 
        rating: "⭐ 8.7", 
        img: "images/Dune Part Two.jpg", 
        desc: "بول أتريدس يتحد مع شاني وفريمن للانتقام من المتآمرين." 
    },
    { 
        title: "Top Gun: Maverick", 
        category: "أكشن", year: 2022, 
        rating: "⭐ 8.3", 
        img: "images/Top Gun Maverick.jpg", 
        desc: "بعد ثلاثين عامًا من الخدمة، مافريك يقود طيارين شباب في مهمة خطيرة." 
    },
    { 
        title: "Smile", 
        category: "رعب", 
        year: 2022, 
        rating: "⭐ 6.6", 
        img: "images/Smile.jpg", 
        desc: "طبيبة تبدأ في رؤية حوادث مرعبة لا يمكن تفسيرها بعد حادثة غريبة." 
    },
    { 
        title: "The Menu", 
        category: "رعب", 
        year: 2022, 
        rating: "⭐ 7.2", 
        img: "images/The Menu.jpg", 
        desc: "زوجان يسافران إلى جزيرة نائية لتناول عشاء فاخر في مطعم غامض." 
    }
];
const grid = document.getElementById('movieGrid');
const modal = document.getElementById('movieModal');
function displayMovies(data) {
    grid.innerHTML = "";
    data.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${movie.img}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <small>${movie.category} | ${movie.year}</small>
            </div>
        `;
        card.onclick = () => openModal(movie);
        grid.appendChild(card);
    });
}

function openModal(movie) {
    document.getElementById('modalTitle').innerText = movie.title;
    document.getElementById('modalDesc').innerText = movie.desc;
    document.getElementById('modalImg').src = movie.img;
    document.getElementById('modalRating').innerText = movie.rating;
    document.getElementById('modalYear').innerText = movie.year;
    document.getElementById('modalCategory').innerText = movie.category;
    modal.style.display = "block";
}

document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(term));
    displayMovies(filtered);
});

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        const filtered = (cat === "الكل") ? movies : movies.filter(m => m.category === cat);
        displayMovies(filtered);
    });
});

displayMovies(movies);