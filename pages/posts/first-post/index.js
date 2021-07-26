import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/layout'

const FirstPost = ()=>{
    return (
        <Layout>
        <div>
            <Head>
                <title>First Post</title>

            </Head>
            <h1> FirstPost page</h1>
            <Link href="/"><a>Home</a></Link>
        </div>
        </Layout>
    )
    }
    
    export default FirstPost