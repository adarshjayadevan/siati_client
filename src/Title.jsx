import React, { useEffect } from 'react'

function Title({ title, children }) {
    useEffect(() => {
        document.title = title;
      }, [title]);
  return (
    <div>{children}</div>
  )
}

export default Title