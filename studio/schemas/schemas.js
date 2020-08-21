// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import blockText from './blockText'
import category from './category'
import companyInfo from './companyInfo'
import figure from './figure'
import mainImage from './mainImage'
import page from './page'
import post from './post'
import siteSettings from './siteSettings'
import slideshow from './slideshow'
import galleryMedia from './gallery-media'
import seo from './seo'
import video from './video'
import course from './course'
import courses from './courses'
import grid from './grid'
import contentBlock from './contentBlock'
import location from './location'
import venue from './venue'
import concat from './contact'
import home from './home'
import section from './section'
import card from './card'
import team from './team'
import teamsPage from './teamsPage'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    blockText,
    category,
    companyInfo,
    figure,
    mainImage,
    page,
    post,
    siteSettings,
    slideshow,
    galleryMedia,
    video,
    seo,
    course,
    courses,
    contentBlock,
    grid,
    location,
    venue,
    concat,
    home,
    section,
    card,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})