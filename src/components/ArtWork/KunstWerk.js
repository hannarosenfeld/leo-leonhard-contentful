import React from 'react'
import { Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { BgImage } from 'gbimage-bridge'

export default function Kunstwerk({ kunstwerk }) {
    return (
        <div>
            <br />
            <div className="d-flex flex-wrap">
                {kunstwerk.map((werk) => {
                    const image = getImage(werk.image)
                    return (
                        <div
                            key={werk.slug}
                            className="d-flex flex-column mb-5"
                            style={{
                                width: '15em',
                                marginRight: '5%',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Link
                                to={werk.slug}
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%'
                                }}
                            >
                                <BgImage
                                    image={image}
                                    style={{
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        height: '15em'
                                    }}
                                />
                                <h4
                                    style={{
                                        minHeight: '2em',
                                        marginTop: '1em'
                                    }}
                                >
                                    {werk.title}, {werk.year}
                                </h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
