const head=document.getElementById("head")
const body=document.getElementById("mainbody")
const heading=document.getElementById("heading")
const inputBillamount=document.getElementById("inputbill")
const totalMemberscount=document.getElementById("totalmembers")
const ratinglists=document.getElementById('rating')
const button=document.getElementById("button")
const finalamount= document.getElementById('finalamount')






 
function tippercent(){
    const ratinglist= parseInt(`${ratinglists.value}`)
 const inputamount= parseInt(`${inputBillamount.value}`)
  const totalpeople= parseInt(`${totalMemberscount.value}`)
const tippercentage= inputamount/100
const tippercentagefinal=tippercentage*ratinglist
const forEachperson=tippercentagefinal/totalpeople

finalamount.textContent=`Rs ${forEachperson}-Each`
}
button.addEventListener('click',tippercent)





head.style.backgroundColor="dodgerblue"
head.style.width="400px"
head.style.height="60px"
head.style.borderRadius="10px"

body.style.borderRadius="10px"
body.style.backgroundColor="gray"
body.style.width="400px"
body.style.height="625px"
body.style.left="700px"
body.style.top="200px"
body.style.position="relative"

heading.style.left="100px"
heading.style.top="10px"
heading.style.position="relative"

