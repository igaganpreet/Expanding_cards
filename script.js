const innerDiv=document.querySelectorAll('.inner');

innerDiv.forEach((inner)=>{
    inner.addEventListener("click",()=>{
        removeClassActive();
        inner.classList.add("active");
    })
    
})
function removeClassActive(){
    innerDiv.forEach((inner)=>{
        inner.classList.remove("active");
    })
}