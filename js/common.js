document.addEventListener("DOMContentLoaded", function () {
  const mamaStar3 = document.querySelector(".mama .star3");
  const approvedImg = document.querySelector(".approved img");

  mamaStar3.addEventListener("click", function () {
    // 먼저 display를 block으로 바꿔서 나타나게 함
    approvedImg.style.display = "block";

    // transition을 위해 처음에 width를 100%로 설정
    approvedImg.style.width = "100%";

    // 강제로 reflow 발생시켜 트랜지션 발동
    void approvedImg.offsetWidth;

    // width를 15%로 줄이는 애니메이션 실행
    approvedImg.style.transition = "width 0.3s ease";
    approvedImg.style.width = "15%";
  });
});
