import React, {useState, useEffect} from 'react'

const Timer = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = () => setDate(new Date());

    const timerIT = setTimeout(tick, 1000);

    return () => clearTimeout(timerIT)
  }, [date])

  return (
    <React.Fragment>
      <h1>{getDate(date)}</h1>
    </React.Fragment>
  )
}

const getDateRestult = str => {
  if (str < 10) {
  return `0${str}`
  
  }
  
  return str
  
}

const getDate = str => {
  if (str != null) {
    const time = new Date(parseInt(Date.parse(str)))
    const year = getDateRestult(time.getFullYear())
    const month = getDateRestult(time.getMonth() + 1)
    const day = getDateRestult(time.getDate())
    const hours = getDateRestult(time.getHours())
    const Minutes = getDateRestult(time.getMinutes())
    const seconds = getDateRestult(time.getSeconds())

    const resultTime = `${year}-${month}-${day} ${hours}:${Minutes}:${seconds}`
    return resultTime
  }
}

export default Timer;