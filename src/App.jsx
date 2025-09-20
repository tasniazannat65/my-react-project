import { Suspense } from "react"
import Countries from "./Countries"
import Categories from "./Categories"

// const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
// .then(res=> res.json())

const foodPromise = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=> res.json())
function App() {
  

  return (
    <>
      {/* <h1 className="text-3xl font-bold">All countries information</h1>
      <Suspense fallback={<h5>Message is loading....</h5>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense> */}
      <h1 className="text-3xl font-bold">All eammy foods</h1>
      <Suspense fallback={<h3>food categories are loading.....</h3>}>
        <Categories foodPromise={foodPromise}></Categories>
      </Suspense>
     
    </>
  )
}

export default App
