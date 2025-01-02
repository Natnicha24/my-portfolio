let weight = document.querySelector('#weigth')
let height = document.querySelector('#height')
let output = document.querySelector('#output')
let btn = document.querySelector('#submitBtn')
let section = document.querySelectorAll('.input-section')


btn.addEventListener('click', (e) => {

    if (weight.value != '' && height.value != '') {
        e.preventDefault();
        output.innerText = calculateBmi(weight.value, height.value)
        output.style.display = 'inline';
        weight.style.marginBottom = '30px'
        height.style.marginBottom = '30px'
        for (const e of section) {
            e.style.border = 'none'
        }

    }
    else {
        alert('Please fill your data')
    }

})


weight.addEventListener('input', () => {
    output.style.display = 'none';
    weight.style.marginBottom = '50px'
    height.style.marginBottom = '50px'
    for (const e of section) {
        e.style.borderBottom = '1px solid rgba(0, 0, 0, 0.467)'
    }
})

height.addEventListener('input', () => {
    output.style.display = 'none';
    weight.style.marginBottom = '50px'
    height.style.marginBottom = '50px'
    for (const e of section) {
        e.style.borderBottom = '1px solid rgba(0, 0, 0, 0.467)'
    }
})



function calculateBmi(weight, height) {
    console.log(weight,height)
    let heightm = height / 100
    let bmi = weight / (Math.pow(heightm, 2))
    bmi = bmi.toFixed(2)
    if (bmi >= 30) {
        return `ค่า BMI ของคุณคือ ${bmi} | คุณอยู่ใน สภาวะอ้วนอย่างมาก`
    }
    else if (bmi <= 29.99 && bmi >= 25) {
        return `ค่า BMI ของคุณคือ ${bmi} | คุณอยู่ใน สภาวะอ้วน`
    }
    else if (bmi <= 24.99 && bmi >= 23) {
        return `ค่า BMI ของคุณคือ ${bmi} | คุณอยู่ใน สภาวะมีน้ำหนักเกิน`
    }
    else if (bmi <= 22.99 && bmi >= 18.5) {
        return `ค่า BMI ของคุณคือ ${bmi} | คุณอยู่ใน สถานะรูปร่างปกติ`
    }
    else {
        return `ค่า BMI ของคุณคือ ${bmi} | คุณอยู่ใน สภาวะผอม`
    }


}