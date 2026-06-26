
// var tambahPenumpang = function(namaPenumpang, penumpang) {
//     if (penumpang.length === 0) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else {
//         for ( let i = 0; i < penumpang.length; i++) {
//             if (penumpang[i] === undefined) {
//                 penumpang[i] = namaPenumpang;

//                 return penumpang;
//             }
//             else if (namaPenumpang === penumpang[i]) {
//                 alert("Nama tidak boleh sama");

//                 return penumpang;
//             }
//             else if (i == penumpang.length - 1) {
//                 penumpang.push(namaPenumpang);
//                 return penumpang;
//             }
//         }
//     }

// };

// function tambahPenumpang(namaPenumpang, penumpang) {
//     if (penumpang.length === 0) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//     } else {
//         penumpang.filter((namePenumpang, kursi) => {
//             if (namePenumpang === undefined) {
//                 namePenumpang = namaPenumpang;

//                 return penumpang;
//             }
//         });
//     }
// };

let penumpang = ["David", undefined, "Maulana"];

const tambahPenumpang = (namaPenumpang, penumpang) => {
    // 1. Cek duplikat
    if (penumpang.includes(namaPenumpang)) {
        console.log("Nama tidak boleh sama");
        return penumpang;
    }

    // 2. Cari kursi kosong (undefined)
    const indexKosong = penumpang.findIndex(item => item === undefined);

    if (indexKosong !== -1) {
        penumpang[indexKosong] = namaPenumpang;
    } else {
        penumpang.push(namaPenumpang);
    }

    return penumpang;
};

const hapusPenumpang = (namaPenumpang, penumpang) => {
    if (penumpang.length === 0) {
        console.log("Angkot masih kosong");
        return penumpang;
    }

    const index = penumpang.findIndex(
        item => item === namaPenumpang
    );

    if (index === -1) {
        console.log("Penumpang tidak ditemukan");
        return penumpang;
    }

    penumpang.splice(index, 1);
    return penumpang;
};
