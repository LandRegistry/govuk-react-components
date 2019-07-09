import React, {useEffect} from 'react'
import FileUpload from '../components/govukComponents/FileUpload'

function FileUploadDemo() {
  useEffect(() => {
    document.title = 'Tutorial checkbox demo'
  }, [])

  return (
    <main id="main-content">
      <h1 className="govuk-heading-l">File upload</h1>
      <FileUpload label={{text: 'Upload a file'}} formGroup={{classes: 'example-class'}} />
    </main>
  )
}

export default FileUploadDemo
