import React from "react"
import Layout from "../components/layout"
import { Wrapper } from "../components/parts"
import Image from "../components/imageArticle"
import Gist from "super-react-gist"

const data = {
  title: "Simplest Way to Achieve Blurry Loading Images on your React App without any Libraries",
  tags: ["react","react hooks","image","loading","UX"],
  date: "5/15/2020"
}

const SecondPage = () => {

  return(
    <Layout>
      <Wrapper data ={data} >
        <Image num={5} />
        <br/>
        When providing high quality images to users especially the ones with slower internet,
        it's important to tell them that images are being loaded. So I'm gonna share how to display blurry images while loading the actual images 
        on React app withou any plugins / libraries just like I did in <a href="https://nao-mori.com" target="blank">my portfolio</a>.
       
        <h2>Setup</h2>
        You have to make a small version of your images (about 50px) and encode
        them <a href="https://www.base64-image.de/" target="blank">here</a> (you can put the entire folder and decode them all together).
        After it's encoded, click on "copy image".
        <br/>
        This step is annoying but everything else is very simple.<br/>
        <h2>Import</h2>

        <Gist url='https://gist.github.com/Nao-Mori/05ddfec1785009a95e1ec11c092f7605' file ='Component.js' />
        I like to keep the attributes consistent so that you can treat the component the same way
        you would treat an "img" tag. Additionally, you have to define "src64" which the code you copied earlier should go.
        <h2>Provide the blurry image</h2>
        Now let's actually get into blurry loading images.
        <div style={{ height:"10px" }} />
        <Gist url='https://gist.github.com/Nao-Mori/05ddfec1785009a95e1ec11c092f7605' file ='BlurImage.js' />

        Reason I'm not doing "{"{...props}"}" is that "src" attribute changes.<br/>
       
        The original image will only load when the state "loaded" is true. While it's false it displays the Base64 image.
        When this FC(functional component) is called, useEffect calls "loadImage" function which I will go over next. As soon as "loadImage" is over, "loaded" becomes true.

        <h2>Wait for the image to Load</h2>
        Finally, the "loadImage" function.
        <div style={{ height:"10px" }} />
        <Gist url='https://gist.github.com/Nao-Mori/05ddfec1785009a95e1ec11c092f7605' file ='loadImage.js' />
        Basically what it does is when the specified image finishes loading it tells your FC about it.
        <h2>Dynamic Image Loading</h2>
        Above was everything you need to know. However, let's make it to the next level.<br/>
        You might want to re-use the same "img" tag to display different images or load the image in the specific timing (ie. slidshow, scrolling)
        just like shown below.
        <div style={{ height:"10px" }} />
        <Gist url='https://gist.github.com/Nao-Mori/05ddfec1785009a95e1ec11c092f7605' file ='Component2.js' />
        This is when "useEffect" comes in very handy.
        <div style={{ height:"10px" }} />
        <Gist url='https://gist.github.com/Nao-Mori/05ddfec1785009a95e1ec11c092f7605' file ='useEffect.js' />
        This way, everytime "src" changes it's gonna repeat the same method and it's only when "load" is true.
        <h2>Should you do this?</h2>
        This method is definitely a good option when you want to have control over the image loading method and how the loading images to look like
        (you can even switch to completely something else).
        <br/><br/>
        However, encoding images can be very time consuming and is one of the reasons that you should consider using frameworks and
        plugins. <a href="https://www.gatsbyjs.org/" target="blank">Gatsby</a> is one of the great options. In fact, I use it for this blog lol
        <br/><br/>
        In addition to that, you don't have that beautiful smooth transition with this method and sometimes it's flickery when switching to the 
        actual image. <a href="https://www.react-spring.io/" target="blank">React-spring</a> can probably help you with that. 
        
      </Wrapper>
    </Layout>
  )
}

export default SecondPage
