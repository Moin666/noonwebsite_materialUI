import React from "react"

function Carousel(){
    return(<>
            <div id="carouselExampleIndicators" class="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner w-100">
                <div class="carousel-item active w-100 h-100">
                   <img src="https://k.nooncdn.com/cms/pages/20220513/c332de5eae59ba81ed030535479d60d2/en_hero-noon-RakBank.png" class="d-block w-100"  style={{height:"30vh"}} alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_hero.jpg" style={{height:"30vh"}} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://k.nooncdn.com/cms/pages/20220513/272b0974d1d7d927a0837b7e69e779c8/en_dk_uae-hero-01.gif" style={{height:"30vh"}} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
</div>


    </>)
}

export default Carousel