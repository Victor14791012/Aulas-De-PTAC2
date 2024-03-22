const url = "http://localhost:3000/api";

export default async function Home() {

  const resposta = await fetch("https://back-end-ifms.vercel.app/campi",{
    next:{
      revalidade:1
    }
  });
  const campi = await resposta.json();
 
  return (
    <main>
      <h1 className="text-center text-align-center " >Home</h1>
      {campi.map((campus) =>
        <div>
             <p>{campi.nome_campi}</p>
        </div>
      )}
    </main>
  )
}


