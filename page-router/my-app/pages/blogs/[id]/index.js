export default function Page({recipe}){
    return(
        
         <div>
            <p>{recipe.name}</p>
            <p>Preperation Time {recipe.prepTimeMinutes}</p>
            <p>Savings {recipe.servings}</p>
         </div>
     )

}
/*export async function getServerSideProps({params}){
    const {id}=params;
    const res=await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe=await res.json()
    return{
        props:{recipe}
    }

}*/
export async function getStaticProps({params}) {
   
    const id=params.id
    const res=await fetch(`https://dummyjson.com/recipes/${id}`)
    const recipe=await res.json()
   
    return {
      props: { recipe },
      revalidate: 60,
    }
  }
export async function getStaticPaths(){
    const res = await fetch('https://dummyjson.com/recipes').then((res) =>
        res.json()
      )
     
     const paths=res.recipes.map((item)=>({
        params:{id:item.id.toString()}
     }))
    
     return { paths, fallback: false }
}