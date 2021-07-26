import styles from './alert.module.css'
import cn from 'classnames'
/** This is a dynamic component using classnames library 
  is a simple library that lets you toggle class names easily */

const Alert = ({children, type})=>{
    return (
        <div
          className={cn({
            [styles.success]: type === 'success',
            [styles.error]: type === 'error'
          })}
        >
          {children}
        </div>
      )

}

export default Alert;