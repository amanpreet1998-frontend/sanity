// queries/pageWithSections.ts
import { groq } from 'next-sanity'

export const pageWithSectionsQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    title,
    slug,
    sections[] {
      _type,
      ...select(
        _type == "heroSection" => {
          heading,
          subheading,
          "backgroundImage": backgroundImage.asset->url
        },
        _type == "aboutSection" => {
          title,
          description,
          "teamImage": teamImage.asset->url
        }
      )
    }
  }
`

// // queries/pageWithSections.ts
// import { groq } from 'next-sanity'

// export const pageWithSectionsQuery = groq`
//   *[_type == "page" && slug.current == $slug][0] {
//     title,
//     slug,
//     sections[]{
//       _type == "heroSection" => {
//         _type,
//         heading,
//         subheading,
//         "backgroundImage": backgroundImage.asset->url
//       },
//       _type == "aboutSection" => {
//         _type,
//         title,
//         description,
//         "teamImage": teamImage.asset->url
//       }
//     }
//   }
// `
