// let count = 0;
// let count2 = 0;
// let count3 = 0;
// let count4 = 0;
// let shirt = 0;

// const plusCount = () => {
//   document.querySelector('#plus').addEventListener('click', e=>{
//     const number = document.querySelector('#numberCount').innerText = count += 1;
//     document.querySelector('#cart-price').innerText = shirt  += 100;
//     if(number === 10) alert('The maximum is 10 item')

//   })
// }
// plusCount()

// const minusCount = () => {
//   document.querySelector('#minus').addEventListener('click', e=>{
//     document.querySelector('#numberCount').innerText = count -= 1;
//     document.querySelector('#cart-price').innerText = shirt -= 100;
//     if(count === 1){
//       alert('The minimum you can order is 1')

//     }
//   })
// }

// minusCount()

// const plusCount2 = () => {
//    document.querySelector('#plus2').addEventListener('click', (e) => {
//    document.querySelector('#numberCount2').innerText = count2 += 1;
//    document.querySelector('#cart-number').innerText = count2;
//   });
// };
// plusCount2();

// const minusCount2 = () => {
//   document.querySelector('#minus2').addEventListener('click', (e) => {
//     document.querySelector('#numberCount2').innerText = count2 -= 1;
//     document.querySelector('#cart-number').innerText = count2;
//   });
// };

// minusCount2();

// const plusCount3 = () => {
//   document.querySelector('#plus3').addEventListener('click', (e) => {
//     document.querySelector('#numberCount3').innerText = count3 += 1;
//     document.querySelector('#cart-number').innerText = count3;
//   });
// };
// plusCount3();

// const minusCount3 = () => {
//   document.querySelector('#minus3').addEventListener('click', (e) => {
//     document.querySelector('#numberCount3').innerText = count3 -= 1;
//     document.querySelector('#cart-number').innerText = count3;
//   });
// };

// minusCount3();

// const plusCount4 = () => {
//   document.querySelector('#plus4').addEventListener('click', (e) => {
//     document.querySelector('#numberCount4').innerText = count4 += 1;
//     document.querySelector('#cart-number').innerText = count4;
//   });
// };
// plusCount4();

// const minusCount4 = () => {
//   document.querySelector('#minus4').addEventListener('click', (e) => {
//     document.querySelector('#numberCount4').innerText = count4 -= 1;
//     document.querySelector('#cart-number').innerText = count4;
//   });
// };

// minusCount4();


const card = document.querySelector('#shop');


const eventCart = () => {
  return (card.innerHTML = `
     <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./image/img-1.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Casual Shirt</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                    </div>
                    <div class="amount">
                        <h6>$<h6 id="cart-price">100</h6></h6>
                        <div class="zero">
                         <a href="buying.html" <i class="bi bi-bag data-bs-toggle="tooltip" data-bs-placement="top" title="Buy"></i></a>
                            <i class="bi bi-trash3 data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"></i>
                        </div>
                        <div class="zero">
                            <i class="bi bi-dash" id="minus"></i>
                            <div class="quantity" id="numberCount">1</div>
                              <i class="bi bi-plus" id="plus"></i>
                         </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./image/img-2.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Men shirt</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                    </div>
                    <div class="amount">
                        <h6>$<h6 id="cart-price">100</h6></h6>
                        <div class="zero">
                         <a href="buying.html" <i class="bi bi-bag data-bs-toggle="tooltip" data-bs-placement="top" title="Buy"></i></a>
                            <i class="bi bi-trash3 data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"></i>
                        </div>
                        <div class="zero">
                            <i class="bi bi-dash" id="minus"></i>
                            <div class="quantity" id="numberCount">1</div>
                              <i class="bi bi-plus" id="plus"></i>
                         </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./image/img-3.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Casual Shirt</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                    </div>
                    <div class="amount">
                        <h6>$<h6 id="cart-price">100</h6></h6>
                        <div class="zero">
                         <a href="buying.html" <i class="bi bi-bag data-bs-toggle="tooltip" data-bs-placement="top" title="Buy"></i></a>
                            <i class="bi bi-trash3 data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"></i>
                        </div>
                        <div class="zero">
                            <i class="bi bi-dash" id="minus"></i>
                            <div class="quantity" id="numberCount">1</div>
                              <i class="bi bi-plus" id="plus"></i>
                         </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./image/img-4.jpg" class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Casual Shirt</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional.</p>
                    </div>
                    <div class="amount">
                        <h6>$<h6 id="cart-price">100</h6></h6>
                        <div class="zero">
                         <a href="buying.html" <i class="bi bi-bag data-bs-toggle="tooltip" data-bs-placement="top" title="Buy"></i></a>
                            <i class="bi bi-trash3 data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"></i>
                        </div>
                        <div class="zero">
                            <i class="bi bi-dash" id="minus"></i>
                            <div class="quantity" id="numberCount">1</div>
                              <i class="bi bi-plus" id="plus"></i>
                         </div>
                </div>
            </div>
        </div>
    </div>
    `);
};
eventCart();
