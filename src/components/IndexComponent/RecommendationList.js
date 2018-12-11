import React from 'react'
import styles from '../../routes/IndexPage.css'
import Recommendation from './Recommendation'

function RecommendationList(){
    return (
        <section className={styles.recommendation}>
            <h2>推荐歌单</h2>
            <ul className={styles.recommendationList}>
                <Recommendation />
                <li>
                    <img src="http://p1.music.126.net/Z8gA7rjUFzYObDZJlrnUow==/109951163687891504.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <p>「中文说唱」韵脚勾勒出写给父母的信</p>   
                </li>
                <li>
                    <img src="http://p1.music.126.net/pMRi2zv6Cp0SoEFzA2yL-Q==/19128203788989932.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <p>2018网络红歌</p>   
                </li>
                <Recommendation />
                <li>
                    <img src="http://p1.music.126.net/Z8gA7rjUFzYObDZJlrnUow==/109951163687891504.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <p>「中文说唱」韵脚勾勒出写给父母的信</p>   
                </li>
                <li>
                    <img src="http://p1.music.126.net/pMRi2zv6Cp0SoEFzA2yL-Q==/19128203788989932.webp?imageView&amp;thumbnail=247x0&amp;quality=75&amp;tostatic=0&amp;type=webp" />
                    <p>2018网络红歌</p>   
                </li>
            </ul>
        </section>
    )
}


export default RecommendationList