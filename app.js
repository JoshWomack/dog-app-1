function watchForm() {
    $("form").submit(e => {
        e.preventDefault();
        const numDogs = $("#num-dogs-input").val();
        getDogImage(numDogs);
        $("#num-dogs-input").val(null)
    });
}

function getDogImage(numDogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${numDogs}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log("Assignment 1");
            console.log(data);
            console.log("Assignment 2");
            data.message.forEach(url => {
                console.log(url);
            })
            renderImages(data.message);
        })
        .catch(err => console.log(err));

}

function renderImages(urls_arr) {
    images = urls_arr.map(url => {
        return `<img src=${url} alt="random dog image" class="dog-image" />`
    }).join();
    $(".image-container").html(images);
}

$(function () {
    watchForm();
})