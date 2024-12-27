const cars=[
  "Carro1",
  "Carro2",
  "Carro3",
  "Carro4",
  "Carro5",
  "Carro6",
]

function App() {
 
  return (
   <>
    <ul>
      {
        cars.map((car,index)=> (
          <li key={index}>{car}</li>
        ))
      }
    </ul>
   </>
  )
}

export default App
