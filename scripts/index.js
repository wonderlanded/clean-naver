
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByClassName('special_bg')[0].style.height = '1500px'
    document.getElementsByClassName('search')[0].style['margin-top'] = '-300px'
    var links = document.getElementsByClassName('area_links')[0]
    var logo = document.getElementsByClassName('area_logo')[0]
    var nav = document.getElementsByClassName('section_navbar')[0]
    var footer = document.getElementsByClassName('section_footer')[0]
    var container = document.getElementsByClassName('container')[0]
    hide(links); hide(logo); hide(nav); hide(footer); hide(container)
})

function hide(el){
    el.style.display = 'none'
}

