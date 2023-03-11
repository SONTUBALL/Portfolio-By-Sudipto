/*   ========  

                Creating a responsive navbar componenet

                                                =======   */


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
    headerElem.classList.toggle("active");
})








/*   ========  

                Creating a portfolio tabbed componenet

                                                =======   */



const p_btns =document.querySelector('.p-btns');
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elem=document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click' , (e) =>{
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);


    //  ==  clicked Effect tranlateY
    p_btn.forEach((curElem) =>curElem.classList.remove('.p-btn-active'));
    p_btn_clicked.classList.add('.p-btn-active');




    //   find dataset
    const btn_num = p_btn_clicked.dataset.btnNum;    // === btn-num = btnNum
    console.log(btn_num);



    // which image is being active
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    console.log(img_active);

    p_img_elem.forEach((curElem) => curElem.classList.add('p-image-not-active'));
    img_active.forEach((curElem) => curElem.classList.remove('p-image-not-active'));
});




// ==========================  Swiper JS Section   =================



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay :2500,
        disableOnInterraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



    const myJsmedia = () => {
        if(widthSize.matches){
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
          });
        }else{
            new Swiper(".mySwiper", {
                slidesPerView: 3,
                spaceBetween: 30,
              });
            }
    }
   const widthSize = window.matchMedia("(max-width:780px)");
//    Call listener function at run time
   myJsmedia(widthSize);
//    Attach listener function on state changes
   widthSize.addEventListener("change", myJsmedia)




  // ==========================  Scroll to top button making   =======================


const herosection= document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");  // this line select the class of footer in html


const scrollElement =document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
    herosection.scrollIntoView({behaviour: "smooth"});
}
scrollElement.addEventListener("click",scrollTop);






// ==========================Animated Numbers ===============


const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        console.log(targetNumber);


        const initialNum = parseInt(curElem.innerText);
        console.log(initialNum);


        const incrementNumber = Math.trunc(targetNumber/ speed);
        console.log(incrementNumber);


        if (initialNum < targetNumber) {
            curElem.innerText = ` ${initialNum + incrementNumber}+`;
            setTimeout(updateNumber , 10);      
        }
    };
    updateNumber();
})

