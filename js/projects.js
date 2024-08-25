document.addEventListener("DOMContentLoaded", () => {
  console.log("hello!");
  fetch("assets/projects.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cardContainer = document.querySelector(".card-container");

      data.forEach((project) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
                    <div class="card-inner">
                        <div class="card-front">
                            <h3>${project.title}</h3>
                            <p>${project.shortDescription}</p>
                        </div>
                        <div class="card-back">
                            <p>${project.details}</p>
                        </div>
                    </div>
                `;

        cardContainer.appendChild(card);
      });
    });
});
