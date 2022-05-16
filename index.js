const lis = document.querySelectorAll('.buttons-container>ul>li');


lis.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('list-active')
    })
})

const submitBtn = document.querySelector('.submit-btn')
submitBtn.addEventListener('click', () => {
    boxContainer = document.querySelector('.box-container');
    submitContainer = document.querySelector('.submit-container-inactive');
    submitFooter = document.querySelector('.submit-footer')
    amt = document.querySelectorAll('.list-active').length
    boxContainer.classList = 'box-container-inactive'
    submitContainer.classList = 'submit-container'

    submitFooter.textContent = `You selected ${amt} out of 5`
    
})
