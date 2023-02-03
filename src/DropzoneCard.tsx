import { Card, CardContent, Link, Paper, Typography } from '@mui/material'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function DropzoneCard() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const {getRootProps, getInputProps, open} = useDropzone({onDrop, noClick: true})

  return (
    <Card variant='outlined'>
      <CardContent {...getRootProps()}>
        <input  {...getInputProps()}/>
        <Typography variant='h4' align='center'>
          Select Files
        </Typography>
        <Typography align='center'>
          Drop files here or click
          &nbsp;
          <Link onClick={open}>browse</Link>
        </Typography>
        <img style={{display: 'block', margin: 'auto', width: '200px'}} src='/src/assets/green.png'></img>
      </CardContent>
    </Card>
  )
}