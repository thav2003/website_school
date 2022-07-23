import {
    buttonNextSlide_0,
    buttonNextSlide_1,
    buttonPrevSlide_0,
    buttonPrevSlide_1
} from '../help.js';
document.addEventListener('DOMContentLoaded', function() {
    init()
    buttonNext()
    window.onload = alert(localStorage.getItem("email"));
    window.onload = alert(localStorage.getItem("pass"));
    window.onload = alert(localStorage.getItem("name"));
},false)



const buttonNext=()=>{
    buttonNextSlide_0.onclick = ()=> {
        const row=document.getElementsByClassName('NewsRow')[0];
        const input=row.getElementsByTagName('input')
        for(var i=0; i<input.length; i++){
            if(input[i].checked && i<input.length-1){
                input[i+1].checked=true
                const old=getLabel(input[i])
                old.style.color="black"
                const lb=getLabel(input[i+1])
                lb.style.color="red"
                break;
            }
        }        
    }
    buttonNextSlide_1.onclick = ()=> {
        const row=document.getElementsByClassName('NewsRow')[1];
        const input=row.getElementsByTagName('input')
        for(var i=0; i<input.length; i++){
            if(input[i].checked && i<input.length-1){
                input[i+1].checked=true
                const old=getLabel(input[i])
                old.style.color="black"
                const lb=getLabel(input[i+1])
                lb.style.color="red"
                break;
            }
        } 
    }
    buttonPrevSlide_0.onclick = ()=> {
        const row=document.getElementsByClassName('NewsRow')[0];
        const input=row.getElementsByTagName('input')
        for(var i=input.length-1; i>=0; i--){
            if(input[i].checked && i>0){
                input[i-1].checked=true
                const old=getLabel(input[i])
                old.style.color="black"
                const lb=getLabel(input[i-1])
                lb.style.color="red"
                break;
            }
        } 
    }
    buttonPrevSlide_1.onclick = ()=> {
        const row=document.getElementsByClassName('NewsRow')[1];
        const input=row.getElementsByTagName('input')
        for(var i=input.length-1; i>=0; i--){
            if(input[i].checked && i>0){
                input[i-1].checked=true
                const old=getLabel(input[i])
                old.style.color="black"
                const lb=getLabel(input[i-1])
                lb.style.color="red"
                break;
            }
        } 
    }
}
const getLabel=(element)=>{
    return document.querySelector(`label[for='${element.id}']`);
}
const init=()=>{
    const input=document.getElementsByTagName("input")
    for(var i=0; i<input.length; i++){
        if(input[i].checked){
            const lb=getLabel(input[i])
                lb.style.color="red"
        }
    }
}






//===================Bỏ======================//
const data=[
    {
        subject:"Địa",
        amount:Math.floor(Math.random() * 100),
        image:"./public/assets/lam.jpg"
    },
    {
        subject:"Toán",
        amount:Math.floor(Math.random() * 100),
        image:"./public/assets/lam.jpg"
    },
    {
        subject:"Lý",
        amount:Math.floor(Math.random() * 100),
        image:"./public/assets/lam.jpg"
    },
    {
        subject:"Tin",
        amount:Math.floor(Math.random() * 100),
        image:"./public/assets/lam.jpg"
    },
];

const CreateMain=()=>{
    CreateSectionTracNghiem();
}

const CreateSectionTracNghiem=()=>{
    const section=document.getElementById("sectionTracNghiem");
    const divTitle=document.createElement("div")
    const divContainer=document.createElement("div");
    section.classList.add("sections")
    divTitle.classList.add("titleTracNghiem");
    divContainer.classList.add("titleContainer");

    const h3=document.createElement("h3");
    h3.classList.add("textTitle")
    const backgroudTitileTop=document.createElement("h3")
    backgroudTitileTop.classList.add("backgroundTitle")
    const decription=document.createElement("p");
    backgroudTitileTop.textContent="Ngẫu nhiên"
    h3.textContent="Trắc nghiệm ngẫu nhiên"
    decription.textContent="Đề thi được tạo ngẫu nhiên từ kho câu hỏi theo danh mục mà bạn lựa chọn"

    const divTop=document.createElement("div")
    divTop.classList.add("Ngẫu-Nhiên")
    divTop.append(backgroudTitileTop)
    divTop.append(h3)

    //div titile
    divTitle.append(divTop)
    divTitle.append(decription)
    
    //divContainer
    const list=WrapCategory(data);
    divContainer.append(list)

    section.append(divTitle);
    section.append(divContainer);
}

const WrapCategory=(data)=>{
    const divWrapCategory=document.createElement("div")
    divWrapCategory.classList.add("divWrapCategory")
    data.forEach(info=>{
        const category=CreateCategory(info);
        divWrapCategory.append(category)
    })
    return divWrapCategory
}

const CreateCategory=(info)=>{
    const divCategory=document.createElement("div")
    divCategory.classList.add("card");
    const divLeft=document.createElement("div")
    divLeft.classList.add("cardleft")
    const divRight=document.createElement("div")
    divRight.classList.add("cardright")

    const divCategoryContainer=document.createElement("div")
    divCategoryContainer.classList.add("divCategoryContainer")
    //div img
    const divImage=document.createElement("div")
    divImage.classList.add("divImg")
    const img=document.createElement("img")
    img.classList.add("imgCategory")
    img.src=info.image
    divImage.append(img)
    
    //div infocatgory
    const divInfoCategory=document.createElement("div")
    divInfoCategory.classList.add("divInfoCategory")
    const name=document.createElement("h5")
    name.classList.add("nameCategory")
    name.textContent=info.subject
    const amount=document.createElement("p")
    amount.classList.add("amountQuestion")
    amount.textContent="( "+ info.amount+" câu hỏi )"
    divInfoCategory.append(name)
    divInfoCategory.append(amount)

    //button
    const button=document.createElement("div")
    button.classList.add("button-category")
    const a=document.createElement("a")
    a.textContent="Bắt đầu"
    button.append(a)


    //div left add img + infocategory
    divLeft.append(divImage)
    divLeft.append(divInfoCategory)
    
    //div right add button
    divRight.append(button)
    
    divCategoryContainer.append(divLeft)
    divCategoryContainer.append(divRight)
    divCategory.append(divCategoryContainer)

    return divCategory
}


