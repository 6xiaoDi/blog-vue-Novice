document.onclick = async function() {
    // console.log(b);

    let result = await import('./b.js');
    console.log(result)
};