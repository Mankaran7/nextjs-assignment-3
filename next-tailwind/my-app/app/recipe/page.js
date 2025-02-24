export default async function Page(){
    const res = await fetch('https://dummyjson.com/recipes?limit=5').then((res) =>
        res.json()
      )
      return(
        <div className="flex gap-5 ">
         {
           res.recipes.map((item)=>(
            <div key={item.id} className="mb-5 hover:bg-sky-700 ">
           <p >{item.name}</p>
            <p>Preperation Time {item.prepTimeMinutes}</p>
            <p>Savings {item.servings}</p>
        </div>
        ))
         }
         <button className="focus:bg-blue-500">button</button>
        </div>
      )
     
}
