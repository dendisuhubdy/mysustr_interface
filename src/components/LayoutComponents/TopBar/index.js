import React from 'react'
import HomeMenu from './HomeMenu'
import LiveSearch from './LiveSearch'
import ProfileMenu from './ProfileMenu'
import LanguageSelector from './LanguageSelector'
import styles from './style.module.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className="mr-auto">
          <LiveSearch />
        </div>
        <div className="mr-4">
          <LanguageSelector />
        </div>
        <div className="mr-4">
          <HomeMenu />
        </div>
        <ProfileMenu />
      </div>
    )
  }
}

export default TopBar
