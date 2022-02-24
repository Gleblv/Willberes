function getGoods () {
    const nav = document.querySelectorAll(".navigation-item");

    fetch("/db/db.json") 
    .then(resp => (resp.json()))
    .then(data => {
        localStorage.setItem("data", JSON.stringify(data));
    })
    .then(data => {
        nav.forEach(item => {
            item.addEventListener("click", () => {
                console.log(data);
            });
        });
    })
}

getGoods();