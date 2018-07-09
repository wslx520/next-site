import Link from 'next/link'
import axios from 'axios'
import Header from '../components/Header'

const posts = [
    {title: '一个标题', id: 1},
    {title: '222一个标题', id: 2},
    {title: '一个3333标题', id: 3},
]
const Index = (props) => (
	<div>
		<Header></Header>
		Hello Next.js
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    {/*<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>*/}
                    <Link  href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
	</div>
)

Index.getInitialProps = async function () {
    const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');
    // console.log(res.data);
    return {
        shows: res.data
    }
}

export default Index;