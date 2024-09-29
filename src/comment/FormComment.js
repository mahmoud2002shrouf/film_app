import React, { useCallback, useRef, useState } from 'react'
import classes from './Form.module.css'

const FormComment = (props) => {
  const name = useRef()
  const email = useRef()
  const comment = useRef()
  const [invalid, setinvalid] = useState(false)
  const [invalidemail, setinvalidemail] = useState(false)
  const [invalidcomm, setinvalidcomm] = useState(false)

  const handelsub = (e) => {
    e.preventDefault()
    const names = name.current.value
    const emails = email.current.value
    const comments = comment.current.value
    if (names.length === 0 || emails.length === 0 || comments.length === 0) {
      return
    } else {
      const data = {
        name: names,
        email: emails,
        comment: comments,
        Date: new Date(),
      }

      fetch(
        `https://online-ec9d2-default-rtdb.firebaseio.com/comments/${props.id}.json`,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      name.current.value = ''
      email.current.value = ''
      comment.current.value = ''
    }
  }
  const handel = () => {
    if (name.current.value.length === 0) {
      setinvalid(true)
      setinvalidcomm(false)

      setinvalidemail(false)
      return
    } else {
      if (email.current.value.length === 0) {
        setinvalid(false)
        setinvalidcomm(false)

        setinvalidemail(true)
        return
      } else {
        if (comment.current.value.length === 0) {
          setinvalid(false)
          setinvalidemail(false)

          setinvalidcomm(true)
          return
        } else {
          setTimeout(() => {
            window.location.reload()
          }, '1100')
        }
      }
    }
  }
  return (
    <form onSubmit={handelsub} className={classes.form}>
      <textarea
        id="comment"
        ref={comment}
        placeholder="تعليقك.."
        className={invalidcomm && classes.inputin}
      ></textarea>
      <div className={classes.input}>
        <div>
          <label>الاسم</label>
          <input
            type="name"
            ref={name}
            placeholder="ادخل اسمك الشخصي"
            className={invalid && classes.inputin}
          />
        </div>
        <div>
          <label>البريد الالكتروني</label>
          <input
            type="email"
            placeholder="لن يتم نشر البريد الالكتروني"
            ref={email}
            className={invalidemail && classes.inputin}
          />
        </div>
      </div>
      <button type="submit" onClick={handel}>
        نشر التعليق
      </button>
    </form>
  )
}

export default FormComment
