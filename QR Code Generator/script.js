const wrapper = document.querySelector(".wrapper");
generateBtn = wrapper.querySelector(".form button");
QRinput = wrapper.querySelector(".form input");
QRimg = wrapper.querySelector(".QR-Code img"); 

generateBtn.addEventListener("click", () => {
    let QRvalue = QRinput.value;
    if(!QRvalue) return; // If the input is empty then return from here
    generateBtn.innerText = "Generating QR Code...";
    QRimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${QRvalue}`;
    QRimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generating QR Code";
    });
});

