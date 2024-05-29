import { Avatar } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


    return (
        <header className="flex h-14 items-center bg-primary border-b-2 border-secondary px-4 lg:px-6 ">
            <p className="text-blue-600"> hi all </p>
            <Link> Whats Good Cuz</Link>
            <nav>
                <ul>
                    <li>
                        <Link> Home </Link>
                    </li>
                    <li>
                        <Link> About </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;