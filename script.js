const ctx = document.getElementById("skillRadar");

new Chart(ctx,{
type:"radar",


data:{
    labels:[
        "React",
        "Node.js",
        "PHP",
        "Laravel",
        "MySQL",
        "UI/UX"
    ],

    datasets:[
        {
            label:"Skill Level",
            data:[95,90,92,88,90,85],

            backgroundColor:"rgba(59,130,246,.25)",
            borderColor:"#3b82f6",
            borderWidth:3,

            pointRadius:5,
            pointBackgroundColor:"#fff"
        }
    ]
},

options:{
    responsive:true,

    plugins:{
        legend:{
            labels:{
                color:"#fff"
            }
        }
    },

    scales:{
        r:{
            min:0,
            max:100,

            ticks:{
                display:false
            },

            grid:{
                color:"#334155"
            },

            angleLines:{
                color:"#334155"
            },

            pointLabels:{
                color:"#fff",
                font:{
                    size:14
                }
            }
        }
    }
}

});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let count=0;
const target=+counter.dataset.target;

const update=()=>{

if(count<target){

count++;

counter.innerText=count+"%";

requestAnimationFrame(update);

}

};

update();

});
