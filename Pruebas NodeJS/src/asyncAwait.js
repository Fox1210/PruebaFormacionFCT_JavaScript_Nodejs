function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}


async function add1(x) {
    const a = await resolveAfter2Seconds(x);
    const b = await resolveAfter2Seconds(x);
    return x + a + b;
}

async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(x);
    return x + await p_a + await p_b;
}


add1(10).then(v => {
    console.log(v); // prints 30 after 4 seconds.
});

add2(20).then(v => {
    console.log(v); // prints 60 after 2 seconds.
});