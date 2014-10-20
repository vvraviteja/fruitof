# HTML Transformations go here

$("/html") {
   add_canonical_tag()
  rewrite_links()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()
  add_assets()

 @import "mappings.ts"
 match_not($page_type,'Widget_HiveIt'){
  @import "sections/header.ts"
  @import "sections/footer.ts"
 }
  

 

}
