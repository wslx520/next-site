import {withRouter} from 'next/router'
import {Component} from 'react'
import axios from 'axios'
import Header from '../components/Header'
class InnerPost extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        if (!props.show) {
            const {id } = props.router.query;
            if (!id) return;
            axios.get(`https://api.tvmaze.com/shows/${id}`).then( (res) => res.data)
                .then(show => {
                    console.log(show);
                    this.setState({show})
                })
        }
    }
    render() {
        const props = this.props;
        const show = props.show || (this.state && this.state.show );
        console.log('rrrrrender', show);
        if (!show) return null;
        return <div>
            <Header></Header>
            <h1>{show.name}</h1>
            <p>{props.router.query.id}</p>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium}/>
        </div>
    }
}
const Post = withRouter((props) => (
    <InnerPost {...props} />

))

// Post.getInitialProps = async function (context) {
//     console.log(context.query);
//     if (context.res && context.req) {
//         const {id } = context.query;
//         if (!id) return {}
//         const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
//
//         const show = res.data;
//         console.log(`Fetched show: ${show.name}`)
//         return {show}
//     }
//     return {}
// }
export default Post;