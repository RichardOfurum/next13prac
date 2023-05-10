
const fetchData = async() =>{
  try {
    const req = await fetch("http://localhost:3000/api/search");
    // const req = await fetch("http://localhost:3000/api/search?name=Ivysaur");
    const data = await req.json();
    return data;
  } catch (e: any) {
      throw new Error(e.message)
      console.log(e.message)
  }
}

export default async function Home() {

  const pokemon = await fetchData();

  return (
    <main>
      <h1>Richard</h1>
      {/* {JSON.stringify(pokemon)} */}
    </main>
  )
}
