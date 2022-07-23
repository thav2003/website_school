import {
    category,
    domain
} from '../help.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log(category)
    
    
    CreateWrap()
},false)




const CreateWrap=()=>{
    const left=document.getElementById('left')
    const wrap=document.createElement('div');
    wrap.classList.add('wrap')
    const iterator = Object.keys(category)
    for (const subject of iterator) {
        category[subject].forEach(item=>{
            const card=CreateCard(item)
            wrap.append(card)
        })
    }
    

    left.append(wrap)
}
const CreateCard=(item)=>{
    const card=document.createElement('div');
    const cardTop=document.createElement('div');
    const cardBottom=document.createElement('div');

    card.classList.add("card");
    card.classList.add("btn-shake")//thêm css class chứa hiệu ứng shake
    cardTop.classList.add("cardTop");
    cardTop.classList.add("img");
    cardBottom.classList.add("cardBottom");

    
    cardTop.style.backgroundImage=`url(${item.image})`
    cardTop.style.backgroundPosition="50%";
    

    const div1=document.createElement('div');
    const div2=document.createElement('div');
    const div3=document.createElement('div');


    const title=document.createElement('a')
    title.classList.add("cardTitle")
    title.href="#"
    title.textContent=item.title
    div1.append(title)

    const description=document.createElement('p')
    description.classList.add("cardDescription")
    description.textContent=`${item.amount} câu hỏi, ${item.time} phút`
    div2.append(description)

    const type=document.createElement('p')
    type.classList.add("cardType")
    type.textContent=item.subject
    div3.append(type)

    cardBottom.append(div1)
    cardBottom.append(div2)
    cardBottom.append(div3)

    //dùng thẻ a bọc thẻ cardTop để tạo 1 hình ảnh trỏ đến nơi làm bài
    const link=document.createElement('a');
    link.classList.add("cardTop")
    link.href="#"

    //tạo sự kiện click
    link.onclick=()=>{
        if(localStorage["data"]){
            localStorage.removeItem("data")
        }
        localStorage.setItem("data", JSON.stringify(item));
        window.location.href=domain+"/routes/kiểm_tra.html"
        
    }
    title.onclick=()=>{
        if(localStorage["data"]){
            localStorage.removeItem("data")
        }
        localStorage.setItem("data", JSON.stringify(item));
        window.location.href=domain+"/routes/kiểm_tra.html"  
    }

    link.append(cardTop)
    card.append(link)
    card.append(cardBottom)
    return card
}