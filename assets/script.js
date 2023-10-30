// task 1
// localstorageye elave
// localStorage.setItem("name","Asli")
// let name=localStorage.getItem("name")

// localStorage.setItem("surname","Nasirova")
// let surname=localStorage.getItem("surname")

// localStorage.setItem("username","asli")
// let username=localStorage.getItem("username")

// localStorage.setItem("password","2004")
// localStorage.getItem("password")
// let password

// const p=document.createElement("p")
// const body=document.createElement("body")
// // p.textContent=document.createElement("name")

// p.innerHTML=localStorage.getItem("name")+" ",localStorage.getItem("surname")+" ",localStorage.getItem("username")+" ",localStorage.getItem("password")+" ";

// body.append(p)
// console.log(p);

// task 2
// const input = document.querySelector('input');
// const container = document.querySelector('container');
// const click = document.getElementById('click');
// const list=document.getElementById('list')

// click.addEventListener("click", () => {
  
//   if (input.value === "") {
//     return;
//   }
 
//   const li = document.createElement("li");
//   const inp=document.createElement('input')

//   inp.setAttribute("type","checkbox")

//   li.textContent=input.value
//   inp.onclick=()=>
//   inp.checked ? li.classList.add("xett"): li.classList.remove("xett");
 
//   li.appendChild(inp)
//   list.appendChild(li)

//   input.value = " ";
// });


// task 3

// localStorage.setItem("username","asli")
// let username=localStorage.getItem("username")

// localStorage.setItem("password","2004")
// let passsword=localStorage.getItem("password")

// const username=document.getElementById("username")
// const passsword=document.getElementById("password")
// const save=document.getElementById("save")

// save.addEventListener("click",(e)=>{
//     e.preventDefault();
//    const usernamess=username.value;
//   const paswordss=passsword.value;


//     obj={
//         ad:usernamess,
//        parol:paswordss

//     }

//     localStorage.setItem("obyekt",JSON.stringify(obj))
//     const element =JSON.parse(localStorage.getItem("obyekt"))
//     console.log(element);
// }

// )
