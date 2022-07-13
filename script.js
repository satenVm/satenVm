let stand1 = document.querySelector('.reklam-stand1');
stand1.remove();

// const movieDB = {
//     movies: [
//         "ЛОГАН",
//         "ЛИГА СПРАВЕДЛИВОСТИ",
//         "ЛА-ЛА ЛЕНД",
//         "ОДЕРЖИМОСТЬ",
//         "СКОТТ ПИЛИГРИМ ПРОТИВ..",
//     ]
// };

const movieDB = {
    movies: [
        {
            name: "Логан",
            like: true,
        },
        {
            name: "Лига справедливости",
            like: true,
        },
        {
            name: "Ла-ла лэнд",
            like: true,
        },
        {
            name: "Одержимость",
            like: true,
        }
    ]
};



let ul = document.querySelector('#newfilms');
const starIcon = "img/star.jpg";
const voidStarIcon = "img/star2.png";
function renederList(startIndex) {
    // ul.innerText = "";
    movieDB.movies.forEach(function (el, index) {
        if (index >= startIndex) {
            let li = document.createElement('li');
            li.className = 'films-li';
            li.innerHTML = el.name.toUpperCase();
            let star = document.createElement('img');
            star.className = 'star';
            star.addEventListener('click', function (event) {
                let fullSrc = event.target.src.split('/');
                let src = fullSrc[fullSrc.length - 2] + '/' + fullSrc[fullSrc.length - 1];
                if (src === starIcon) {
                    event.target.src = voidStarIcon;
                } else {
                    event.target.src = starIcon;
                }
                movieDB.movies = movieDB.movies.map(function (el) {
                    // el.like = !el.like;
                    if (el.name.toUpperCase() === event.target.parentElement.innerText) {
                        return {
                            name: el.name,
                            like: !el.like
                        }
                    }
                    return el
                })
                // console.log(movieDB.movies);
                // console.log(event.target.parentElement.innerText)
            })
            if (el.like === true) {
                star.src = starIcon
            } else {
                star.src = voidStarIcon;
            }
            li.prepend(star);
            let trash = document.createElement('img');
            trash.className = 'trash';
            trash.addEventListener('click', function (event) {
                event.target.parentElement.remove();
                console.dir(event.target.parentElement.innerText);
                movieDB.movies = movieDB.movies.filter(function (el) {
                    return el.name.toUpperCase !== event.target.parentElement.innerText;
                })
                console.log(movieDB.movies)
            });
            trash.src = 'icons/trash.png'
            li.append(trash);
            ul.append(li);


            // console.log()
        }

    })
}
renederList(0)

let background = document.querySelector(".komedia");
background.style.backgroundImage = 'url("./img/bg.jpg")';

let komedia = document.querySelector('.first');
komedia.innerHTML = "Drama";

// let trash = document.querySelectorAll('.trash');
// console.log(trash);

// trash.forEach( function (el) {
//     el.addEventListener('click', function (event) {
//         event.target.parentElement.remove();
//     })
// });

let form = document.querySelector('#form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let inputTextValue = document.querySelector('.addName');
    let checkBox = document.querySelector('#checkbox').checked;
    let newFilm = {
        name: inputTextValue.value,
        like: checkBox,
    }
    // console.log(newFilm.inputTextValue)
    let newLength = movieDB.movies.push(newFilm);
    inputTextValue.value = '';
    document.querySelector('#checkbox').checked = false;
    // console.log(movieDB.movies)
    renederList(newLength - 1);

});
