import {withRouter} from 'next/router'
import dynamic from 'next/dynamic'
import React, {Component} from 'react'
import axios from 'axios'
import Header from '../components/Header'
const InnerPost = dynamic(import('../components/Post'), {
    loading: () => <p>Loading...</p>,
    // ssr=true时看不到loading效果
    ssr: false
});

const Post = withRouter((props) => (
    <div>
        <Header/>
        <InnerPost {...props} />
    </div>

));

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