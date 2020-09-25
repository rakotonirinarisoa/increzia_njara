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
var a = 0;
for (let i = 0; i < tab.length; i++) {
    if (tab[i] > 0) {
        a = a + tab[i];
    }
}
console.log('La Somme des entiter positif est:' + a);
//tri tableau
tab.sort(function (a, b) {
    return a - b;
});
console.log(tab);
