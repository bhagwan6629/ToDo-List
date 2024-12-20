let input  = document.querySelector('input');
        let button = document.querySelector('.add');
        let ul = document.querySelector('.ul');
        let nUl = document.querySelector(".nested-ul"); 

        button.addEventListener("click",()=>{
            // document.write("Button clicked");
            let task = input.value;
            let li = document.createElement('li');
            li.innerText = task;
            li.classList.add("ul-li");
            ul.appendChild(li);
            let del = document.createElement("button");
            del.innerText = "Delete";
            del.classList.add("delete");
            li.appendChild(del);
            let n_li = document.createElement('li');
            n_li.innerText = task;
            nUl.appendChild(n_li);
            
            input.value = "";
        });
        
        ul.addEventListener("click", function(event){
            if(event.target.nodeName == "BUTTON"){
                event.target.parentNode.remove();
            }
        });