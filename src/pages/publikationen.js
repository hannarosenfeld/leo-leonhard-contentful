import React, { useEffect, useState } from 'react'
import {graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {Card} from "react-bootstrap"

import Layout from '../components/Layout'
import PageBanner from '../components/PageBanner'
import Verzeichniss from '../components/Verzeichniss'
import IntroText from '../components/IntroText'

import '../styles/book.css'



const PublikationenPage = ( { data } ) => {
    const books = data.allContentfulBook.nodes
    return(
        <Layout>
          <div className="d-flex flex-column">
            <PageBanner image={data.allContentfulPageBanner.nodes}/>
            <IntroText introdata={data.allContentfulIntroText.nodes}/>
          </div>

          <div>
            <hr/>
            <h1 className="m-2" >Bücher</h1>
            <div
              className="d-flex align-items-baseline flex-wrap"
              style={{minWidth: "100%", gap: "5%"}}>
              {books.map(book => {
                  const image = getImage(book.coverImage)
                  return(
                      <div className="d-flex flex-column" style={{width: "13em", margin: "1em auto"}}>
                        <div className="d-flex flex-column">
                          <GatsbyImage style={{maxWidth: "100%"}} image={image}/>
                          <div className="mt-2 d-flex flex-column" style={{maxWidth: "100%"}}>
                            <p className="fett" style={{margin: "0.1em 0", fontSize: "0.8em"}}>{book.year}</p>
                            <p className="fett" style={{margin: "0.3em 0", color: "#5291A3",fontSize: "0.8em"}}>{book.title}</p>
                            <p style={{margin: "0.2em 0", fontSize: "0.8em"}}>{book.subtitle}</p>
                        </div>
                      </div>
                      </div>
                  )
              })}
            </div>
          </div>
          <br/>
          <br/>
          <div>
            <hr/>
            <h1 style={{color: "rgb(60, 159, 187)"}}  className="">Verzeichnis der Bücher, Kataloge und Zeitschriften mit Abbildungen der Arbeiten Leo Leonhards</h1>
            <br/>
            <Verzeichniss/>
          </div>
        </Layout>
    )
}


export const query = graphql`
query getPublikationenContent {
  allContentfulPageBanner(filter: {slug: {eq: "publikationen"}}) {
    nodes {
      slug
      image {
        id
        gatsbyImageData(width: 1200, placeholder: BLURRED)
      }
    }
  }
  allContentfulBook(sort: {fields: year, order: ASC}) {
    nodes {
      year
      title
      subtitle
      slug
      coverImage {
        url
        title
        gatsbyImageData(
          width: 230,
          placeholder: DOMINANT_COLOR,
          layout: CONSTRAINED
        )
      }
    }
  }
          allContentfulIntroText(filter: {slug: {eq: "publikationen"}}) {
            nodes {
              id
              slug
              header
              page
              text {
                childMdx {
                  body
                }
             }
          }
        }
}
`




export default PublikationenPage
