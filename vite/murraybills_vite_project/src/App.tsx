import { create } from 'zustand'



const letters = ['V', 'O', 'S', 'C', 'A', 'K']

export const useLetterStore = create<any>()((set) => ({
  index: 0,
  setNextLetterIndex: () => set((state:any) => ({
    index: state.index + 1,
  }))

}))



function LetterPrinter() {
  const index = useLetterStore((state) => state.index)
  if (index < 6)
    return <h1>{letters[index]}</h1>
  else
    return <h1>ENDE</h1>
  

}

function LetterControls() {
  const setNextLetter = useLetterStore((state) => state.setNextLetterIndex)
  return <button onClick={setNextLetter}>Click</button>
}



function App() {

  return (
    <>
     <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"          
        }}
      >
         <LetterPrinter></LetterPrinter>         
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"          
        }}
      >
         <LetterControls></LetterControls>       
      </div>
      
    </>
  )
}

export default App
