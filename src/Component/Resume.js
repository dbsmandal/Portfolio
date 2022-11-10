import React from 'react';
import pdf from "./Images/Resume.pdf"


const Resume = () => {
  return (
    <div>
        <a href={pdf} target="_blank" 
                    rel="noreferrer">
                    Open Second PDF
                </a>
      
    </div>
  )
}

export default Resume
