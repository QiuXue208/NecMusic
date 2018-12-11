import React from 'react'
import styles from '../../routes/IndexPage.css'
import { Icon } from 'antd'

function Search(){
    return (
        <form>
            <div className={styles.formContainer}>
                <Icon className={styles.searchIcon} type="search" />
                <input className={styles.search} type="search" />
                <label>搜索歌曲、歌手、专辑</label>
                <Icon className={styles.closeIcon} type="close" />
            </div>
        </form>
    )
}

export default Search