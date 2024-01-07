
let numbers = {
    async logData() {
        let favNum = 8;
        let url = `http://numbersapi.com/${favNum}?json`;
        let data = await $.get(url);
        console.log(data);
    }
};
numbers.logData();


let multipleNums = {
    async favNumsData() {
        let favNums = [8, 3, 23];
        let url = `http://numbersapi.com/${favNums}?json`;
        let data = await $.get(url);
        console.log(data);
    }
};
multipleNums.favNumsData()


let multipleFacts = {
    async multipleFactsData() {
        let favNum = 8;
        let numOfFacts = 4;
        

        for(let i=0; i< numOfFacts; i++) {
            let url = `http://numbersapi.com/${favNum}?json`;
            let data = await $.get(url);
            console.log(data);
        };
    }
};
multipleFacts.multipleFactsData()