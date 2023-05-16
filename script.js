window.onload = function () {
    let yes = document.getElementById('yes');
    let no = document.getElementById('no');
    let color = document.getElementById('color');
    yes.checked = true;
    yes.onclick = function () {
        yes.checked = true;
        no.checked = false;
        color.style.display = 'block';
    }
    no.onclick = function () {
        yes.checked = false;
        no.checked = true;
        color.style.display = 'none';
    }

    let out = document.getElementById('create');
    out.onclick = function () {
        let width = document.getElementById('inp1').value;
        let height = document.getElementById('inp2').value;
        let row = document.getElementById('row').value;
        let column = document.getElementById('column').value;

        let table = document.createElement('table');
        table.style.margin = '50px auto';
        for (let i = 0; i < row; i++) {
            let tr = document.createElement('tr');
            for (let i = 0; i < column; i++) {
                let td = document.createElement('td');
                td.style.width = width + 'px';
                td.style.height = height + 'px';
                td.style.border = 'solid 2px';
                td.onmouseover = function () {
                    let x = Math.floor(Math.random() * 255);
                    let y = Math.floor(Math.random() * 255);
                    let k = Math.floor(Math.random() * 255);
                    let rgb = `rgb(${x},${y},${k})`;
                    td.style.background = rgb;
                    setTimeout(() => {
                        td.style.background = 'transparent';
                    }, 300);
                }
                tr.appendChild(td);
            }
            table.append(tr);
        }
        if (yes.checked == true) {
            table.style.border = 'solid 2px' + color.value
        }
        document.body.append(table);
    }



}