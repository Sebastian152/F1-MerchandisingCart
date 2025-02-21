import Header from "./components/Header"

function App() {
  return (
    <>
    <Header/>
    <main className="container-xl mt-5">
        <h2 className="text-center">Our best products</h2>

        <div className="row mt-5">
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch1.jpg" alt="product image" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Ferrari cap</h3>
                    <p>Experience the luxury and style of Ferrari with this iconic cap. Perfect for any occasion.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100"
                    >Add to cart</button>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch2.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Ferrari polo</h3>
                    <p>Stay cool and look good in this Ferrari polo shirt. The perfect choice for any Ferrari enthusiast.</p>                    
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch3.jpg" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Ferrari jacket</h3>
                    <p>Stay warm and stylish with this Ferrari jacket. A perfect choice for any Ferrari fan.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid flip" src="./public/img/merch4.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Redbull cap</h3>
                    <p>Represent the energy drink that fuels champions with this Redbull cap. Perfect for any adventure or
                    day out.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch5.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Redbull polo</h3>
                    <p>Stay cool and comfortable with this Redbull polo shirt. The perfect choice for any fan
                    looking to show off their racing passion.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch6.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Redbull jacket</h3>
                    <p>Stay warm and dry with this Redbull jacket. A perfect choice for any outdoor adventure or winter
                    day and racing enjoyers.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid flip" src="./public/img/merch7.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Mercedes cap</h3>
                    <p>Experience the luxury and elegance of Mercedes with this cap. Perfect for any fan or driver looking
                    to show off their love for the brand.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch8.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Mercedes polo</h3>
                    <p>Stay cool and stylish with this Mercedes polo shirt. The perfect choice for any Mercedes enthusiast
                    looking to show off their love for the iconic brand.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid flip" src="./public/img/merch9.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Mercedes helmet</h3>
                    <p>Experience the thrill of racing with this Mercedes helmet. A perfect choice for any fan or driver
                    looking to feel like part of the team.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid flip" src="./public/img/merch10.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Aston Martin cap</h3>
                    <p>Experience the luxury and elegance of Aston Martin with this cap. Perfect for any fan or driver
                    looking to show off their love for the brand.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/merch11.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Aston Martin bottle</h3>
                    <p>Stay hydrated in style with this Aston Martin bottle. The perfect choice for any fan looking to
                    show off their love for the iconic brand.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid flip" src="./public/img/merch12.avif" alt="product image"/>
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">Aston Martin helmet</h3>
                    <p>Experience the thrill of racing with this Aston Martin helmet. A perfect choice for any fan or
                    driver looking to feel like part of the team.</p>
                    <p className="fw-black text-primary fs-3">$299</p>
                    <button 
                        type="button"
                        className="btn btn-dark w-100 "
                    >Add to cart</button>
                </div>
            </div>
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl d-flex justify-content-s-between">
            <p className="text-white text-center fs-4 mt-4 m-md-0">F1 Merchandising Cart - By Sebastián Galindo</p>

            <div className="social-links">
              <a href="https://github.com/Sebastian152" target="_blank">
                <svg height="30" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="30" data-view-component="true" className="github-logo social-logo">
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/sebastián-galindo-g/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="linkedin-logo social-logo" focusable="false">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
            </div>
        </div>
    </footer>

    </>
  )
}

export default App
