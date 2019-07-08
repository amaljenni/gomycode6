var arr = [1, 2, 1, 2];
function advancedSort(arr) {
    var h = 0;
    var b = [];
    var d = [];
    var a;
    var o;
    var c = 0;
    var m = 0;

    for (i = 0; i < arr.length; i++) {
        console.log(i)
        a = arr[i];
        // if (b.includes(a) == false) {

        c = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == a) {
                c = c + 1;

            }
        }
        for (k = 0; k < c; k++) {
            b[k] = a;
        }
        //h = h + 1;

        //for (o = 0 + m; o < h; o++) {
        //console.log(d);
        if (d.includes(b) == false) {


            d.push(b);
            //m = m + 1;

        }

        //}
        //}


    }

    return (d)
}