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
const rates = {
    som: 1,    
    usd: 87,   
    eur: 94    
};
const inputs = document.querySelectorAll('.inner_converter input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const fromCurrency = input.id;             
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            inputs.forEach(i => {
                if (i !== input) i.value = '';
            });
            return;
        }
        let inSom;
        if (fromCurrency === 'som') {
            inSom = value;
        } else {
            inSom = value * rates[fromCurrency];
        }
        inputs.forEach(other => {
            if (other === input) return;
            const toCurrency = other.id;
            let result;
            if (toCurrency === 'som') {
                result = inSom;
            } else {
                result = inSom / rates[toCurrency];
            }
            other.value = result.toFixed(2);
        });
    });
});
//если что извените сделал без data.json не хотел его добовлять