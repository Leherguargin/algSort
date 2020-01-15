export default class Algorytmy {
    static bubbleSortWithFlag = tab => { //sortowanie rosnąco z flagą kończącą gdy nie było zamiany
        let czas = Date.now();
        //console.time("pomiar");
        let swapped;
        let length = tab.length;
        let arr = [];
        for(let i=0;i<length;i++){
            arr[i] = tab[i];
        }
        do {
            swapped = false;
            for (let i = 0; i < length; i++) {
                if (arr[i] > arr[i + 1]) {
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    swapped = true;
                }
            }
            length--;
        } while (swapped);
        czas = Date.now() - czas;
        //console.timeEnd("pomiar");
        return czas;
    };

    static bubbleSort = tab => { //sortowanie bez flagi
        let czas = Date.now();
         let length = tab.length;
         let arr = [];
         for(let i=0;i<length;i++){
             arr[i] = tab[i];
         }
         do {
             for (let i = 0; i < length; i++) {
                 if (arr[i] > arr[i + 1]) {
                     let tmp = arr[i];
                     arr[i] = arr[i + 1];
                     arr[i + 1] = tmp;
                 }
             }
             length--;
         } while (length > 1);
         czas = Date.now() - czas;
         return czas;
    }

    static merge = (leftArr, rightArr) => {
        var sortedArr = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] <= rightArr[0]) {
                sortedArr.push(leftArr[0]);
                leftArr = leftArr.slice(1)
            } else {
                sortedArr.push(rightArr[0]);
                rightArr = rightArr.slice(1)
            }
        }
        while (leftArr.length)
            sortedArr.push(leftArr.shift());
        while (rightArr.length)
            sortedArr.push(rightArr.shift());
        return sortedArr;
    }
    static mergeSort(arr) {
        let czas = Date.now();
        if (arr.length < 2) {
            return arr;
        } else {
            var midpoint = parseInt(arr.length / 2);
            var leftArr = arr.slice(0, midpoint);
            var rightArr = arr.slice(midpoint, arr.length);
            return Algorytmy.merge(Algorytmy.mergeSort(leftArr), Algorytmy.mergeSort(rightArr));
            czas = Date.now() - czas; //nie może być rekurencyjne... chyba bo tak zwracać musi tablice ablo musi zwracać oba jako obiekt
        }
    }

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