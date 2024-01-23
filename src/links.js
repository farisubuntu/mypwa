const main_url='https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/';

// const main_url='https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/10/10.json';
// lesson raw : https://raw.githubusercontent.com/farisubuntu/urdu-course/main/data/10/1001.json
function getBaseUrl(){
 return main_url;
}

function getUrl(cat_no){
 return `${main_url}${cat_no}/${cat_no}.json`;
}

let __CATS=[
 1,
10,
11,
12,
13,
14,
15,
16,
17,
2,
22,
23,
24,
25,
26,
27,
28,
29,
3,
30,
31,
34,
35,
36,
37,
38,
39,
4,
40,
5,
6,
7,
8,
88,
89,
9,
90,
91,

];


let _CATS= __CATS.sort(function(a,b){return a-b}) ;

export {getUrl,getBaseUrl,_CATS}
