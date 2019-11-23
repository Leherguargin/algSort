export default class Algorytmy {
    static bubbleSort = arr => { //sortowanie rosnąco
        let czas = Date.now();
        console.time("pomiar");
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    swapped = true;
                }
            }
        } while (swapped);
        czas = Date.now() - czas;
        console.timeEnd("pomiar");
        return czas;
    };

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    static generatorDanychLosowych(n) { //jakie dane losować?
        let dane = [];
        for (let i = 0; i < n; i++) {
            dane[i] = this.getRandomInt(0, n);
        }
        return dane;
    }

    static generatorDanychPesymistycznych = n => { //dobrze?
        let dane = [];
        for (let i = 0; i < n; i++) {
            dane[i] = n - i;
        }
        return dane;
    }

    static generatorDanychOptymistycznych = n => { //dobrze?
        let dane = [];
        for (let i = 0; i < n; i++) {
            dane[i] = i;
        }
        return dane;
    }

}