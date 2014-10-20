@func XMLNode.add_class_to(Text %xpath, Text %class) {
  $(%xpath) {
    add_class(%class)
    yield()
  }
}
@func XMLNode.hide(Text %xpath){
	
	$(%xpath){
		add_class("mw-hide")
		yield()
	}
}
@func XMLNode.set_carousel_attr(Text %scroll_container_xpath, Text %fill,Text %carousel_xpath, Text %show_buttons){
    $(%scroll_container_xpath){
        attribute('data-ur-carousel-component','scroll_container')
        $('./li'){
          attribute('data-ur-carousel-component','item')        
        }
        $(%carousel_xpath){
            attributes(data-ur-set: 'carousel', data-ur-fill: %fill)
            match(%show_buttons, 'true'){
                insert_top("div",data-ur-carousel-component: "button", data-ur-carousel-button-type: "next"){
                    insert("div", class: "sprites-right")
                }
                insert_top("div",data-ur-carousel-component: "button", data-ur-carousel-button-type: "prev"){
                    insert("div", class: "sprites-left")
                }
            }            
            yield()
            wrap('div',class: 'carousel-container')
        }
    }
    
}
@func XMLNode.set_sh_carousel(Text %scroll_container_xpath, Text %wrap_div,Text %carousel_xpath){
  $(%scroll_container_xpath){
    $noIfLi = 0
    $('./li'){
        $noIfLi = index()
        $('./a/img | ./img'){
          attribute('style'){
            remove()
          }           
        }
        hide('./p')
    }
    $main_carousel = %carousel_xpath
    match($noIfLi){
        with(/^([4-9]|\d{2,})$/){
            match(%wrap_div,'true' ){
              wrap('div')
              $main_carousel = '..'
            }     
            set_carousel_attr('.', 3, $main_carousel, 'true')
        }
        else(){
            add_class_to('./li', 'no-carousel-item')
            wrap('div',class: 'carousel-container')
        }
    }
	
  }
}
@func XMLNode.remove_nbsp() {
  text(){
    trim()
    replace(/\xC2\xA0/,"")
  }
}
@func XMLNode.replace_attr(Text %attr, Text %replace_val, Text %newval){
    $new_val  = fetch('./@'+ %attr){
      replace(%replace_val, %newval)
    }
    remove('./@'+%attr)
    attribute(%attr) {
     value() {
      set($new_val)
      }
    }
}
@func XMLNode.remove_self_if_empty() {
    $("./self::*[not(*)]") {
        match(fetch("./text()"), /\A[\s ]*\Z/) {
            remove()   
        }
    }
}

@func XMLNode.wrap_nonempty_text(Text %tag_name) {
    %result = wrap_text_children(%tag_name) {
        remove_nbsp()
        remove_self_if_empty()
        yield()
    }
    %result
}
@func XMLNode.remove_p_with_nbsp() {
  match(fetch("./text()"), /\xC2\xA0/) {
    remove()   
  }
}
