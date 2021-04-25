import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, FormControl, TextField, DialogActions, Button } from "@material-ui/core";

const AddTikTokForm = ({ status, addTikTok, closeForm }) => {
  const [tikTokInput, setTikTokInput] = useState('');

  return (
    <Dialog open={ status }>
      <DialogTitle>
        Add a TikTok to your space
      </DialogTitle>
      <DialogContent>
        <FormControl>
          <TextField
            placeholder="https://www.tiktok.com/~"
            type="string"
            variant="filled"
            name="userTikTokInput"
            onChange={event => setTikTokInput(event.target.value) }
            autoFocus
            fullWidth
          />
        </FormControl>
        <DialogContentText>
          Paste any tiktok in the input above. No worries about formatting, we can handle it for you!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={ () => addTikTok(tikTokInput) }>
          Submit
        </Button>
        <Button onClick={ closeForm }>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddTikTokForm;