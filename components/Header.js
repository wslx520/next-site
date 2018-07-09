import Link from 'next/link'
const Header = () => (
    <div>
        <ul>
            <li>
                <Link href={"/"}>
                    <a>Index</a>
                </Link>
            </li>
            <li>
                <Link href={"/about"}>
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </div>
)
export  default Header