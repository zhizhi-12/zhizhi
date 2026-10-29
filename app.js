/* ==========================================
   LINK CARDS — ORIGINAL COLOR AFTER CLICK
========================================== */

const linkCards = document.querySelectorAll(".link");

linkCards.forEach(card => {

    card.addEventListener("click", function(){

        /* لابردنی active لە هەموو کارتەکان + blur بۆ لابردنی hover لە مۆبایل */
        linkCards.forEach(item => {
            item.classList.remove("active");
            item.blur();
        });

        /* زیادکردنی active بۆ ئەم کارتە */
        this.classList.add("active");

    });

});


/* ==========================================
   BOTTOM BUTTONS — ORIGINAL COLOR AFTER CLICK
========================================== */

const bottomButtons =
    document.querySelectorAll(".bottom a");

bottomButtons.forEach(btn => {

    btn.addEventListener("click", function(){

        /* لابردنی active لە هەموو دوگمەکان + blur */
        bottomButtons.forEach(item => {
            item.classList.remove("active");
            item.blur();
        });

        /* زیادکردنی active بۆ ئەم دوگمەیە */
        this.classList.add("active");

    });

});