const ratingsEl = document.querySelectorAll(".rating");
const sendButton = document.querySelector("#send");
const panel = document.querySelector("#panel");

ratingsEl.forEach(el => {
  el.addEventListener("click", () => {
    ratingsEl.forEach(innerEl => {
      innerEl.classList.remove("active");
    });
    el.classList.add("active");
  });
});

sendButton.addEventListener("click", () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you, Simon!</strong>
    <p>We'll use your feedback to improve our customer experiences.</p>
    <button class="btn">Done</bottun>
  `;
});
