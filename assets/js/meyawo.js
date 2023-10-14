/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


function downloadCV() {
    window.open('https://firebasestorage.googleapis.com/v0/b/ujjwalbarmandotin.appspot.com/o/Rohan_patra_CV.pdf?alt=media&token=edb2f0dd-701a-4f8c-a89b-e0ef8981bd23&_gl=1*k0i9mo*_ga*MTg1NDc4NzQ1NC4xNjk2MDE0ODM5*_ga_CW55HF8NVT*MTY5NzMwNTg3Ni4xMC4xLjE2OTczMDU5MzguNTguMC4w', '_blank');
}

function hireMe() {
    window.open('https://www.linkedin.com/in/rohan-patra-1b3778130/', '_blank');
}