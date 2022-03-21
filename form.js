window.onload = () => {

    document.getElementById('addPic2').onclick = () => {
        document.getElementById('addPic1').remove();
        document.getElementById('addPic2').remove();
    }

    document.getElementById('addPic1').onclick = () => {
        document.getElementById('addPic1').remove();
        document.getElementById('addPic2').remove();

        let inp = document.createElement('input');
        inp.type = 'file'
        inp.accept = 'image/*'
        inp.id = 'getpic'

        let img = document.createElement('img');
        img.id = 'pic'
        img.alt = 'Student Picture'

        document.getElementsByClassName('right')[0].appendChild(inp);
        document.getElementsByClassName('right')[0].appendChild(img);

        document.getElementById('getpic').onchange = (event) => {
            document.getElementById('pic').style = 'display: inline;';
            document.getElementById('pic').src = URL.createObjectURL(event.target.files[0]);
            document.getElementById('getpic').style = 'display: none;';
        }
        
    }

    var info = JSON.parse(window.localStorage.getItem('info'));

    document.getElementById('name').innerHTML = info.name;
    document.getElementById('addLine1').innerHTML = info.addLine1;
    document.getElementById('addLine2').innerHTML = info.addLine2;
    document.getElementById('city').innerHTML = info.city.charAt(0).toUpperCase() + info.city.slice(1);
    document.getElementById('state').innerHTML = info.state.charAt(0).toUpperCase() + info.state.slice(1);
    document.getElementById('pinCode').innerHTML = info.pinCode;
    document.getElementById('contact').innerHTML = info.contact;
    document.getElementById('email').innerHTML = info.email;


    if ( info.linkedIn.length === 0 ) {} else if ( info.linkedIn === null) {} else if ( info.linkedIn === undefined) {}
    else {document.getElementById('linkedIn').innerHTML = 'LinkedIn: linkedin.com/in/' + info.linkedIn;}

    if ( info.gitHub.length === 0 ) {} else if ( info.gitHub === null) {} else if ( info.gitHub === undefined) {}
    else {document.getElementById('gitHub').innerHTML = 'GitHub: github.com/' + info.gitHub;}

    for (let i=1; i<=15; i++) {
        if (i == 5 || i == 10 || i ==15) {
            if (eval("parseInt(info.q" + i + ")") <= 10) {
                eval("document.getElementById('q" + i + "').innerHTML = info.q" + i + " + ' CGPA';");
            }
            else if (eval("parseInt(info.q" + i + ")") > 10) {eval("document.getElementById('q" + i + "').innerHTML = info.q" + i + " + ' %';");}
        }
        else {eval("document.getElementById('q" + i + "').innerHTML = info.q" + i);}
    }

    let num = info.numofproj;
    for (let i=1; i<=num; i++) {
        let div = document.createElement('div');
        div.className = 'project';
        let h3 = document.createElement('h3');
        h3.id = 'proj' + i + 'name';
        let h5 = document.createElement('h5');
        let span = document.createElement('span');
        span.id = 'proj' + i + 'team';
        let p = document.createElement('p');
        p.id = 'proj' + i + 'info';
        h5.appendChild(span);
        div.appendChild(h3);
        div.appendChild(h5);
        div.appendChild(p);
        document.getElementById('projects').appendChild(div);
        eval( "document.getElementById('proj" + i + "name').innerHTML = info.p" + i + ".p" + i + "name;" );
        eval( "document.getElementById('proj" + i + "team').innerHTML = info.p" + i + ".p" + i + "team;" );
        eval( "document.getElementById('proj" + i + "info').innerHTML = info.p" + i + ".p" + i + "info;" );
    }

    document.getElementById('progLang').innerHTML = info.progLang;
    document.getElementById('lang').innerHTML = info.lang;
    document.getElementById('frameworks').innerHTML = info.frameworks;
    document.getElementById('dbs').innerHTML = info.dbs;
    document.getElementById('tools').innerHTML = info.tools;

    let numc = info.numofcert;
    if (numc != 0) {
        for (let i=1; i<=numc; i++) {
            let li = document.createElement('li');
            li.id = 'cert' + i;
            document.getElementById('certs').appendChild(li);
            eval("document.getElementById('cert" + i + "').innerHTML = info.cert" + i + ";");
        }
    }
    else {
        document.getElementById('certdiv').remove();
    }

    let numa = info.numofach;
    if (numa != 0) {
        for (let i=1; i<=numa; i++) {
            let li = document.createElement('li');
            li.id = 'ach' + i;
            document.getElementById('achs').appendChild(li);
            eval("document.getElementById('ach" + i + "').innerHTML = info.ach" + i + ";");
        }
    }
    else {
        document.getElementById('achdiv').remove();
    }

    let numh = info.numofhobb;
    if (numh != 0 ) {
        for (let i=1; i<=numh; i++) {
            let li = document.createElement('li');
            li.id = 'hob' + i;
            document.getElementById('hobbs').appendChild(li);
            eval("document.getElementById('hob" + i + "').innerHTML = info.hob" + i + ";");
        }
    }
    else {
        document.getElementById('hobbdiv').remove();
    }

}