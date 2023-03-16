// import './Card.css'

export default function Card({id}) {

  // const url = `https://picsum.photos/id/${id}/200`
  // const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  const url = `https://randomuser.me/api/portraits/women/${id}.jpg`

  return (
    <div className="card">
      <img className="card-img-top" src={url} alt="foto" onClick={()=>window.open(url, '_blank')}/>
      <div className="card-body bg-secondary">
        <p className="card-title text-light">Fotografía # <span className="fw-bold fs-4">{id}</span></p>
      </div>
    </div>
  )
}

