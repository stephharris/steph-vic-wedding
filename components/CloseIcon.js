import styles from './CloseIcon.module.css';

const CloseIcon = ({ handleClose }) => (
  <div onClick={handleClose} className={styles.close}>
    <h2 className={styles.closeText}>Close</h2>
    <svg className={styles.closeSvg} width="15px" height="15px" viewBox="0 0 513 513">
      <g fill="#FFF">
        <path d="M284.8,256.5L506.6,34.6c7.8-7.8,7.8-20.5,0-28.3c-7.8-7.8-20.5-7.8-28.3,0L256.5,228.2L34.6,6.4
          c-7.8-7.8-20.5-7.8-28.3,0s-7.8,20.5,0,28.3l221.9,221.9L6.4,478.4c-7.8,7.8-7.8,20.5,0,28.3c3.9,3.9,9,5.9,14.1,5.9
          s10.2-2,14.1-5.9l221.9-221.9l221.9,221.9c3.9,3.9,9,5.9,14.1,5.9s10.2-2,14.1-5.9c7.8-7.8,7.8-20.5,0-28.3L284.8,256.5z"/>
      </g>
    </svg>
  </div>
)

export default CloseIcon;
