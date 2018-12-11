import React from 'react'
import styles from '../../routes/IndexPage.css'
import {Icon} from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl:'//at.alicdn.com/t/font_939829_p8e2hr1ol2p.js'
})

function Song(){
return (
    <li>
        <a href="#" className={styles.clearfix}>
            <div className={styles.paragraph}>
                <h3>梦开始的地方</h3>
                <p>
                    <IconFont type='icon-sq' className={styles.iconFont}/>
                    <span>朱一龙/吉克隽逸/李菲儿-梦开始的地方</span>
                </p>
            </div>
            <Icon className={styles.icon} type="play-circle" />                        
        </a>
    </li>
  )
}

export default Song