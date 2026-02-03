const categoryRef = document.querySelectorAll('.item')

function breakdownCategories(categories) {
    console.log('Number of categories: ', categories.length)
    categoryRef.forEach(category => {
        console.log('Category: ', category.firstElementChild.textContent)
        console.log('Elements: ', category.lastElementChild.childElementCount)
    })
}

breakdownCategories(categoryRef)