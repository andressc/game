import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
      <footer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti, dignissimos eaque fugit id illum impedit
        in inventore laudantium, natus necessitatibus nulla pariatur praesentium quisquam repellat repellendus vel
        voluptas voluptate?
      </footer>
    </div>
  )
}
