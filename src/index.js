// write your code here
fetch(`http://localhost:3000/ramens`)
.then(resp => resp.json())
.then(data => data.forEach(ramen => {
    const newRamen = document.createElement("div");
    const ramenMenu = document.querySelector("#ramen-menu");
    
    newRamen.innerHTML = `
    <img src="${ramen.image}">
    `;

    newRamen.addEventListener("click", e => {
        const ramenDetail = document.querySelector("#ramen-detail");
        ramenDetail.querySelector(".detail-image").src = ramen.image;
        ramenDetail.querySelector(".name").innerText = ramen.name;
        ramenDetail.querySelector(".restaurant").innerText = ramen.restaurant;

        const ratingDisplay = document.querySelector("#rating-display");
        ratingDisplay.innerText = ramen.rating;

        const commentDisplay = document.querySelector("#comment-display");
        commentDisplay.innerText = ramen.comment;
    })

    ramenMenu.appendChild(newRamen);
}))

const newRamenForm = document.querySelector("#new-ramen");
newRamenForm.addEventListener("submit", e => {
    e.preventDefault();
    const newRamen = document.createElement("div");
    const ramenMenu = document.querySelector("#ramen-menu");
    newRamen.innerHTML = `
    <img src="${e.target.image.value}">
    `;
    ramenMenu.appendChild(newRamen);

    const ramenDetail = document.querySelector("#ramen-detail");
    ramenDetail.querySelector(".detail-image").src = e.target.image.value;
    ramenDetail.querySelector(".name").innerText = e.target.name.value;
    ramenDetail.querySelector(".restaurant").innerText = e.target.restaurant.value;

    const ratingDisplay = document.querySelector("#rating-display");
    ratingDisplay.innerText = e.target.rating.value;

    const commentDisplay = document.querySelector("#comment-display");
    commentDisplay.innerText = e.target["new-comment"].value;

    
    e.target.reset();
})