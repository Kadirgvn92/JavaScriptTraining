



// var now = 2024;
// var models =  ['Toyota','Mazda','Mercedes', 'Opel']


// models.forEach(function(e){
//     console.log(e)
// });

var opel = {
    marka: "Opel",
    model: "Corsa",
    yil: "2015",
    renk: "mavi",
    otomatik: true
};

console.log(opel)

var Toyota = new Object();
Toyota.marka = "Toyota";
Toyota.modelss = "Auris";
Toyota.fites = "Otomatik";
Toyota.door = 4;

console.log(Toyota);

var arabalar = [
    {
        marka: "Opel",
        model: "Corsa",
    },
    {
        marka: "Toyota",
        model: "Auris"
    }
];

console.log(arabalar);

//Program

var personel = [
    {
        name:"Ali",
        lastName:"Yılmaz",
        gender:"Erkek",
        Phone:"05381712233",
        Address:"Mersin / Yenişehir",
        Meslek:"Bilgisayar Mühendisi",
        Diller:["İngilizce","Almanca"],
        Hobiler:"Sinema,Spor,Kitap"
    },
    {
        name:"Kadir",
        lastName:"Yılmaz",
        gender:"Erkek",
        Phone:"05381712233",
        Address:"Mersin / Yenişehir",
        Meslek:"Bilgisayar Mühendisi",
        Diller:["İngilizce","Almanca"],
        Hobiler:"Sinema,Spor,Kitap"
    },
    {
        name:"Osman",
        lastName:"Yılmaz",
        gender:"Erkek",
        Phone:"05381712233",
        Address:"Mersin / Yenişehir",
        Meslek:"Bilgisayar Mühendisi",
        Diller: ['İngilizce','Almanca'],
        Hobiler:"Sinema,Spor,Kitap"
    }
];

personel.forEach(function (element){
    console.log(element);
    element.Diller.forEach(function (dil){
        console.log(dil);
    });
});

