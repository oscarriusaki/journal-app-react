import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { ImageGalery } from '../components/ImageGalery';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSelected } from '../views/NothingSelected';

export const JournalPage = () => {
  return (
    <JournalLayout> 
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus accusamus necessitatibus repellendus eaque nobis voluptatibus, exercitationem id at ipsum hic doloremque laboriosam modi eum, deleniti, delectus molestiae nihil asperiores architecto!</Typography> */}
      {/* Nothing selected */}
      {/* <NothingSelected /> */}
      <NoteView />
      <IconButton 
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{fontSize: 30}} /> 
      </IconButton>
    </JournalLayout>
  )
}
