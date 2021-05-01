import Independent from '../Independent/Independent';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Home = ({ searchHome, removeTikTok, addPin, removePin }) => {
  const renderAsCards = () => {
    return searchHome.map(({
      cite,
      title,
      author_url,
      author_name,
      html,
      data_video_id,
      thumbnail_url,
      status_msg,
      isPinned
    }) => {
      return (
        <Independent 
          key={ data_video_id }
          cite={ cite }
          data_video_id={ data_video_id }
          title={ title }
          author_name={ author_name }
          author_url={ author_url }
          html={ html }
          thumbnail_url={ thumbnail_url }
          status_msg={ status_msg }
          isPinned={ isPinned }
          removeTikTok={ removeTikTok }
          addPin={ addPin }
          removePin={ removePin }
        />
      )
    })
  }

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      children={ renderAsCards() }
      id="gridContainer"
    />
  )
}

export default Home;

// Home.propTypes = {
//   initTikToks: PropTypes.array.isRequired
// }