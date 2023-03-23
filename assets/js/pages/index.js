let $ = document;

// Pop Up for Products Descriptions
const { computePosition, shift, flip, offset } = window.FloatingUIDOM;
const products = $.querySelectorAll('.products__product');
const events = [["mouseenter", showPopUp], ["mouseleave", hidePopUp]];
let popUpElem;
let productElem;

products.forEach(product => {
    events.forEach(([evName, callback]) => {
        product.addEventListener(evName, callback);
    });
});

function update(refrenceEl, floatingEl) {
    computePosition(refrenceEl, floatingEl, {
        placement: 'bottom',
        middleware: [offset(3), flip(), shift({ padding: 100 })]
    }).then(({ x, y }) => {
        floatingEl.style.left = `${x}px`;
        floatingEl.style.top = `${y}px`;
    });

}

function showPopUp(e) {
    productElem = e.target.closest('.products__product');
    popUpElem = productElem.children[1];

    popUpElem.style.display = 'block';

    update(productElem, popUpElem);
}

function hidePopUp(e) {
    popUpElem = e.target.closest('.products__product').children[1];

    popUpElem.style.display = 'none';
}

// Posts and Products Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.my-own-pagination',
        clickable: true,
        bulletClass: "bullet",
        bulletActiveClass: "active-bullet",
        type: 'bullets',
    },
});

const scrollBarSlider = new Swiper('.scrollbar-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 20,

    scrollbar: {
        el: '.swiper-scrollbar',
        enabled: false,
    }
});
