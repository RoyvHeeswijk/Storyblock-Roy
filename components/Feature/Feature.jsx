import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return(
    <div className="feature-blok" {... storyblokEditable(blok) }>
{blok.name} 
 
    </div>
  )
}
export default Feature;