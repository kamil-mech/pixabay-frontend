import React from 'react'

const FBLike = (): JSX.Element => <div className="fb-like fb_iframe_widget"
  data-href="https://www.facebook.com/pixabay"
  data-layout="button_count"
  data-share="true"
  data-show-faces="false"
  fb-xfbml-state="rendered"
  fb-iframe-plugin-query="app_id=114593902037957&amp;container_width=270&amp;href=https%3A%2F%2Fwww.facebook.com%2Fpixabay&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=false">
  <span style={{ verticalAlign: 'bottom', width: '150px', height: '28px' }}>
    <iframe
      name="f161d1d4defa36c"
      width="1000px"
      height="1000px"
      data-testid="fb:like Facebook Social Plugin"
      title="fb:like Facebook Social Plugin"
      frameBorder="0"
      allowFullScreen={true}
      scrolling="no"
      allow="encrypted-media"
      src="https://www.facebook.com/v2.5/plugins/like.php?app_id=114593902037957&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df39fd55ccbf6bbc%26domain%3Dpixabay.com%26origin%3Dhttps%253A%252F%252Fpixabay.com%252Ff6237efd3309bc%26relation%3Dparent.parent&amp;container_width=270&amp;href=https%3A%2F%2Fwww.facebook.com%2Fpixabay&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=false"
      style={{ border: 'none', visibility: 'visible', width: '150px', height: '28px', backgroundColor: 'transparent' }}
      className="">
    </iframe></span></div>

export default FBLike
