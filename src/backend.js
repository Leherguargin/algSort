export default class Algorytmy {
    static bubbleSort = arr => {
        var czas = Date.now();
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
        czas = Date.now();
        //console.log(czas);
        return [czas, arr];
    };

    static generatorDanychLosowych(n) {
        //generuj "n" danych losowych
        let dane = [];
        for (let i = 0; i < n; i++) {
            dane[i] = Math.round(10 * Math.random());
        }
        return dane;
    }

    static generatorDanychPesymistycznych = n => {
        let dane = [];
        for (let i = 0; i < n; i++) {
            dane[i] = n - i;
        }
        return dane;
    }

    static generatorDanychOptymistycznych = n => {
        let dane = [];
        for (let i = 0; i < n; i++) {
            dane[i] = n - i;
        }
        return dane;
    }

}