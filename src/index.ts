// const text: string = 'ito!!!';
console.log();
var matTab = [
    [0, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
];
for (let i = 0; i < matTab.length; i++) {
    // const element = array[index];
    console.log(matTab);
}
//typescrypte
var tab = [0, 3, -5, 12, -18, -20];
var a = tab[2];
var b = Array(5);
for (let i = 0; i < tab.length; i++) {
    if (tab[i] > 0) {
        b[i] = a + tab[i];
    } else {
        b[i] = a + tab[i];
    }
    console.log('La Somme des entiter et index=2 est:' + b[i]);
}

console.log('la fin du tableau est:' + tab[tab.length - 1]);
//tri tableau
tab.sort(function (a, b) {
    return a - b;
});
console.log(tab);
