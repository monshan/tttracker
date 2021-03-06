import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Link
} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import OembedDialog from '../OembedDialog/OembedDialog';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const Independent = ({
  cite,
  title,
  sound_title,
  sound_url,
  author_url,
  author_name,
  html,
  data_video_id,
  thumbnail_url,
  status_msg,
  isPinned,
  removeTikTok,
  togglePin
  }) => {
  
  const [indDialog, setIndDialog] = useState(false);

  const toggleDialog = () => {
    setIndDialog(!indDialog);
  }

  const determineErrorRender = () => {
    if (status_msg) {
      return (
        <CardContent>
          <p>Not able to load this tiktok, please check your path url</p>
          <p className="error-address">{ cite }</p>
        </CardContent>
      )
    }
    return (
      <>
        <CardMedia 
          image={ thumbnail_url }
          component="img"
          aria-label={ `Thumbnail of ${ title }` }
          onClick={ e => toggleDialog() }
        />
        <CardContent>
          <Link 
            href={ author_url }
            underline="hover"
            color="secondary"
            >@{ author_name }
          </Link>
          <p className="title">{ title }</p>
          <Link
            href={ sound_url }
            underline="hover"
            color="secondary"
            >{ sound_title }
          </Link>
        </CardContent>
      </>
    )
  }

  return (
    <Grid
      item
      lg={2}
      md={3}
      sm={4}
      xs={6}
    >
      <OembedDialog 
        indDialog={ indDialog }
        toggleDialog={ toggleDialog }
        content={ html }
      />
      <Card
        elevation={6}
        >
        { determineErrorRender() }
        <CardActions>
          <IconButton
            onClick={() => togglePin(data_video_id)}
            className="pin-icon"
            aria-label={ `${title} pin button` }
          >
            { isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton
            onClick={() => removeTikTok(cite)}
            className="trash-icon"
            aria-label={ `${title} remove button` }
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Independent;

// Independent.propTypes = {
//   tiktoksrc: PropTypes.string.isRequired,
//   addPin: PropTypes.func.isRequired,
//   removePin: PropTypes.func.isRequired
// }