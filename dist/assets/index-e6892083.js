(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function l(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(o){if(o.ep)return;o.ep=!0;const a=l(o);fetch(o.href,a)}})();let s=0,g=1;const i=document.getElementById("dame-carta"),r=document.getElementById("me-planto"),u=document.getElementById("nueva-partida"),c=document.getElementById("ver-carta"),b=()=>{const e=document.getElementById("puntuacion");e&&(e.innerHTML=`Tu puntuación: ${s.toString()}`)},h=()=>{let e=Math.floor(Math.random()*12)+1;return e==8?e=7:e==9&&(e=10),e},E=e=>{L(e),b(),s>=7.5?(j(),m(),p()):(P(),H())},L=e=>{let t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";const l=document.getElementById("carta");switch(e){case 1:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",n(1);break;case 2:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",n(2);break;case 3:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",n(3);break;case 4:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",n(4);break;case 5:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",n(5);break;case 6:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",n(6);break;case 7:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",n(7);break;case 10:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",n(.5);break;case 11:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",n(.5);break;case 12:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",n(.5);break;default:t="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",n(.5);break}l instanceof HTMLImageElement&&(l.src=t)},y=()=>{c instanceof HTMLButtonElement&&(c.disabled=!1)},p=()=>{i instanceof HTMLButtonElement&&(i.disabled=!0)},B=()=>{i instanceof HTMLButtonElement&&(i.disabled=!1)},M=()=>{c instanceof HTMLButtonElement&&(c.disabled=!0)},H=()=>{u instanceof HTMLButtonElement&&(u.disabled=!1)},P=()=>{r instanceof HTMLButtonElement&&(r.disabled=!1)},m=()=>{r instanceof HTMLButtonElement&&(r.disabled=!0)},n=e=>{s+=e},I=()=>{j(),p(),m(),q()},j=()=>{let e="";s<5?e="Fuiste muy conservador/a! 😝":s<6?e="Apa te entró el cagazo, no? 🤭🤭🤭":s>=6&&s<=7?e="Casi casi... 🙃🙃🙃":s===7.5?e="Esaaaaa! Felicitaciones!! 🎉🎉🎉🎊":s>7.5&&(e="Perdiste 😵",p(),m()),w(e)},w=e=>{const t=document.getElementById("puntuacion-me-planto");t&&(t.innerHTML=e)},k=()=>{const e=document.getElementById("carta");e instanceof HTMLImageElement&&(e.src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg")},v=()=>{const e=document.getElementById("puntuacion-me-planto"),t=document.getElementById("que-hubiera-pasado");e&&(e.innerHTML=""),t&&(t.innerHTML="")},C=()=>s=0,T=()=>{g++,F(g),k(),v(),C(),b(),B(),M(),m()},F=e=>{const t=document.getElementById("intentos");t&&(t.innerHTML=`Intentos: ${e}`)},q=()=>{const e=document.getElementById("que-hubiera-pasado");s!==7.5&&(e&&(e.innerHTML="Querés ver cual hubiera sido la siguiente carta? 👇 "),y())},Q=e=>{L(e),c instanceof HTMLButtonElement&&(c.disabled=!0)};r==null||r.addEventListener("click",I);i==null||i.addEventListener("click",function(){E(h())});u==null||u.addEventListener("click",T);c==null||c.addEventListener("click",function(){Q(h())});