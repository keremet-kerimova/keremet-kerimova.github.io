// let button = document.querySelector("button");
// let input1 = document.querySelector("#name");
// let input2 = document.querySelector("#massage");
// let input3 = document.querySelector("#color");
// button.addEventListener("click", function() {
//     console.log(input1.value);
//     console.log(input2.value);
//     console.log(input3.value);
//     let div = document.createElement("div");
//     let spantext = document.createElement("span");
//     let spanmass = document.createElement("span");
//     spantext.innerText = input1.value + ':';
//     spanmass.innerText = input2.value;
//     spantext.style.color = input3.value;
//     div.append(spantext);
//     div.append(spanmass);
//     document.body.append(div)
// });

// button.addEventListener('click', function(){
//     fetch("https://live-chat-6d38e-default-rtdb.firebaseio.com/chat.json", {
//         method: "POST",
//         body: JSON.stringify({
//             name: inputName.value,
//             message: inputMessage.value,
//             color: inputColor.value,
//         }),
//     })





let input1 = document.querySelector('#name');
let input2 = document.querySelector('#color');
let input3 = document.querySelector('#message');
let button = document.querySelector('button');


button.addEventListener('click', function () {
    let div = document.createElement('div');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');


    span1.innerText = input1.value;
    span2.innerText = input2.value;
    span1.style.color = input2.value;
    div.append(span1);
    div.append(span2);
    document.body.append(div)
});

fetch("https://live-chat-6d38e-default-rtdb.firebaseio.com/.json", {
    method: "POST",
    body: JSON.stringify({
        name: input1.value,
        message: input3.value,
        color: input2.value,
    }),
})
fetch('https://live-chat-6d38e-default-rtdb.firebaseio.com/.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (const key in data) {
            let div = document.createElement('div');
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');
            div.append(span1);
            div.append(span2);
            document.body.append(div)

            span1.innerText = input1.data;
            span2.innerText = input2.data;
            span1.style.color = input2.data;

        }
    })
