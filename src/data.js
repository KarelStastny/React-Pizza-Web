import image1 from "./images/hermiona.png"
import image2 from "./images/ironman.png"
import image3 from "./images/the-rock.jpg"

const reference = [{
    id: 1,
    image: image3,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur culpa odit pariatur voluptates? Repellendus, odit eligendi. Rerum reiciendis sint atque odit aspernatur unde voluptas reprehenderit modi, saepe dignissimos voluptatibus.",
    signaure: "The Rock"
},{
    id: 2,
    image: image2,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur culpa odit pariatur voluptates? Repellendus, odit eligendi. Rerum reiciendis sint atque odit aspernatur unde voluptas reprehenderit modi, saepe dignissimos voluptatibus.",
    signaure: "Iron Man"
},{
    id: 3,
    image: image1,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur culpa odit pariatur voluptates? Repellendus, odit eligendi. Rerum reiciendis sint atque odit aspernatur unde voluptas reprehenderit modi, saepe dignissimos voluptatibus.",
    signaure: "Hermiona"
},
]

import sunkova from "./images//Nabidka/sunkova"
import hawai from "./images//Nabidka/hawai"
import chili from "./images//Nabidka/chili"
import olivova from "./images//Nabidka/olivova"
import salami from "./images//Nabidka/salami"
import zampionova from "./images//Nabidka/zampionova"


const nabidka = [{
    id: 1, 
    name: "Šunková pizza",
    image: sunkova, 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae.",
    cost: 10,
    time: 40,
    materials: "Olej, Šunka, Mouka, Rajčata, Sýr"
},{
    id: 2, 
    name: "Hawai pizza",
    image: hawai, 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae.",
    cost: 11,
    time: 40,
    materials: "Olej, Ananas, Mouka, Rajčata, Sýr"
},{
    id: 3, 
    name: "Chili pizza",
    image: chili, 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae.",
    cost: 10,
    time: 42,
    materials: "Olej, Šunka, Mouka, Rajčata, Sýr"
},{
    id: 4, 
    name: "Olivová pizza",
    image: olivova, 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae.",
    cost: 13,
    time: 40,
    materials: "Olej, Chili, Mouka, Rajčata, Sýr"
},{
    id: 5, 
    name: "Salamová pizza",
    image: salami, 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae.",
    cost: 14,
    time: 40,
    materials: "Olej, Salám, Mouka, Rajčata, Sýr"
},{
    id: 6, 
    name: "Žampionová pizza",
    image: zampionova, 
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima totam eos ea omnis tenetur deserunt eius sequi nam, alias libero ullam cupiditate facere, tempore deleniti repudiandae.",
    cost: 15,
    time: 40,
    materials: "Olej, Žamipony, Mouka, Rajčata, Sýr"
},

]

export default {reference, nabidka}
