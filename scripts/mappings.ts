/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {

  with(/302/) {
    log("--> STATUS: 302") # redirect: just let it go through
  }

  with(/200/) {
    log("--> STATUS: 200")

    match($page_type) {
      with(/Home/){
        log("--> Importing pages/home.ts in mappings.ts")
        @import "pages/home.ts"
      }
      with(/Gender$/){
        log("--> Importing pages/gender.ts in mappings.ts")
        @import "pages/gender.ts"
      } 
      
       with(/Details$/){
        log("--> Importing pages/Details.ts in mappings.ts")
        @import "pages/details.ts"
      }  
           
      
      else() {
        log("--> No page match in mappings.ts")
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import "pages/error.ts"
  }

}
