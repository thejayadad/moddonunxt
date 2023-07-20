


export async function fetchNotes(){
  const res = await fetch('http://localhost:3000/api/note', {cache: 'no-store'})

  return res.json()
}



export default async function Home() {
  const notes = await fetchNotes()
  return (
    <main>
      <div>
      {notes?.length > 0 
       ? notes.map((note) => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          
        </div>
      )) : <h3 className={classes.noBlogs}>No blogs are currently in the</h3>}
      </div>

    </main>
  )
}
