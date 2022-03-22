import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'


export const query = graphql`
{
  artwork: allContentfulArtwork {
    nodes {
      title
      year
      type
      slug
      image {
        url
        width
        height
      }
    }
  }
}
`



function MalereiPage({ data }) {
    const [horizontalImages, setHorizontalImages]=useState([]);
    const [verticalImages, setVerticalImages]=useState([]);

    useEffect(()=> {
        if(typeof window !== 'undefined'){
            data.artwork.nodes.map(artwork => {
                if(artwork.image.width > artwork.image.height){
                    setHorizontalImages(horizontalImages => [...horizontalImages, artwork]);
                    console.log("HORIZONTAL IMAGES: ", horizontalImages)
                } else{
                    setVerticalImages(verticalImages => [...verticalImages, artwork]);
                    console.log("VERTICAL IMAGES: ", verticalImages)
                }
            })
        }
    }, [data])

    return (
        <Layout>
            <h2>DAS ZEICHNERISCHE WERK</h2>
            <hr />
            <div className="d-flex justify-content-between werke-container flex-wrap">
                {horizontalImages.map(artwork => (
                    <div key={`artwork-${artwork.slug}`} className="mt-3 d-flex flex-column justify-content-between werk" style={{width: "23%"}}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <img style={{width: "100%"}} src={artwork.image.url}/>
                    </div>
                ))}
                {verticalImages.map(artwork => (
                    <div key={`artwork-${artwork.slug}`} className="mt-3 d-flex flex-column justify-content-between werk" style={{width: "23%"}}>
                        <div className="mb-3">
                            <h3>{artwork.title},{artwork.year}</h3>
                            <h4>{artwork.type}</h4>
                        </div>
                        <img style={{width: "100%"}} src={artwork.image.url}/>
                    </div>
                ))}
            </div>
        </Layout>
    )
}



export default MalereiPage
