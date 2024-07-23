import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <nav>
        <li>
            <Link to='/'>Home</Link>
        </li>
      </nav>
    </div>
  )
}
