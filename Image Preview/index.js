const img = document.querySelector('#img');
const input = document.querySelector('#img-input');

const fileReader = new FileReader;

fileReader.onload = (e) => {
    img.src = e.target.result
}

input.addEventListener('change', (e) => {
    let fileList = e.target.files;

    if (fileList.length === 1) {
        let file = fileList[0]
        fileReader.readAsDataURL(file)
    } else {
        img.src = './default_img.png'
    }
})