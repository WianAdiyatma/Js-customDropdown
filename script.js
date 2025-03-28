const list = document.querySelectorAll('li')
const dropDown = document.querySelector('.dropdown')
const dropDownText = document.getElementById('dropdown-text')

dropDown.addEventListener('click', () => {
    list.forEach(li => {
        li.classList.toggle('hide')
        li.addEventListener('click', () => {
            dropDownText.textContent = li.textContent
            list.forEach((item) => item.classList.remove("active"));
            li.classList.add("active")
        })
    })
})