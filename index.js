window.onload = () => {

    

    let submit = document.getElementById('submit');
    let reset = document.getElementById('reset');
    let rproj = document.getElementById('rproj');
    let rcert = document.getElementById('rcert');
    let rach = document.getElementById('rach');
    let rhobb = document.getElementById('rhobb');

    let nump = null;
    let numc = null;
    let numa = null;
    let numh = null;

    let info = JSON.parse(window.localStorage.getItem('info'));

    if (info !== null) {

        numc = info.numofcert
        numa = info.numofach
        numh = info.numofhobb
        nump = info.numofproj
        
        for (let i=1; i<=nump; i++) {
            document.getElementById('projwarn').style.display = 'none';
            document.getElementById('projnum').style.display = 'none';
            let div = document.createElement('div');
            div.className = 'proj';
            let inp1 = document.createElement('input');
            inp1.type = 'text';
            inp1.id = 'proj'+i+'name';
            inp1.placeholder = 'Project Name';
            let inp2 = document.createElement('input');
            inp2.type = 'text';
            inp2.id = 'proj'+i+'team';
            inp2.placeholder = 'Team of';
            let inp3 = document.createElement('textarea');
            inp3.cols = 30;
            inp3.rows = 6;
            inp3.id = 'proj'+i+'info';
            inp3.placeholder = 'About the project';
            div.appendChild(inp1);
            div.appendChild(inp2);
            div.appendChild(inp3);
            document.getElementById('projin').appendChild(div);
        }

        for (let i=1; i <= numc; i++) {
            document.getElementById('certwarn').style.display = 'none';
            document.getElementById('certs').style.display = 'none';
            let inp = document.createElement('input');
            inp.type = 'text';
            inp.id = 'cert' + i;
            inp.placeholder = 'Certificate ' + i;
            document.getElementById('cert').appendChild(inp);
        }

        for (let i=1; i <= numa; i++) {
            document.getElementById('achwarn').style.display = 'none';
            document.getElementById('ach').style.display = 'none';
            let inp = document.createElement('input');
            inp.type = 'text';
            inp.id = 'ach' + i;
            inp.placeholder = 'Achievement ' + i;
            document.getElementById('achs').appendChild(inp);
        }

        for (let i=1; i <= numh; i++) {
            document.getElementById('hobbwarn').style.display = 'none';
            document.getElementById('hobb').style.display = 'none';
            let inp = document.createElement('input');
            inp.type = 'text';
            inp.id = 'hob' + i;
            inp.placeholder = 'Hobbie ' + i;
            document.getElementById('hobbs').appendChild(inp);
        }

        for ( let i in info ) {
            if (eval("document.getElementById('" + i + "');") !== null) {
                eval("document.getElementById('" + i + "').value = info." + i + ";");
            }
        }
        for (let i=1; i<=nump; i++) {
            eval( "document.getElementById('proj" + i + "name').value = info.p" + i + ".p" + i + "name;" );
            eval( "document.getElementById('proj" + i + "team').value = info.p" + i + ".p" + i + "team;" );
            eval( "document.getElementById('proj" + i + "info').value = info.p" + i + ".p" + i + "info;" );
        }

        if (info.numofproj !== null) { rproj.style.display = 'inline'; }
        if (info.numofcert !== null) { rcert.style.display = 'inline'; }
        if (info.numofach !== null) { rach.style.display = 'inline'; }
        if (info.numofhobb !== null) { rhobb.style.display = 'inline'; }

    }

    document.getElementById('projnum').onchange = (e) => {
        nump = parseInt(e.target.value);
        if ( nump >= 1 && nump <= 5 ) {
            rproj.style.display = 'inline';
            document.getElementById('projwarn').style.display = 'none';
            e.target.style.display = 'none';
            for (let i=1; i<=nump; i++ ) {
                let div = document.createElement('div');
                div.className = 'proj';
                let inp1 = document.createElement('input');
                inp1.type = 'text';
                inp1.id = 'proj'+i+'name';
                inp1.placeholder = 'Project Name';
                let inp2 = document.createElement('input');
                inp2.type = 'text';
                inp2.id = 'proj'+i+'team';
                inp2.placeholder = 'Team of';
                let inp3 = document.createElement('textarea');
                inp3.cols = 30;
                inp3.rows = 6;
                inp3.id = 'proj'+i+'info';
                inp3.placeholder = 'About the project';
                div.appendChild(inp1);
                div.appendChild(inp2);
                div.appendChild(inp3);
                document.getElementById('projin').appendChild(div);
            }
        }
        else if (isNaN(nump)) {alert('Enter a value!');}
        else {alert('Min 2 Projects.\nMax 4 Projects');}
    }

    document.getElementById('certs').onchange = (e) => {
        numc = parseInt(e.target.value);
        if (numc >= 0 && numc <= 5) {
            rcert.style.display = 'inline';
            document.getElementById('certwarn').style.display = 'none';
            e.target.style.display = 'none';
            for (let i=1; i<=numc; i++) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.id = 'cert' + i;
                inp.placeholder = 'Certificate ' + i;
                document.getElementById('cert').appendChild(inp);
            }
        }
        else if ( isNaN(numc) ) {alert('Enter a value!');}
        else {alert('Min 0\nMax 4');}
    }

    document.getElementById('ach').onchange = (e) => {
        numa = parseInt(e.target.value);
        if (numa >= 0 && numa <= 5) {
            rach.style.display = 'inline';
            document.getElementById('achwarn').style.display = 'none';
            e.target.style.display = 'none';
            for (let i=1; i<=numa; i++) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.id = 'ach' + i;
                inp.placeholder = 'Achievement ' + i;
                document.getElementById('achs').appendChild(inp);
            }
        }
        else if (isNaN(numa)) {alert('Enter a value!');}
        else {alert('Min 0\nMax 4');}
    }

    document.getElementById('hobb').onchange = (e) => {
        numh = parseInt(e.target.value);
        if (numh >= 0 && numh <= 4) {
            rhobb.style.display = 'inline';
            document.getElementById('hobbwarn').style.display = 'none';
            e.target.style.display = 'none';
            for (let i=1; i<=numh; i++) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.id = 'hob' + i;
                inp.placeholder = 'Hobbie ' + i;
                document.getElementById('hobbs').appendChild(inp);
            }
        }
        else if (isNaN(numa)) {alert('Enter a value!');}
        else {alert('Min 0\nMax 3');}
    }

    rproj.onclick = (e) => {
        e.target.style.display = 'none';
        document.getElementById('projwarn').style.display = 'inline';
        nump = null;
        document.getElementById('projnum').style.display = 'inline';
        document.getElementById('projin').innerHTML = '';
    }


    rcert.onclick = (e) => {
        e.target.style.display = 'none';
        document.getElementById('certwarn').style.display = 'inline';
        numc = null;
        document.getElementById('certs').style.display = 'inline';
        document.getElementById('cert').innerHTML = '';
    }

    rach.onclick = (e) => {
        e.target.style.display = 'none';
        document.getElementById('achwarn').style.display = 'inline';
        numa = null;
        document.getElementById('ach').style.display = 'inline';
        document.getElementById('achs').innerHTML = '';
    }

    rhobb.onclick = (e) => {
        e.target.style.display = 'none';
        document.getElementById('hobbwarn').style.display = 'inline';
        numh = null;
        document.getElementById('hobb').style.display = 'inline';
        document.getElementById('hobbs').innerHTML = '';
    }


    submit.onclick = () => {

        window.localStorage.removeItem("info");

        info = { name: null, addLine1: null, addLine2: null, city: null,
            state: null, pinCode: null, contact: null, email: null,
            linkedIn: null, gitHub: null,
            q1: null, q2: null, q3: null, q4: null, q5: null,
            q6: null, q7: null, q8: null, q9: null, q10: null,
            q11: null, q12: null, q13: null, q14: null, q15: null,
            p1: {
                p1name: null,
                p1team: null,
                p1info: null
            },
            p2: {
                p2name: null,
                p2team: null,
                p2info: null
            },
            p3: {
                p3name: null,
                p3team: null,
                p3info: null
            },
            p4: {
                p4name: null,
                p4team: null,
                p4info: null
            },
            p5: {
                p5name: null,
                p5team: null,
                p5info: null
            },
            progLang: null, lang: null, frameworks: null, dbs: null, tools: null,
            cert1: null, cert2: null, cert3: null, cert4: null, ach1: null, ach2: null, ach3: null,
            ach4: null, hob1: null, hob2: null, hob3: null, numofproj: null, numofcert: null,
            numofach: null, numofhobb: null
        };

        for (let i=1; i<=numa; i++) {
            eval("info.ach" + i + " = document.getElementById('ach" + i + "').value;");
        }

        info.addLine1 = document.getElementById('addLine1').value;
        info.addLine2 = document.getElementById('addLine2').value;

        for (let i=1; i<=numc; i++) {
            eval("info.cert" + i + " = document.getElementById('cert" + i + "').value;");
        }

        info.city = document.getElementById('city').value;
        info.contact = document.getElementById('contact').value;

        info.dbs = document.getElementById('dbs').value;

        info.email = document.getElementById('email').value;

        info.frameworks = document.getElementById('frameworks').value;
        info.gitHub = document.getElementById('gitHub').value;

        for (let i=1; i<=numh; i++) {
            eval("info.hob" + i + " = document.getElementById('hob" + i + "').value;");
        }

        info.lang = document.getElementById('lang').value;
        
        info.linkedIn = document.getElementById('linkedIn').value;
        info.name = document.getElementById('name').value;

        info.numofproj = nump;
        info.numofcert = numc;
        info.numofach = numa;
        info.numofhobb = numh;

        info.pinCode = document.getElementById('pinCode').value;

        for (let i=1; i<=nump; i++) {
            eval('info.p' + i + '.p' + i + 'name = document.getElementById("proj' + i + 'name").value;');
            eval('info.p' + i + '.p' + i + 'team = document.getElementById("proj' + i + 'team").value;');
            eval('info.p' + i + '.p' + i + 'info = document.getElementById("proj' + i + 'info").value;');
        }

        info.progLang = document.getElementById('progLang').value;

        for (let i=1; i<=15; i++) {
            eval('info.q' + i + ' = document.getElementById("q' + i + '").value;')
        }

        info.state = document.getElementById('state').value;
        info.tools = document.getElementById('tools').value;
        
        window.localStorage.setItem('info', JSON.stringify(info));
        document.location.assign('./form.html');
    }

    reset.onclick = () => {
        window.localStorage.removeItem("info");
        window.location.replace('./index.html');
    }

}