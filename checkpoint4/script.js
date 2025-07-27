// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  const heartButtons = document.querySelectorAll(".fa-heart");
  const totalDisplay = document.querySelector(".total");

  // Function to calculate the total
  function updateTotal() {
    let total = 0;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const unitPriceText = card.querySelector(".unit-price").textContent;
      const unitPrice = parseFloat(unitPriceText.replace("$", ""));
      total += quantity * unitPrice;
    });

    totalDisplay.textContent = `${total} $`;
  }

  // PLUS button
  plusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const quantitySpan = btn.nextElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = ++quantity;
      updateTotal();
    });
  });

  // MINUS button
  minusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const quantitySpan = btn.previousElementSibling;
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantitySpan.textContent = --quantity;
        updateTotal();
      }
    });
  });

  // DELETE button
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card-body");
      card.remove();
      updateTotal();
    });
  });

  // HEART button
  heartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
    });
  });
});
