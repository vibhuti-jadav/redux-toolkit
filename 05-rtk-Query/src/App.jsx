
import './App.css'
import Cards from './components/Cards'


import { useAllRecipeQuery, useProductPageQuery } from './reduxApi/recipeApi'

function App() {

    const {data:recipe, isLoading:recipeLoad, error:recipeError } =  useAllRecipeQuery("recipes")
  const {data:products, isLoading:productsLoad, error:productsError } =  useAllRecipeQuery("products")
  const {data:page } =  useProductPageQuery(2)


    console.log(recipe)
  console.log(products)
  console.log(page)
  
  // const {data} = useAllRecipeQuery()
  // console.log(data)

  return (
    <>
      {/* <Cards data={data}/> */}
      <div className='mx-w-7xl mx-auto grid gap-10 p-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {recipe?.recipes?.map(ele=> (
        <Cards key={ele.id} recipe={ele} />
      ))}
      </div>
      
   
    </>
  )
}

export default App
