// ===== EDITE AQUI =====
var GH="https://github.com/PedroMiguel1712",WA="https://wa.me/5531996552345",MAIL="pedromiguelsd1712@gmail.com",LI="https://www.linkedin.com/in/pedro-miguel-73288130a/";
var EMAILJS={service:"SEU_SERVICE_ID",template:"SEU_TEMPLATE_ID",key:"SUA_PUBLIC_KEY"};
var PROJ=[ // do mais antigo ao mais recente. Adicione os seus aqui.
{y:"2026",n:"Portfólio: Central de Suporte",d:["Este site. Cada seção é um chamado, o atendimento escala de N1 a N3 e o contato abre um novo ticket.","This site. Every section is a ticket, support escalates from N1 to N3 and the contact form opens a new ticket."],t:["HTML","CSS","JavaScript"],g:GH}];
var EXP=[
{p:"2022 · 2023",o:"VIDES",c:["Voluntário · Semana Missionária Salesiana, JMS","Volunteer · Salesian Missionary Week, JMS"]},
{p:"2023 · 2025",o:"Colégio Pio XII",c:["Auxílio na organização da festa de Maria e vendedor móvel na festa junina 2025","Helped organize the Festa de Maria and worked as mobile vendor at the 2025 Festa Junina"]},
{p:["Eventos","Events"],o:"Concurso Risoleta · Leon Renault",c:["Fiscal de tablet e fiscal de corredor","Tablet and corridor proctor"]},
{p:"2025 · 2026",o:"Portnet Tecnologia",c:["Estagiário · Central de Suporte N1 e N2. Atendimento e resolução de chamados técnicos.","Intern · N1 and N2 Support Desk. Handled and resolved technical tickets."]}];
var SK=["Java","C#","Python","JavaScript","TypeScript","PHP","Kotlin","Swift","Flutter","HTML & CSS","MySQL","MCC (Manutenção e Config. de Computadores)","Pacote Office"];
var CERT=["VIDES 2023 · Voluntariado Internacional","VIDES 2024 · Voluntariado Internacional","Addee N-able MSP Manager","Addee N-able N-sight RMM","Fortinet · Introduction to the Threat Landscape 3.0","Fortinet · Getting Started in Cybersecurity 3.0"];
// ======================
var UI={pt:{h1:"Central de Suporte do Pedro Miguel",sub:"Abra os chamados para me conhecer. Quanto mais você explora, mais o atendimento escala.",lv:["Visitante","Em análise","Pronto para contratar"],hire:"Escalar para contratação",st:{ok:"Resolvido",open:"Em andamento",nw:"Novo"},as:"Atribuído a: Pedro Miguel",pri:"Prioridade: alta",you:"Visitante",me:"Pedro",foot:"© 2026 Pedro Miguel · Belo Horizonte, MG",repo:"Ver no GitHub",shot:"Imagem ou GIF do projeto",nm:"Nome",ms:"Mensagem",send:"Abrir chamado",r1:"Informe seu nome.",r2:"Informe um e-mail válido.",r3:"Escreva ao menos 10 caracteres.",ok:"Chamado aberto: ",ok2:" Obrigado, respondo em breve.",fail:"Não deu para enviar. Use o e-mail acima.",skills:"Linguagens e ferramentas",cert:"Certificados",idi:"Idiomas",idiv:"Português · Inglês (básico)",ch:"Fale comigo por onde preferir",form:"Ou descreva o que precisa:"},
en:{h1:"Pedro Miguel's Support Desk",sub:"Open the tickets to get to know me. The more you explore, the higher support escalates.",lv:["Visitor","Reviewing","Ready to hire"],hire:"Escalate to hiring",st:{ok:"Resolved",open:"In progress",nw:"New"},as:"Assigned to: Pedro Miguel",pri:"Priority: high",you:"Visitor",me:"Pedro",foot:"© 2026 Pedro Miguel · Belo Horizonte, Brazil",repo:"View on GitHub",shot:"Project image or GIF",nm:"Name",ms:"Message",send:"Open ticket",r1:"Enter your name.",r2:"Enter a valid e-mail.",r3:"Write at least 10 characters.",ok:"Ticket opened: ",ok2:" Thank you, I'll reply soon.",fail:"Could not send. Use the e-mail above.",skills:"Languages and tools",cert:"Certificates",idi:"Languages",idiv:"Portuguese · English (basic)",ch:"Reach me however you prefer",form:"Or describe what you need:"}};
var TK=[
{k:"sobre",id:"001",st:"ok",ty:"chat",ti:["Quem é o Pedro Miguel?","Who is Pedro Miguel?"],th:[
["v",["Oi! Quem é você e o que faz?","Hi! Who are you and what do you do?"]],
["p",["Sou Pedro Miguel Souza Dias, 18 anos, de Belo Horizonte. Curso Engenharia de Software na PUC Minas (formatura prevista para 2029) e vim do ensino médio técnico do Cotemig.","I'm Pedro Miguel Souza Dias, 18, from Belo Horizonte. I study Software Engineering at PUC Minas (expected 2029) and come from the technical high school at Cotemig."]],
["v",["Em que você trabalha hoje?","What do you work with?"]],
["p",["Programo em Java, C#, Python, JavaScript e mais. Também estagiei na Portnet, resolvendo chamados reais de suporte N1 e N2, e fiz certificações em segurança com a Fortinet.","I code in Java, C#, Python, JavaScript and more. I also interned at Portnet solving real N1 and N2 support tickets, and earned Fortinet security certificates."]],
["v",["E o que você busca?","And what are you looking for?"]],
["p",["Uma oportunidade para crescer em desenvolvimento e tecnologia. Quem já atendeu chamado sabe ouvir o problema antes de escrever a primeira linha de código.","An opportunity to grow in development and technology. Anyone who has handled tickets knows how to listen to the problem before writing the first line of code."]]]},
{k:"proj",id:"002",st:"open",ty:"proj",ti:["Projetos","Projects"]},
{k:"exp",id:"003",st:"ok",ty:"exp",ti:["Experiências","Experience"]},
{k:"skill",id:"004",st:"ok",ty:"skill",ti:["Habilidades e certificados","Skills and certificates"]},
{k:"cont",id:"005",st:"nw",ty:"cont",ti:["Contato: abrir novo chamado","Contact: open a new ticket"]}];
var L="pt",cur="sobre",seen={sobre:1};
var $=function(s){return document.querySelector(s)};
function x(a){return typeof a==="string"?a:a[L==="pt"?0:1]}
function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}
function tk(k){return TK.filter(function(a){return a.k===k})[0]}
function body(t,u){
 if(t.ty==="chat")return t.th.map(function(m){return '<div class="msg '+m[0]+'"><small>'+(m[0]==="v"?u.you:u.me)+'</small><p>'+x(m[1])+'</p></div>'}).join("");
 if(t.ty==="proj")return '<div class="tl">'+PROJ.map(function(p){return '<div class="it"><span class="when">'+p.y+'</span><h3>'+p.n+'</h3><p>'+x(p.d)+'</p><div class="shot">'+u.shot+'</div><p>'+p.t.map(function(g){return '<span class="tag">'+g+'</span>'}).join("")+'</p><a class="btn" href="'+p.g+'" target="_blank" rel="noopener">'+u.repo+'</a></div>'}).join("")+'</div>';
 if(t.ty==="exp")return '<div class="tl">'+EXP.map(function(e){return '<div class="it"><span class="when">'+x(e.p)+'</span><h3>'+e.o+'</h3><p style="margin:4px 0 0">'+x(e.c)+'</p></div>'}).join("")+'</div>';
 if(t.ty==="skill")return '<h3 class="sec">'+u.skills+'</h3>'+SK.map(function(s){return '<span class="tag">'+s+'</span>'}).join("")+'<h3 class="sec">'+u.cert+'</h3><ul>'+CERT.map(function(c){return '<li>'+c+'</li>'}).join("")+'</ul><h3 class="sec">'+u.idi+'</h3><p style="margin:0">'+u.idiv+'</p>';
 return '<p>'+u.ch+'</p><div class="icons"><a href="mailto:'+MAIL+'"><svg viewBox="0 0 24 24"><path d="M2 5h20v14H2zm2 2v.5l8 5.5 8-5.5V7zm16 3.9-8 5.5-8-5.5V17h16z"/></svg>E-mail</a><a href="'+WA+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5 13.7c-.2.6-1.2 1.1-1.7 1.2-.4.1-1 .1-3.2-.8-2.6-1.1-4.2-3.8-4.3-4-.1-.2-1-1.300-1-2.500s.6-1.800.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.100c.1.200.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.9 1.500 2 2.200 3.300 2.800.3.100.4.100.6-.1l.8-1c.2-.2.4-.2.6-.1l2 1c.3.100.5.200.5.300.1.200.1.800-.1 1.300z"/></svg>WhatsApp</a><a href="'+LI+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 9h4v12H2zm7 0h4v1.7C13.700 9.500 15 8.800 16.600 8.800 20 8.800 21 11 21 14v7h-4v-6c0-1.500-.1-3-2-3s-2 1.400-2 3v6H9z"/></svg>LinkedIn</a><a href="'+GH+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.200 19.500c.5.1.7-.2.7-.5v-1.800c-2.800.6-3.400-1.200-3.400-1.200-.5-1.200-1.100-1.500-1.100-1.500-.9-.6.1-.6.1-.6 1 .1 1.600 1 1.600 1 .9 1.600 2.400 1.100 3 .9.1-.7.4-1.100.7-1.400-2.200-.3-4.600-1.100-4.600-5 0-1.100.4-2 1-2.700-.1-.3-.4-1.300.1-2.700 0 0 .8-.3 2.800 1a9.600 9.600 0 0 1 5 0c1.900-1.300 2.800-1 2.800-1 .5 1.400.2 2.400.1 2.700.6.700 1 1.600 1 2.700 0 3.900-2.400 4.700-4.600 5 .4.300.7.900.7 1.800v2.700c0 .3.200.6.700.5A10 10 0 0 0 12 2z"/></svg>GitHub</a></div><p>'+u.form+'</p><form id="f" novalidate><label>'+u.nm+'<input id="nome" autocomplete="name"><span class="err" id="e1"></span></label><label>E-mail<input id="mail" type="email" autocomplete="email"><span class="err" id="e2"></span></label><label>'+u.ms+'<textarea id="msg" rows="5"></textarea><span class="err" id="e3"></span></label><div><button class="primary" type="submit">'+u.send+'</button></div><p id="st" role="status"></p></form>';
}
function render(){
 var u=UI[L],t=tk(cur),n=Object.keys(seen).length,lv=n>=4?3:n>=2?2:1;
 document.documentElement.lang=L==="pt"?"pt-BR":"en";
 $("#h1").textContent=u.h1;$("#sub").textContent=u.sub;$("#foot").textContent=u.foot;$("#lang").textContent=L==="pt"?"EN":"PT";
 $("#meter").innerHTML=u.lv.map(function(a,i){return '<div class="lv'+(i<lv?" on":"")+'"><b>N'+(i+1)+'</b>'+a+'</div>'}).join("");
 $("#hire").textContent=u.hire;$("#hire").style.display=lv===3&&cur!=="cont"?"inline-block":"none";
 $("#queue").innerHTML=TK.map(function(a){return '<button class="q'+(a.k===cur?" on":"")+'" data-k="'+a.k+'"><small>#'+a.id+'</small><b>'+x(a.ti)+'</b><span class="pill '+a.st+'">'+u.st[a.st]+'</span></button>'}).join("");
 $("#ticket").innerHTML='<h2>'+x(t.ti)+'</h2><div class="meta">#'+t.id+' · '+u.st[t.st]+' · '+u.pri+' · '+u.as+'</div>'+body(t,u);
 document.querySelectorAll(".q").forEach(function(b){b.onclick=function(){go(b.dataset.k)}});
 if($("#f"))$("#f").onsubmit=submit;
}
function go(k){cur=k;seen[k]=1;render();if(innerWidth<780)$("#ticket").scrollIntoView({behavior:"smooth"})}
function submit(ev){
 ev.preventDefault();var u=UI[L],n=$("#nome").value.trim(),m=$("#mail").value.trim(),g=$("#msg").value.trim(),ok=true;
 $("#e1").textContent=n?"":(ok=false,u.r1);
 $("#e2").textContent=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)?"":(ok=false,u.r2);
 $("#e3").textContent=g.length>=10?"":(ok=false,u.r3);
 if(!ok){$("#st").textContent="";return}
 var num="PM-"+new Date().getFullYear()+"-"+Math.floor(1000+Math.random()*9000),done=function(){$("#st").textContent=u.ok+num+"."+u.ok2};
 if(EMAILJS.key.indexOf("SUA_")===0){
  location.href="mailto:"+MAIL+"?subject="+encodeURIComponent("Chamado "+num+" · "+n)+"&body="+encodeURIComponent(g+"\n\n"+n+" <"+m+">");done();return}
 fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({service_id:EMAILJS.service,template_id:EMAILJS.template,user_id:EMAILJS.key,template_params:{from_name:n,reply_to:m,message:g,ticket:num}})})
 .then(function(r){if(!r.ok)throw 0;done();ev.target.reset()}).catch(function(){$("#st").textContent=u.fail});
}
$("#lang").onclick=function(){L=L==="pt"?"en":"pt";render()};
$("#hire").onclick=function(){go("cont")};
$("#theme").onclick=function(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"};
render();
