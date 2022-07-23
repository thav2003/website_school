import {
    test,
    btnNext,
    btnPrev,
} from '../help.js'


document.addEventListener('DOMContentLoaded', function() {
    PlaceDoing()
    const select=document.getElementsByClassName('select')[0];
    select.classList.add('selected')
    button()
   
},false)
const category=JSON.parse(localStorage["data"])
const data=test[category.title]
const iterator = Object.keys(data)
let key=[];
for (const questions of iterator) {
    key = Object.keys(data[questions])
    key=key.filter(i=>
        !(i.length!==1)
    )
}

const answer=new Array(category.amount).fill(-1)

const PlaceDoing=()=>{
    const left=document.getElementById('view')


    const title=document.createElement('h1');
    title.classList.add('title')
    title.textContent=category.title

    const divHeader=document.createElement('div')
    divHeader.classList.add('divHeader')
    divHeader.textContent=`Môn học: ${category.subject}, Có ${category.amount} câu hỏi, Làm trong ${category.time} phút`

    const divQuestion=document.createElement('div')
    const ul=document.createElement('ul')
    ul.classList.add('WrapQuestion')
    divQuestion.classList.add('divQuestion')

    for (const questions of iterator) {
        const li=document.createElement('li')
        li.classList.add('questions')
        li.classList.add('select')
        const strong=document.createElement('strong')
        const p=document.createElement('p')

        const table=document.createElement('table')
        table.classList.add('view')
        const tbody=document.createElement('tbody')
        const row1=document.createElement('tr')
        const row2=document.createElement('tr')
        
        strong.textContent=`${questions}`
        p.textContent=data[questions].question

        // tạo bảng table chứa A B C D
        
        for(var i=0;i<4;i++){
            const column1 = document.createElement('td')
            const column2 = document.createElement('td')
            const answer1=document.createElement('span')
            const answer2=document.createElement('span')
            const answerText1 = document.createElement('p')
            const answerText2 = document.createElement('p')
            if((i+1)%2!==0){
                answer1.textContent=key[i]
                column1.append(answer1)
                answer2.textContent=key[i+1]
                column2.append(answer2)
            }else{
                if(checkPS(data[questions][key[i-1]])){
                    const ps=convert(data[questions][key[i-1]])
                    answerText1.append(ps)
                    column1.append(ps)
                }else{
                    answerText1.textContent=data[questions][key[i-1]]
                    column1.append(answerText1)
                }
                
                answerText2.textContent=data[questions][key[i]]
                column2.append(answerText2)
            }
            row1.append(column1)
            row2.append(column2)
              
        }

        tbody.append(row1)
        tbody.append(row2)
        table.appendChild(tbody)

        li.append(strong)
        li.append(p)
        li.append(table)
        
      
        ul.append(li)
    }

    //add table vào
    divQuestion.append(ul)
   

    left.append(title)
    left.append(divHeader)
    left.append(divQuestion)
   
}

const convert=(string)=>{
    const value=string.split('/')
    const TS=document.createElement("span")
    TS.classList.add('frac')
    const tsValue=document.createTextNode('sup')
    tsValue.textContent=value[0]
    TS.append(tsValue)

    const MS=document.createElement("span")
    const msValue=document.createElement('sup')
    msValue.textContent=value[1].split(' ')[0]+' ';
    MS.append(msValue)
    // <span class="frac">
    //     <sup>12</sup>
    // <span>
    //     /
    // </span>
    //     <sub>256</sub>
    // </span>
    const symbol=document.createElement("span");
    symbol.textContent='/'
    const text=document.createElement('span')
    text.textContent=value[1].split(' ')[1]
    const p=document.createElement('p');
    
    p.append(TS);
    p.append(symbol)
    p.append(MS);
    p.append(text)
    return p

}

const checkPS=(string)=>{
    if(string.search('/')){
        return 1
    }else{
        return 0
    }
}

const button=()=>{
    const li=document.querySelectorAll('.select');
    const input=document.querySelectorAll('input[name="answer"]')
    btnNext.onclick=()=>{
        //selected.classList.remove('selected')
        for(var i=0;i<category.amount;i++){
            if(li[i].classList.contains("selected") && i<49){
                li[i].classList.remove("selected")
                li[i+1].classList.add("selected")
                saveAnswer(input,Array.from(li).indexOf( li[i] ))
                if(answer[Array.from(li).indexOf( li[i+1] )] &&answer[Array.from(li).indexOf( li[i+1] )] !==-1 ){
                    input[answer[Array.from(li).indexOf( li[i+1] )]-1].checked=true
                }else{
                    resetInput(input)
                }
                break;
            }
        }  
       for(var i=0;i<answer.length;i++){
        console.log(`a[${i+1}]`,answer[i])
       }
        
        
    }
    btnPrev.onclick=()=>{
        for(var i=category.amount-1;i>0;i--){
            if(li[i].classList.contains("selected") ){
                li[i].classList.remove("selected")
                li[i-1].classList.add("selected")
                //console.log(Array.from(li).indexOf( li[i] ))
                saveAnswer(input,Array.from(li).indexOf( li[i] ))
                if(answer[Array.from(li).indexOf( li[i-1] )] && answer[Array.from(li).indexOf( li[i-1] )]!== -1){
                    input[answer[Array.from(li).indexOf( li[i-1] )]-1].checked=true
                }else{
                    resetInput(input)
                }
                break;
            }
        }  
    }
}

const saveAnswer=(input,n)=>{
    for(var i=0;i<input.length;i++){
        if(input[i].checked){
            answer[n]=i+1;
        }
    }
}

const resetInput=(input)=>{
    for(var i=0;i<input.length;i++){
        input[i].checked = false
    }
}


