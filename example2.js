let root_div=document.querySelector(".root");
class utlity{
    create(){
        let fra=document.createDocumentFragment();
        let container=document.createElement("div");
        container.setAttribute("id","container");
        for(let index=0;index<16;index++){
            let div=document.createElement("div");
            div.classList.add("tile");
            container.appendChild(div);  
        }
        fra.appendChild(container);
        root_div.appendChild(fra);
    }
    create2(){
        let fra=document.createDocumentFragment();
        let container=document.createElement("div");
        container.setAttribute("id","container");
        let button=document.createElement("button");
        button.textContent="click me!";
        container.appendChild(button);
        let pre=document.createElement("pre");
        pre.setAttribute("id","output");
        fra.appendChild(container);
        fra.appendChild(pre);
        root_div.appendChild(fra)
    }
    create3(){
        let fra=document.createDocumentFragment();
        let mydiv=document.createElement("div");
        mydiv.classList.add("mydiv");
        for(let index=0;index<=100;index++){
            let el=document.createElement("div");
            el.classList.add(`mydiv${index}`);
            el.textContent=`this is para ${index}`;
            fra.appendChild(el);
        }
        mydiv.appendChild(fra);
        
        root_div.appendChild(mydiv);
    
    }
    create4(){
        let fra=document.createDocumentFragment();
        let button=document.createElement("button");
        button.textContent="Click to start request";
        button.id="xhr";
        let btn=document.createElement("button");
        btn.textContent="Reload";
        btn.id="reload";
        let pre=document.createElement("pre");
        pre.classList.add("event-log");
        pre.setAttribute("readonly",true);
        fra.appendChild(button);
        fra.appendChild(btn);
        fra.appendChild(pre);
        root_div.appendChild(fra);
    }
    promise(){
        let fra=document.createDocumentFragment();
        let button=document.createElement("button");
        button.textContent="set Alaram";
        button.id="alaram";
        let div=document.createElement("div");
        div.id="output";
        fra.appendChild(button);
        fra.appendChild(div);
        root_div.appendChild(fra);
    }
    inputCreate(labelText,labelFor,inputID,inputType){
        let fra=document.createDocumentFragment();
        let label=document.createElement("label");
        label.innerText=labelText;
        label.setAttribute("for",labelFor);
        let input=document.createElement("input");
        input.id=inputID;
        input.type=inputType;
        label.appendChild(input);
        fra.appendChild(label);
        root_div.appendChild(fra);
    }
    primecreator(){
        let fra=document.createDocumentFragment();
        let label=document.createElement("label");
        label.textContent="Number of primes:";
        label.setAttribute("for","quota");
        let input=document.createElement("input");
        input.id="quota";
        input.type="text";
        input.name="quota";
        input.value="1000000";
        label.appendChild(input);
        let btn=document.createElement("button");
        btn.id="generate";
        btn.textContent="Generate primes";
        let btn2=document.createElement("button");
        btn2.id="reload";
        btn2.textContent="Reload";
        let textar=document.createElement("textarea");
        textar.id="user-input";
        textar.rows=5;
        textar.cols=62;
        textar.textContent="Try typing in here immediately after pressing Generate primes";
        let d=document.createElement("div");
        d.id="output";
        fra.appendChild(label);
        fra.appendChild(btn);
        fra.appendChild(btn2);
        fra.appendChild(textar);
        fra.appendChild(d);
        root_div.appendChild(fra);
    }
    
    
}
export {utlity};