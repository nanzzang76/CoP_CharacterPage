// 엄마승인
document.addEventListener("DOMContentLoaded", function () {
  const mamaStar3 = document.querySelector(".mama .star3");
  const approvedImg = document.querySelector(".approved img");

  mamaStar3.addEventListener("click", function () {
    // display: block으로 보이게
    approvedImg.style.display = "block";

    // transition 제거 → 즉시 width 100%로 초기화
    approvedImg.style.transition = "none";
    approvedImg.style.width = "100%";

    // 강제로 reflow 발생시켜서 초기화가 반영되도록
    void approvedImg.offsetWidth;

    // transition 추가 → width 15%로 줄이기 (애니메이션 발동)
    approvedImg.style.transition = "width 0.3s ease";
    approvedImg.style.width = "15%";
  });
});

// 록리등장
document.addEventListener("DOMContentLoaded", function () {
  const clickMeBtn = document.querySelector(".clickme");
  const rocklee2 = document.querySelector(".rocklee2");
  const rockleeShadow1 = document.querySelector(".rocklee_shadow1");
  const rockleeShadow2 = document.querySelector(".rocklee_shadow2");
  const cloud = document.querySelector(".cloud");
  const rockleeText = document.querySelector(".rocklee_text");

  clickMeBtn.addEventListener("click", function () {
    console.log("clicked!"); // 실행 확인용

    [rocklee2, cloud].forEach((el) => {
      el.style.animation = "shoot 0.5s forwards";
    });

    rockleeShadow1.style.animation = "shoot 0.5s 0.2s forwards";
    rockleeShadow2.style.animation = "shoot 0.5s 0.4s forwards";

    // rocklee_text
    if (rockleeText) {
      console.log("rocklee_text found!");
      rockleeText.style.opacity = "1";
    } else {
      console.log("rocklee_text NOT found!");
    }
  });
});

// 메가디스크립션
document.addEventListener("DOMContentLoaded", function () {
  const text5Lines = document.querySelectorAll(".text5 span");
  const text6Lines = document.querySelectorAll(".text6 span");
  const maxIndex = text5Lines.length - 1;

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollRatio = scrollTop / docHeight;

    // 스크롤 위치로 진해질 줄 결정
    const activeIndex = Math.floor(scrollRatio * maxIndex);

    // .text5: 아래로 진해짐
    text5Lines.forEach((line, index) => {
      if (index === activeIndex) {
        line.style.opacity = 1;
      } else if (index === activeIndex - 1 || index === activeIndex + 1) {
        line.style.opacity = 0.8;
      } else if (index === activeIndex - 2 || index === activeIndex + 2) {
        line.style.opacity = 0.6;
      } else {
        line.style.opacity = 0.3;
      }
    });

    // .text6: 위로 진해짐 (반대로 계산)
    const activeIndex6 = maxIndex - activeIndex;
    text6Lines.forEach((line, index) => {
      if (index === activeIndex6) {
        line.style.opacity = 1;
      } else if (index === activeIndex6 - 1 || index === activeIndex6 + 1) {
        line.style.opacity = 0.8;
      } else if (index === activeIndex6 - 2 || index === activeIndex6 + 2) {
        line.style.opacity = 0.6;
      } else {
        line.style.opacity = 0.3;
      }
    });
  });
});
