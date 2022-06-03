const chieucao = document.getElementById("chieucao");
const goup = document.getElementById("scroll-bar");
var chieucaotrang = chieucao.offsetTop;
console.log(chieucaotrang);

window.addEventListener('scroll', function() {
    var dem = window.pageYOffset;
    console.log(dem)
    var height = dem / 1.3;
    goup.style.width = height + 'px';
})
var trangthaibanner = 'duoi';

function scrollHeader() {
    console.log(window.pageYOffset);
    const banner = document.getElementById('primary__right')
    var vitribanner = banner.offsetTop;
    if ((window.pageYOffset >= 57) && (window.pageYOffset <= 875)) {
        if (trangthaibanner == 'duoi') {
            trangthaibanner = "danghienthi";
            banner.classList.add('stop');
            banner.classList.remove('margin');


        }
    }
    if (window.pageYOffset > 875) {
        if (trangthaibanner == 'danghienthi') {
            banner.classList.remove('stop');
            banner.classList.add('margin');
            trangthaibanner = 'duoi'
        }
    }

    if ((window.pageYOffset < 57)) {
        if (trangthaibanner == 'danghienthi') {
            banner.classList.remove('stop');
            trangthaibanner = 'duoi'
        }
    }
}
window.addEventListener('scroll', scrollHeader);