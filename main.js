window.onload = async function () {
    await fetchProject();

    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            console.log('have', target)
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

const scrollButton = document.querySelector('.know-me-button')
const aboutMESection = document.querySelector('.about-me-container')
const contactSection = document.querySelector('.contact-container')
const emailButton = document.getElementById('email')
const alertCopy = document.querySelector('.header-contact>a:nth-of-type(2)')
const contactBar = document.querySelector('#contact-bar')
const projectList = document.querySelector('.project-list')

alertCopy.setAttribute('data-copied', 'Click for copy')


scrollButton.addEventListener('click', () => {
    aboutMESection.scrollIntoView({ behavior: 'smooth' });
})

emailButton.addEventListener('click', () => {
    navigator.clipboard.writeText('natnicha.gaewnaihin@gmail.com')

})

alertCopy.addEventListener('click', () => {
    alertCopy.setAttribute('data-copied', 'Copied!');
});

alertCopy.addEventListener('mouseleave', () => {
    alertCopy.setAttribute('data-copied', 'Click for copy');
});

contactBar.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' })
})

async function fetchProject() {
    const res = await fetch('projectDetail.json')
    const data = await res.json()
    // console.log(data)
    ShowData(data)
}

function ShowData(data) {
    for (const e in data) {
        if(data[e].pin=="true"){
        const li = document.createElement('li')
        projectList.append(li)
        const a = document.createElement('a')
        a.setAttribute('href', data[e].link)
        li.append(a)
        const divPic = document.createElement('div')
        divPic.classList.add('project-image')
        a.append(divPic)
        const img = document.createElement('img')
        img.setAttribute('src', data[e].image)
        divPic.append(img)
        const divText = document.createElement('div')
        divText.classList.add('project-text')
        a.append(divText)
        const projectName = document.createElement('span')
        const b = document.createElement('b')
        b.innerText = data[e].projectname
        projectName.classList.add('text-size-16')
        projectName.append(b)
        divText.append(projectName)
        const divSkill = document.createElement('div')
        divSkill.classList.add('skill-text')
        divText.append(divSkill)

        for (let i = 0; i < data[e].skill.length; i++) {

            const skill = document.createElement('span')
            skill.innerText = data[e].skill[i]
            skill.classList.add(`${data[e].skill[i]}`)
            divSkill.append(skill)
        }

    }

    }
    const seeMoreDiv = document.createElement('div')
    seeMoreDiv.classList.add('seemore')
    projectList.append(seeMoreDiv)
    const aSeeMore = document.createElement('a')
    aSeeMore.innerText = 'see more...'
    aSeeMore.setAttribute('href', "./portfolioPage.html")
    aSeeMore.classList.add('text-size-16')
    seeMoreDiv.append(aSeeMore)
}
