import React from 'react'
import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.inner}>
      <div className="row">
        <div className="col-lg-9">
          <p>
            <strong>Mysustr App</strong>
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="row">
          <div className="col-sm-6">
            <div className={styles.copyright}>
              <img
                src="resources/images/mediatec.png"
                rel="noopener noreferrer"
                alt="Mediatec Software"
              />
              <span>
                © 2019{' '}
                <a href="http://mediatec.org/" target="_blank" rel="noopener noreferrer">
                  Dendi Suhubdy
                </a>
                <br />
                All rights reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
