//Bài 9
// m = [1,2,3,4,5,6,"hh", "9",80,100]
// let newM = m.filter(item=>typeof(item)=="number");
// console.log("newM, newM");

// let mSquared = New.map(item => item*item);
// console.log("mSquared, mSquared");





//Bài 10
// let str = ' High knowledge, high return';

// //Sử dụng split để tách chuỗi thành từng phần tử mảng 
// let arr = str.split(" ");
// console.log("arr",arr)
// let newArr = arr.filter((item => item != ""));
// console.log("NewArr:",newArr)



// Bài 11
// class People {
//     constructor (name, age, address) {
//         this._name = name;
//         this._age = age;
//         this._address = address;
//     }
// }


// class Sudent extends People{
//     constructor(name, age, address, id, math, chemistry, physical) {
//         super(name, age, address);
//         this._id = id;
//         this._math = math;
//         this._chemistry = chemistry;
//         this._physical = physical;
//     }

//     get math() {
//         return this._math;
//     }
//     get chemistry() {
//         return this._chemistry;
//     }
//     get physical() {
//         return this._physical;
//     }



//     set math(newMath) {
//         this._math = newMath;
//     }
//     set chemistry(newChemistry) {
//         this._chemistry = newChemistry;
//     }
//     set physical(newPhysical) {
//         this._physical = newPhysical;
//     }


// GPA () {
//     return (this._math + this._physical + this._chemistry)/3;
// }
// }

// let Nga = new Student("Nga", 17, "Hanoi", 123456789, 10, 10, 10);

// Nga._math = 9;
// console.log(Nga._math);

// console.log(
// Nga.GPA()
// );



class Hinh {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
}


class TamGiac extends Hinh {
    constructor(width, height) {
        super(width, height);
    }

    area() {
        return (this._width * this._height) / 2;
    }
}
class HinhChuNhat extends Hinh {
    constructor(width, height) {
        super(width, height);
    }
    area() {
        return this._width * this._height;
    }
}


//khai bao ham main
const main = () => {
    const triangle = new TamGiac(5, 8);
    const rectangle = new HinhChuNhat(4, 10);

    console.log(`Dien tich hinh tam giac la ${triangle.area()}`);
    console.log(`Dien tich hinh chu nhat la ${rectangle.area()}`);

}

main();