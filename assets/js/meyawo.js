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
    window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-3a418.appspot.com/o/Rohan_Patra_Resume.pdf?alt=media&token=7869497d-d802-4235-98b9-09078b161935', '_blank');
}

function hireMe() {
    window.open('https://www.linkedin.com/in/rohan-patra-1b3778130/', '_blank');
}