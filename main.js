const header = document.getElementsByTagName("header")[0];

header.children[0].addEventListener('mouseover', () => {
    header.children[1].classList.add('over')
})

header.children[0].addEventListener('mouseleave', () => {
    header.children[1].classList.remove('over')
})