const giveMeOne = async () => {
    return 1
};

(async ()=>{
    const one = await giveMeOne();
    console.log(one)
})()


console.log(3);