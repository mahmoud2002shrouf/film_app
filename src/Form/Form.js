import React, { useContext, useRef, useState } from 'react'
import { Context } from '../context/ContextProvider'
import classes from './Form.module.css'
const Form = () => {
  const ctx = useContext(Context)
  const nameRef = useRef()
  const urlRef = useRef()
  const DateRef = useRef()
  const typeRef = useRef()
  const numberRef = useRef()
  const titleref = useRef()
  const [eroor, seterror] = useState(false)
  const handelsub = (e) => {
    e.preventDefault()
    const nameRefs = nameRef.current.value
    const urlRefs = urlRef.current.value
    const DateRefs = DateRef.current.value
    const typeRefs = typeRef.current.value
    const numberRefs = numberRef.current.value
    const titlerefs = titleref.current.value
    if (
      nameRefs.length === 0 ||
      urlRefs.length === 0 ||
      DateRefs.length === 0 ||
      typeRefs.length === 0 ||
      numberRefs.length === 0 ||
      titlerefs.length === 0
    ) {
      seterror(true)
      return
    } else {
      const datase = {
        name: nameRefs,
        url: urlRefs,
        type: typeRefs,
        number: numberRefs,
        date: DateRefs,
        title: titlerefs,
        newdate: new Date(),
      }
      fetch('https://online-ec9d2-default-rtdb.firebaseio.com/moves.json', {
        method: 'POST',
        body: JSON.stringify(datase),
        headers: { 'Content-Type': 'application/json' },
      })
      ctx.datas = [...ctx.datas, datase]
      console.log(ctx.datas)
      nameRef.current.value = ''
      urlRef.current.value = ''
      DateRef.current.value = ''
      typeRef.current.value = ''
      numberRef.current.value = ''
    }
  }
  return (
    <div className={classes.fulldiv}>
      <div className={classes.back2}>
        <h2>Add a new movie/series</h2>
        <form className={classes.form} onSubmit={handelsub}>
          <input type="text" placeholder="name" ref={nameRef} />
          <input type="url" placeholder="url of img" ref={urlRef} />
          <select ref={typeRef}>
            <optgroup label="type" />

            <option value="trkey">تركي</option>
            <option value="film">افلام</option>
            <option value="mos">مسلسلات</option>
            <option value="mosd">مسلسلات مدبلجة</option>

            <option value="transate ">مسلسلات مترجمة</option>
          </select>
          <input
            type="number"
            placeholder="The number of series"
            ref={numberRef}
          />
          <input type="Date" placeholder="Date" ref={DateRef} />
          <input type="text" placeholder="title" ref={titleref} />
          <button type="submit">submit</button>
          {eroor && <p>الرجاء تعبئة جميع الحقول</p>}{' '}
        </form>
      </div>
      <div className={classes.back} onClick={ctx.showboxF}></div>
    </div>
  )
}

export default Form
