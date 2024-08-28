document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const mainContent = document.querySelector('main');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    mainContent.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
const categoryItems = document.querySelectorAll('.faq-category li');
const faqItems = document.querySelectorAll('.faq-item');

function showFaqItems(category) {
    faqItems.forEach(faq => {
        if (faq.getAttribute('data-category') === category) {
            faq.classList.add('active');
        } else {
            faq.classList.remove('active');
        }
    });
}

categoryItems.forEach(item => {
    item.addEventListener('click', function() {
      console.log("test")
        categoryItems.forEach(el => el.classList.remove('active'));

        this.classList.add('active');

        const selectedCategory = this.getAttribute('data-category');
        showFaqItems(selectedCategory);
    });
});

categoryItems[0].click();
});