let cluster = '';
let updateCluster ='';
let newcluster = '';
let play = document.querySelector("#inside")
let play1 = document.querySelector("#gamearea")
let click = 0;
const g = [11, 12, 13, 21, 22, 23, 31, 32, 33];
let x_count = [];
let x =0;
let o_count = [];
let o =0;
const winpatterns = [
    [11, 21, 31],
    [12, 22, 32],
    [13, 23, 33],
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33],
    [11, 22, 33],
    [31, 22, 13]
  ];
let fresh = document.querySelector("#refresh")
  


function playSpace() {
    for (let i=0 ; i<9; i++) {
            cluster += `<div class="box" id="${i}"></div>`
           
    }
    play.innerHTML = cluster;
    updateCluster = cluster;
}


playSpace()

function RES(char) {
    if (char == 'x') {
        play1.innerHTML=`<div id="ress">
        <h2>X WON</h2>`
    } else if (char == 'o') {
        play1.innerHTML=`<div id="ress">
        <h2>O won!!</h2>`
    } else {
        play1.innerHTML=`<div id="ress">
        <h2>O DRAW</h2>`
    }
}

function call_x(iid) {
    

    resetElements = updateCluster.match(/<div[^>]*>.*?<\/div>/gs);

    resetElements.forEach(div => {
    });

    newcluster =''

    for (let i=0 ; i<9; i++) {
            if (iid == i) {
                newcluster += `<div class="box" id="done"><i class="fa-solid fa-x"></i></div>`;
                x++;
                x_count.push(g[i]);
                if (x >= 3) {
                    //checkwin(x_count)
                    for (let j=0 ; j<winpatterns.length;j++) {
                        if (winpatterns[j].every(element => x_count.includes(element))) {
                            click=0
                            RES('x')
                        } 
                    }
                    if (click==9) {
                        RES('D')
                    
                    }
                }
            } else {
                newcluster += resetElements[i]//`<div class="box" id="${i}"></div>`
            }
    }
    updateCluster = newcluster
    play.innerHTML = updateCluster;

}


function call_o(iid) {
    resetElements = updateCluster.match(/<div[^>]*>.*?<\/div>/gs);

    resetElements.forEach(div => {
    });
    newcluster =''

    for (let i=0 ; i<9; i++) {
            if (iid == i) {
                newcluster += `<div class="box" id="done"><i class="fa-solid fa-o"></i></div>`;
                o++
                o_count.push(g[i])
                if (o >= 3) {
                    //checkwin(o_count)
                    for (let j=0 ; j<winpatterns.length;j++) {
                        if (winpatterns[j].every(element => o_count.includes(element))) {
                            click=0
                            RES('o')

                        } 
                    }
                    if (click==9) {
                        RES('D')
                    
                    }
                }
                
            } else {
                newcluster += resetElements[i]//`<div class="box" id="${i}"></div>`
            }
    } 
    updateCluster = newcluster;
    play.innerHTML = updateCluster;

} 

function clicked() {
    play.addEventListener('click', function(dets) {
        let iid = dets.target.id
        let no = iid.match(/\d+/g);//derives number d=digit
        if ( no !== null) {
            click++
        }

        
        if (click%2 === 0) {
            call_x(iid)
            console.log('x ',click)
        } else {
            call_o(iid)
            console.log('o ',click)
        }
    });
}

clicked()