import { setCustomProperty, incrementCustomProperty } from "./updateCustomProperty.js";

const SPEED = .05; 
const CACTUS_INTERVAL_MIN = 500
const CACTUS_INTERVAL_MAX = 2000
const worldElem = document.querySelector("[data-world]")

export function setupCactus() {
    nextCactusTIme = CACTUS_INTERVAL_MIN
    document.querySelectorAll("[data-cactus]").forEach(cactusf => {
        cactus.remove(); 
    })
}


export function updateCactus(delta, speedScale){
    document.querySelectorAll("[data-cactus]").forEach(cactus => {
        incrementCustomProperty(cactus, "--left", delta * speedScale * SPEED * -1)
        if (getCustomProperty(cactus, "--left") <= -100){
            cactus.remove(); 
        }
    })
    if(nextCactusTime <= 0){
        createCactus()
        nextCactusTime = randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) /speedScale
    }
    nextCactusTime -= delta
}


function createCactus() {
    const cactus = document.createElement("div")
    cactus.dataset.cactus = true
    cactus.src = "imgs/cactus.png"
    cactus.classList.add("cactus")
    setCustomProperty(cactus, "--left", 100)
    worldElem.append(cactus)
}

function randomNumberBetween(min, max){
    Math.floor(Math.random() * (max -min + 1) + min)
}