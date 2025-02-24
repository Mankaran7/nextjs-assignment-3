
export const revalidate = 60

export const dynamicParams = true 
export async function generateStaticParams() {
  const data = await fetch('https://dummyjson.com/recipes').then((res) =>
    res.json()
  )
  return data.recipes.map((item) => ({
    id: String(item.id),
  }))
}
 
export default async function Page({ params }) {
  const { id } = await params
  const recipe = await fetch(`https://dummyjson.com/recipes/${id}`).then((res) =>
    res.json()
  )

  return (
    <div>
    <p>{recipe.name}</p>
    <p>Preperation Time {recipe.prepTimeMinutes}</p>
    <p>Savings {recipe.servings}</p>
 </div>
  )
}