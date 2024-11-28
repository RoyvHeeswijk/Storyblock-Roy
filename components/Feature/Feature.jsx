import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return(
    <div className="blok.feature" {... storyblokEditable(blok) }>
{blok.name} 
 
    </div>
  )
}
export default Feature;