import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import courseData from './components/CourseData'




ReactDOM.render(
    <App courseData={courseData} />,
    document.getElementById('root')
  )