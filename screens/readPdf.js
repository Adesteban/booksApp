import * as React from 'react'
import PDFReader from 'rn-pdf-reader-js'

const Pdf = ({route}) => {
  const item = route.params;

  return (
    <PDFReader
      source={{
        uri: item.file,
      }}
    />
  )
  
}

export default Pdf


  

