$('./body') {
	insert_top("header", class: "mw-header header-border") {

		
		move_here('../div[@id="wrapper"]/div[@id="innerWrapper"]/div[@id="headerSlots"]/div[@id="header-5"]/div/div/a'){
			text(){
				set(' ')
			}
			add_class('sprites-Logo-copy-2')
			add_class_to('./img','mw-hide')		
			wrap('div')
		}
		insert("div", class: "mw-nav-item-menu mw-header-menu"){
               insert("span", class: "sprites-Rounded-Rectangle-1-copy-2")    
            }
            
            insert("div", class: "mw-nav-item-cart mw-header-cart"){
                insert("span", class: "sprites-Cart") 


            }
            insert("div", class: "mw-nav-item mw-header-user"){
                insert("span", class: "sprites-User")      
            }
            insert("div", class: "mw-nav-item mw-header-search"){
                insert("span", class: "sprites-Search")    
            }
             

	}

	$('./div[@id="wrapper"]/div[@id="innerWrapper"]'){
		add_class('clear');
		$('./div[@id="headerSlots"]'){
			
			$('./div[@id="header-2"]/div/div/ul/li'){
				match(index()){
					with(4){
						add_class('mw-hide')
					}
					with(5){
						add_class('mw-hide')
					}
					else(){
						add_class('mw-hide')
					}
				}
			}
			$('./div[@id="header-1"]/div'){
				$('./div[@class="search"]'){
					attributes(data-ur-set: "toggler")
					$("./a"){
						attributes(data-ur-toggler-component: "button", data-ur-state: "disabled")
						text(){
							set('')
						}
					}
					$('./form'){
						attributes(data-ur-toggler-component: "content", data-ur-state: "disabled",class:'mw-search-wrapper')	
					}
				}
			}
			$('./div[@id="header-5"]/div/div'){
				
				$('./div'){
					attributes(data-ur-toggler-component: "content", data-ur-state: "disabled",class:'mw-menu-wrapper')
					
					$('./ul'){
						
						$('./li'){
							
							$valueforTogle;
						
							$('./a'){
								$valueforTogle=fetch('text()')
								add_class('mw-hide')
							}
							insert_at('top','p',$valueforTogle){
								attributes(data-ur-toggler-component: "button", data-ur-state: "disabled",class:'mw-bar1')
							}	
							$('./a|div'){
								attributes(data-ur-toggler-component: "content", data-ur-state: "disabled")
							}
							$('./div'){
								add_class_to('./div','mw-hide')
								add_class_to('./ul/li/a','mw-bar2')
							}
							
							wrap('div'){
								attributes(data-ur-set:'toggler')
							}
							

						}
					}
				}
			}
			add_class_to('./div[@id="header-7"]','mw-hide')
			
		}
		
	}

}
