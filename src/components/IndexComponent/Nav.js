import React from 'react'
import styles from '../../routes/IndexPage.css'

function Nav(){
        const paragraphs = ['推荐音乐','热歌榜','搜索']
        const listItems = paragraphs.map((paragraph,index)=>{
            return (<li 
                      key={index} 
                      className={styles.active} 
                      onClick={()=>{
                          this.handleChangeStyle(index)
                          this.props.handleTabChange(index)
                        }
                      } >
                      {paragraph}
                    </li>)
        })
        return (
            <nav className={styles.navbar}>
                <ul className={styles.nav}>
                    {listItems}              
                </ul>
            </nav>
        ) 
    }

export default Nav