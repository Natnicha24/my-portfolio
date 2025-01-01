window.onload = fetchProject()


const projectList = document.querySelector('.project-list-portfolio')
const contactBar=document.querySelector('#contact-bar')

contactBar.addEventListener('click',()=>{

    window.location.href='main.html#contact-container'
})

async function fetchProject() {
    const res = await fetch('projectDetail.json')
    const data = await res.json()
    console.log(data)
    ShowData(data)
}

function ShowData(data) {
    for (const e in data) {

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




















// const filterBtn = document.querySelector('.filter-button')

// filterBtn.addEventListener('click', () => {
//     toggleDropDown()
// })

// function toggleDropDown() {
//     const dropdown = document.querySelector('.skillList');
//     const currentDisplay = window.getComputedStyle(dropdown).display;

//     if (currentDisplay === 'block') {
//         dropdown.style.display = 'none';
//     } else {
//         dropdown.style.display = 'block';
//     }
// }