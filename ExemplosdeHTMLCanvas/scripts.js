const canvas = document.getElementById('exemplo');
const ctx = canvas.getContext('2d');        

const centroX = 600;
const centroY = 300;
const orbt_sz = 150;        
const orbl_sz = 30;         
const orbm_sz = 250; 
const orblm_sz = 30;        
const sol_sz = 50;          
const lua_sz = 5;           
const terra_sz = 15;  
const marte_sz = 15;   
const luam_sz = 5;     

const t_terra = 17;         
const t_lua = 3;   
const t_marte = 20;   
const t_luam = 5;      

const tau = 2*Math.PI;

const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();
const marte =  new Path2D();
const luam = new Path2D();

function init(){
    sol.arc(0, 0, sol_sz, 0, tau, false);
    lua.arc(0, 0, lua_sz, 0, tau, false);
    terra.arc(0, 0, terra_sz, 0, tau, false);
    marte.arc(0, 0, marte_sz, 0, tau, false);
    luam.arc(0, 0, luam_sz, 0, tau, false);

    window.requestAnimationFrame(draw);
}

function draw(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,1200,600);

    ctx.save();     //salva estado atual antes do desenho;

    //sol;
    ctx.translate(centroX,centroY);
    ctx.fillStyle="orange";
    ctx.fill(sol);
    ctx.restore();

    //terra
    ctx.save();
        ctx.translate(centroX,centroY);

        const time = new Date();

        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000))*time.getMilliseconds() );
        ctx.translate(orbt_sz, 0);

        ctx.fillStyle = "lightblue";
        ctx.fill(terra);

    //lua
    ctx.save();
        ctx.rotate( (tau/t_lua)*time.getSeconds() + (tau/(t_lua*1000))*time.getMilliseconds() );
        ctx.translate(0, orbl_sz);
        ctx.fillStyle = 'white';
        ctx.fill(lua);

    ctx.restore();

    ctx.beginPath();
    ctx.arc(0,0,orbl_sz,0,tau,false);
    ctx.strokeStyle = "#fff";
    ctx.stroke();

ctx.restore();

ctx.beginPath();
ctx.arc(centroX,centroY,orbt_sz,0,tau,false);
ctx.strokeStyle = "white";
ctx.stroke();

//marte
    ctx.save();
        ctx.translate(centroX,centroY);

        ctx.rotate((tau/t_marte) * time.getSeconds() + (tau/(t_marte*1000))*time.getMilliseconds() );
        ctx.translate(orbm_sz, 0);

        ctx.fillStyle = "red";
        ctx.fill(marte);

    //lua
    ctx.save();
        ctx.rotate( (tau/t_luam)*time.getSeconds() + (tau/(t_luam*1000))*time.getMilliseconds() );
        ctx.translate(0, orblm_sz);
        ctx.fillStyle = 'brown';
        ctx.fill(luam);

    ctx.restore();

    ctx.beginPath();
    ctx.arc(0,0,orblm_sz,0,tau,false);
    ctx.strokeStyle = "#fff";
    ctx.stroke();

ctx.restore();

ctx.beginPath();
ctx.arc(centroX,centroY,orbm_sz,0,tau,false);
ctx.strokeStyle = "white";
ctx.stroke();

    window.requestAnimationFrame(draw);
}

init();