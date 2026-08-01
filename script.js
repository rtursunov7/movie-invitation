const no=document.getElementById('no');
no.onmouseover=()=>{no.style.position='fixed';no.style.left=Math.random()*(innerWidth-160)+'px';no.style.top=Math.random()*(innerHeight-60)+'px';}
yes.onclick=()=>{document.getElementById('msg').innerHTML='<h2>🥳 Rahmat! Juda xursand bo\'ldim. Endi vaqt va joyni kelishib olsak bo\'ldi. 🍿❤️</h2>';no.remove();yes.remove();};