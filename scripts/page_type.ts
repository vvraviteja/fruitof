/*
  Page Type

  This file defines what you will call the page throughout the project.
  This will allow you to define the analytics page_type custom variable as well
  as clarify what page you're trying to map to which tritium file.  Also, if
  there are no mappings for the page, it will be perfect proxied!

  Example starting code:
*/
log("")
log("")
log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
log("!! Detecting Page Type")
log("!! Path"+ $path)

match($path) {
  with(/^\/$|^\/\?/){
    $page_type = "Home"
  }
 
  with(/^\/b\//){
    $page_type = "Gender-ajax"     
  }
  with(/^\/(.*?Men)\//){
    $page_type = "Gender"     
  }
  with(/^\/(.*?Women)\//){
    $page_type = "Gender"     
  }
   with(/^\/(s.*?)\//){
    $page_type = "Gender"     
  }
   with(/^\/(.*?Fit-For-Me)|(.*?Boys)|(.*?Girls)\//){
    $page_type = "Gender"     
  }
  with(/^\/(.*?)\/dp\//){
    $page_type = "Details"     
  }
  
 
  else(){
    
    log('host : ' + $host)
    $page_type = "Gender"
  }
}

log("!! Page type is: " + $page_type)
log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
log("")
log("")
log("Content type is: " + $content_type)


