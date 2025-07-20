import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {heroSection} from './heroSection'
import {aboutSection} from './aboutSection'
import {page} from './page'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, heroSection, aboutSection,page],
}
