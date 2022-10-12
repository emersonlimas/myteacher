import type { NextPage } from 'next';
import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';
import List from '../src/components/List/List';
import { useIndex } from '../src/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {listTeachers, name, setName, email, setEmail, selectedTeacher, setSelectedTeacher, scheduleClass, message, setMessage} = useIndex();
  
  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main'}}>
        <List teachers={listTeachers} onSelect={(teacher) => setSelectedTeacher(teacher)}/>
      </Box>

      <Dialog onClose={() => setSelectedTeacher(null)} open={selectedTeacher !== null} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Digite o seu nome" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)}/>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Digite o seu email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5, p: 0}}>
          <Button onClick={() => setSelectedTeacher(null)}>Cancelar</Button>
          <Button onClick={() => scheduleClass()}>Marcar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar message={message} open={message.length > 0} autoHideDuration={2000} onClose={() => setMessage('')} />
    </>
      
  )
}

export default Home
