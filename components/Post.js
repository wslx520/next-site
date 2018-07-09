import {Component} from 'react'
import axios from 'axios'
class Post extends Component {
    // getInitialProps 只适用于 pages
    static async getInitialProps (context) {
        console.log('context.query', context.query);
        if (context.res && context.req) {
            const {id } = context.query;
            if (!id) return {}
            const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)

            const show = res.data;
            console.log(`Fetched show: ${show.name}`)
            return {show}
        }
        return {}
    }
    constructor(props) {
        super(props);
        // console.log(props);
        if (!props.show) {
            let {id } = props.router.query;
            console.log(props.router);
            debugger
            if (!id) {
                if (typeof location!== 'undefined') {
                    const qur = location.search;
                    let queryMap = qur.substr(1).split('&').reduce( (res,q) => {
                        q = q.split('=');
                        res[q[0]] = q[1]
                        return res;
                    }, {});

                    id = queryMap.id;
                }

            }

            if (!id) return;
            axios.get(`https://api.tvmaze.com/shows/${id}`).then( (res) => res.data)
                .then(show => {
                    // console.log(show);
                    this.setState({show})
                })
        }
    }
    render() {
        const show = (this.state && this.state.show );
        console.log('rrrrrender', show);
        if (!show) return null;
        return <div>
            <h1>{show.name}</h1>
            <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={show.image.medium}/>
        </div>
    }
}


export default Post;