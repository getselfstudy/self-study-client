import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const BannerImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "banner3.png" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
export default BannerImage;

// const BannerImage = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "banner.PNG" }) {
//           childImageSharp {
//             # Specify the image processing specifications right in the query.
//             # Makes it trivial to update as your page's design changes.
//             fixed(width: 2000, height: 600) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
//   />
// );
// export default BannerImage;
