const tabBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')

let tabIndex = 0  

const hideTabContent = () => {
    tabBlocks.forEach(block => {
        block.style.display = 'none'
    })

    tabItems.forEach(btn => {
        btn.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabBlocks[i].style.display = 'block'
    tabItems[i].classList.add('tab_content_item_active')
    tabIndex = i
}
hideTabContent()
showTabContent(0)
tabItems.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        hideTabContent()
        showTabContent(i)
    })
})
setInterval(() => {
    tabIndex++

    if (tabIndex >= tabBlocks.length) {
        tabIndex = 0
    }

    hideTabContent()
    showTabContent(tabIndex)
}, 3000)