import Card from './Card';
import './CardList.css'

const CardsList = ({max}) => {

const array = new Set();

do {
  array.add(Math.floor(Math.random() * 100))
} while( array.size < max)

  return (
    <div className='container gap-5'>
      {[...array].map( id => <Card key={id} id={id} />)}
    </div>
  )

};



export default CardsList;