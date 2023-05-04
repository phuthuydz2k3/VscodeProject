const printMess = () => {
    const messLength = Math.floor(Math.random() * 50) + 1;
    console.log(messLength);
    let mess = '';
    for (let i = 0; i < messLength; i++) {
        mess += String.fromCharCode((Math.floor(Math.random() * 97) + 30))
    }

    console.log(mess);
}

printMess()