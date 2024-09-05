let diaryData = [];

let diaryLocal = [];
diaryLocal = JSON.parse(localStorage.getItem("diaryData"))

window.onload = () => {
    // const loginName = prompt("이름을 입력해 주세요!")
    // document.getElementById("header__login").innerText = loginName;
    // document.getElementById("footer__login").innerText = loginName;
    // document.querySelector(".footer__copy").innerText = `Copyright © 2024. ${loginName} `
    makeDiaryCard(diaryLocal)
}

function makeDiaryData () {
    const mood = document.getElementsByName("mood")

    let diaryMood;
    for ( i=0 ; i < mood.length ; i++ ) {
        if ( mood[i].checked ) {
            diaryMood = mood[i].value;
        }
    };

    const getDate = new Date();
    const getYear = getDate.getFullYear().toString();
    const getMonth = (getDate.getMonth() +1).toString().padStart(2, "0");
    const getDay = getDate.getDate().toString().padStart(2, "0");
    
    const diaryDate = `${getYear}. ${getMonth}. ${getDay}`

    const diaryTitle = document.getElementById("diaryTitle").value
    const diaryContent = document.getElementById("diaryContent").value

    let tempDiary = {
        mood: diaryMood,
        date: diaryDate,
        title: diaryTitle,
        content: diaryContent,
        comment: []
    }

    if ( diaryMood !== undefined && diaryTitle !== "" && diaryContent !== "" ) {
        for ( i=0 ; i < mood.length ; i++ ) {
            mood[i].checked = false;
        }
        document.getElementById("diaryTitle").value = ""
        document.getElementById("diaryContent").value = ""
    } else {
        alert("일기를 마저 작성해 주세요!!")
    }

    diaryData = JSON.parse(localStorage.getItem("diaryData")) || []
    diaryData.push(tempDiary)

    localStorage.setItem("diaryData", JSON.stringify(diaryData))
    diaryData = JSON.parse(localStorage.getItem("diaryData"))

    // makeDiaryTemp ( tempDiary );
    makeDiaryCard(diaryData);
};

// function makeDiaryTemp(temp) {
//     if (diaryData.length !== 0) {
//         const diaryCard = document.createElement("div");
//         diaryCard.className = "wrapper__card"
//         diaryCard.innerHTML =
// `
// <div class="card__img">
//     <img src="./asset/card__${temp.mood}.png">
// </div>
// <div class="card__topic">
//     <div class="card__status">
//         <div class="card__${temp.mood}">${moodIndex[temp.mood]}</div>
//         <div class="card__date">${temp.date}</div>
//     </div>
//     <div class="card__title">${temp.title}</div>
// </div>
// `
//         document.querySelector(".content__left__card").append(diaryCard);
//         diaryCard.onclick = () => alertDiary(temp);
//     };
// };

// function alertDiary(temp) {
//     alert(
// `
// 제목: ${temp.title}
// 기분: ${temp.mood}
// 날짜: ${temp.date}
// 내용: ${temp.context}
// `
//     )
// };

function makeDiaryCard(diary) {
    const moodIndex = {
        happy: "행복해요",
        sad: "슬퍼요",
        surprise: "놀랐어요",
        angry: "화나요",
        etc: "기타"
    };

    if ( diary !== null ) {
        const diaryCard = document.querySelector(".body__left__card")
        diaryCard.innerHTML = diary.map( (el, index) =>
`
<div class="wrapper__card">
    <a href="./depth01/myDiary_detail.html?page=${index}">
        <div class="card__delete" onclick="deleteDiary(${index})"></div>
        <div class="card__img">
            <img src="./asset/card__${el.mood}.png">
        </div>
        <div class="card__topic">
            <div class="card__status">
                <div class="card__${el.mood}">${moodIndex[el.mood]}</div>
                <div class="card__date">${el.date}</div>
            </div>
            <div class="card__title">${el.title}</div>
        </div>
    </a>
</div>
`
        ).join("");
    } else {
        console.log( "받아올 데이터가 없어요!!" )
    };
};

function activeFilter (event) {
    const filterMood = event.target.value;

    let filterDiary = JSON.parse(localStorage.getItem("diaryData"))

    switch (filterMood) {
        case "all": {
            filterDiary = filterDiary.filter( el => el.mood )
            makeDiaryCard(filterDiary)
            break
        }
        case "happy": {
            filterDiary = filterDiary.filter( el => el.mood === "happy" )
            makeDiaryCard(filterDiary)
            break
        }
        case "sad": {
            filterDiary = filterDiary.filter( el => el.mood === "sad" )
            makeDiaryCard(filterDiary)
            break
        }
        case "surprise": {
            filterDiary = filterDiary.filter( el => el.mood === "surprise" )
            makeDiaryCard(filterDiary)
            break
        }
        case "angry": {
            filterDiary = filterDiary.filter( el => el.mood === "angry" )
            makeDiaryCard(filterDiary)
            break
        }
        case "etc": {
            filterDiary = filterDiary.filter( el => el.mood === "etc" )
            makeDiaryCard(filterDiary)
            break
        }
        default: {
            filterDiary = JSON.parse(localStorage.getItem("diaryData"))
            makeDiaryCard(filterDiary)
        }
    }
}

function deleteDiary(index) {
    event.preventDefault()
    diaryLocal.splice(index, 1)
    localStorage.setItem("diaryData", JSON.stringify(diaryLocal))
    window.location.reload()
}

window.addEventListener('scroll', () => {
    window.scrollY > 400 ?
    document.querySelector(".nav__filter").style = "background-color: #222; color: #fff; transition: 0.2s;" :
    document.querySelector(".nav__filter").style = "background-color: #fff; color: #222; transition: 0.2s;"
})

document.querySelector(".container__floating").addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})

document.getElementById("diaryButton").addEventListener('click', makeDiaryData);