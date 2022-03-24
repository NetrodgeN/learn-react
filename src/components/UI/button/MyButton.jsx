import React from 'react'
import classes from './MyButton.module.css'

//пропс.чилдрен, это как-раз таки текст из кнопки.
//развернув пропс, все компоненты который мы будем передавать в майбтн
//будут улетать в эту кнопку
function MyButton({children, ...props}) {
  return (
    <button {...props}  className={classes.myBtn}>
        {children}
    </button>
  )
}

export default MyButton