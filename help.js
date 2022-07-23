//những thứ cần thiết
export const domain='https://thav2003.github.io/website_school/'
export const category=[];
export const account=[];
export const test=[];//mảng 1 chiều nhận toàn bộ bài thi

//main
export const buttonNextSlide_0=document.getElementsByClassName("next")[0]
export const buttonNextSlide_1=document.getElementsByClassName("next")[1]
export const buttonPrevSlide_0=document.getElementsByClassName("prev")[0]
export const buttonPrevSlide_1=document.getElementsByClassName("prev")[1]

//index
export const btnSignIn=document.getElementById("btn_signin")
export const inputName=document.getElementById("inputName")
export const inputPass=document.getElementById("inputPass")

//kiểm tra
export const btnNext=document.getElementById("btnNext")
export const btnPrev=document.getElementById("btnPrev")

//test hiện giờ chỉ có 2 đề:Đề thi thử(đã tạo),Đề thi toán cao cấp(chưa tạo)

//đây sẽ là mảng 2 chiều nhận toàn bộ bài thi có thể [i][j] với i là tên bài thi,j là câu hỏi
test["Đề thi thử"]=[];//tạo mảng 2 chiều [i][j]
test["Đề thi Toán cao cấp"]=[];//tạo mảng 2 chiều [i][j]
const answer=['A','B','C','D']


//tạo Đề thi thử-có thể tạo bằng tay để đa dạng câu hỏi
for(var i=0;i<50;i++){
    test["Đề thi thử"][`Câu hỏi ${i+1}`]={
        question:`Thể tích của khối lăng trụ có diện tích đáy B và chiều cao h là`,//chỗ này sẽ điền câu hỏi
        A:"4/3 Bh",
        B:"3 Bh",
        C:"1/3 Bh",
        D:"Bh",
        answer:answer[Math.floor(Math.random() * 4)]
    }
}






category["Toán"]=[
    {
        subject:"Toán",
        title:"Đề thi thử",
        amount:50,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg" 
    },
    {
        subject:"Toán",
        title:"Đề thi thử",
        amount:50,
        time:90,
        class:"Lớp 10",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Toán",
        title:"Đề thi thử",
        amount:50,
        time:90,
        class:"Lớp 10",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Toán",
        title:"Đề kiểm tra 1 tiết môn Toán 11 năm 2019-2020 Trường THPT Phan Đình Phùng - Hà Nội (Đề số 1)",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 11",
        image:"../public/assets/Math.jpg"  
    },  
]
category["Địa"]=[
    {
        subject:"Địa",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Địa năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Địa",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Địa năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Địa",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Địa năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Địa",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Địa năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
]
category["Lý"]=[
    {
        subject:"Lý",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Lý năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Lý",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Lý năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Lý",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Lý năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Lý",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Lý năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
    {
        subject:"Lý",
        title:"Đề thi thử chuẩn cấu trúc minh họa số 01 Kỳ thi tốt nghiệp THPT môn Lý năm 2021",
        amount:Math.floor(Math.random() * (100-20))+20,
        time:90,
        class:"Lớp 12",
        image:"../public/assets/Math.jpg"  
    },
]

account.push({
    email: 'admin@gmail.com',
    password: 'admin',
    name:"Blue"
})
account.push({
    email: 'tester@gmail.com',
    password: '123',
    name:"Guest"
})
