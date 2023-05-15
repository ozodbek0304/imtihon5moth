// let raqamlar = [55, 39, 21, 2, -10];

// function newRaqam() {
//   let raqam=  raqamlar.reverse();
//     console.log(raqam);
// } newRaqam();

// uchinchichi savol

// let raqamlar = [1, 2, 3, 4, 5];

// function newHisob() {
//     raqamlar.forEach(item => {
//         if (item % 2 === 0 && item > 0) {
//             console.log(item * 5);
//         } else if (item % 2 === 1 && item > 0) {
//        console.log(item*15)
//         }
//         else {
//          console.log("Mumkin emas");
//         }
//      })
//  }newHisob()

// To'rtinchi savol

//   let maqola = {
//     id: 20,
//     sarlavha: "Ozodbek",
//     tavsifi: "SoffStduy O'quvchisi",
//     yuklangan_sana: "15-05-2023",
//     rasm_manzili:
//       "https://uzum.uz/uz/product/Telefon-stikerlari-yopishtirish-237379",
//     link: "https://uzum.uz/uz/product/Telefon-stikerlari-yopishtirish-237379",
//     Kategoriyalar:["Frontend", "Backend"]
//   };


//  beshinchi savol

let ishlarRoyxati = [
  {
    id: 1,
    name: "Soff Study o’quv markaziga borish",
  },
  {
    id: 2,
    name: "Sport bilan shug’illanish",
  },
  {
    id: 3,
    name: "Jiyanim bilan aylanish",
  },
];

let table_tbody = document.querySelector(".table_tbody");

function render(data) {
    table_tbody.innerHTML=""
    let index = 0;
    data.map(item => {
        let tr = document.createElement("tr");
        let tdId = document.createElement("th");
        let tdName = document.createElement("td");
        let tdbtns = document.createElement("td");
        tdbtns.classList.add("d-flex", "gap-3")
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");
        let btn3 = document.createElement("button");

        btn3.setAttribute("onclick", `removitems(${index})`);
      btn1.innerText = "Qo'shish";
      btn1.setAttribute("data-bs-toggle", "modal");
      btn2.setAttribute("data-bs-toggle", "modal");
      btn1.setAttribute("data-bs-target", "#readMoadal");
      btn2.setAttribute("data-bs-target", "#readMoadal");
      btn1.setAttribute("onclick", `newItems(${index})`);
      btn1.setAttribute("onclick", `newTahrirlash(${index})`);
        btn2.innerText = "Tahrirlash";
        btn3.innerText = "O'chirish";

        btn1.classList.add("btn", "btn-primary");
        btn2.classList.add("btn", "btn-success");
        btn3.classList.add("btn", "btn-danger");
        
        tdId.innerText = item.id;
        tdName.innerText = item.name;
        console.log(item);
        tdbtns.appendChild(btn1);
        tdbtns.appendChild(btn2);
        tdbtns.appendChild(btn3);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdbtns);
        table_tbody.appendChild(tr);
        index++;
    })
} render(ishlarRoyxati);

function removitems(index) {
    ishlarRoyxati.splice(index, 1);
    render(ishlarRoyxati);
};

let editIndex;

function newTahrirlash(index) {
  editIndex = index;
  document.querySelector(".numberInput").value=ishlarRoyxati[index];
  document.querySelector(".nameInput").value=ishlarRoyxati[index]
}

function newItems(editIndex) {
  let numberInput = document.querySelector(".numberInput").value;
  let nameInput = document.querySelector(".nameInput").value;
  ishlarRoyxati[editIndex] = numberInput;
  ishlarRoyxati[editIndex] = nameInput;
  render(ishlarRoyxati);
}

// oltinchi savol



  // $.ajax("https://api.npoint.io/511e72cd83cab84374d6", {
  //   success: function (response) {
  //     response.map((item) => {
  //       console.log(item);
  //           const col = `
  //               <div class="card" style="width: 18rem;">
  //       <img src="${item.photo}" class=" py-2 " alt="${item.title}">
  //       <div class=" mb-2 ">
  //     <h4>${item.id}</h4>
  //     <p>${item.title}</p>
  //       </div>
  //     </div>
  //            `;
  //   $(".row_items").append(col);
  // });
  //   },
  // });
