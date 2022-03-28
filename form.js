
function submitData()
{
    let nama = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value
    
    let dataObject = 
    {
        nama:nama,
        email:email,
        phone:phone,
        subject:subject,
        message:message

    }
   
    // console.log(nama);
    // console.log(email);
    // console.log(phone);
    // console.log(subject);
    // console.log(message)


    if (nama == '' ) {
        return alert("Nama wajib diisi")
    } else if (email == '' ) {
        return alert("Email wajib diisi")
    } else if (phone == '' ) {
        return alert("Phone wajib diisi")
    }else if (subject == '' ) {
        return alert("Subject wajib diisi")
    }else if (message == '' ) {
        return alert("Message wajib diisi")
    }


    let emailReciever = 'williamkurniawan10@gmail.com'
    let a = document.createElement('a')
    a.href  = `mailto:${emailReciever}?subject=${subject}&body=Hello My Name ${nama} ${message} please Contact Me For More Info ${phone}`
    a.click()

   
    console.log(dataObject())
}


//Catatan---------------------------------------------------------------
// //Variabel
// //let data bisa di rubah
// //var nama variabel bisa sama
// //cont isi data tidak bisa di rubah

// var name = "William"
//  name = "Adam"

// console.log(name)

// let name2 = "caca"
// name2 = "sherly"
// console.log(name2)

// // const name3 = "Wiliam"

// // console.log(name3)

//type data
// let name = "William "
// let umur = 15
// console.log(name+umur)
// console.log("Nama saya ", name, " Umur Saya ", umur," Tahun")
// console.log(`Nama saya ${name}`)

// let bill = 20
// let bill2 = 30
// console.log(bill+bill2) 

// //Condition
// let nama = "inshan"

// if(nama == "Rizky")
// {
//     console.log("Benar")
// }else
// {
//     console.log("salah")
// }

//function
// function bilangan()
// {
//     // let bill1= 11
//     // let bill2 = 13
//     // let hasil = bill1 + bill2
//     return hasil `selamat datang`
// }
// console.log(bilangan())

// function bilangan1(bill1,bill2)
// {
//     let hasil = bill1 + bill2
//     console.log(hasil)
// }
// bilangan1(23,32)

// --------------------------------------------------------------------------------

