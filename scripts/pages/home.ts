$('./body'){
	add_class('mw-home ')
	$('./div[@id="wrapper"]/div[@id="innerWrapper"]'){
		
		$('./div[@id="mainContentWrapper"]'){
			
			$('./div[@id="topSlots"]'){
				add_class('mw-slotSection')
				$('./div/div/div/ul/li'){
					add_class_to('./img','mw-img-slot')
					add_class_to('./a[@class="button white"]','mw-hide')
					add_class_to('../div[@id="videoPopMen"]','mw-hide')
					add_class_to('../div[@id="videoPopWomen"]','mw-hide')
				}
				add_class_to('./div/div/div/ul/li/a/img','mw-img-slot')
				add_class_to('./div[@id="top-5"]','mw-top')

				$('//div[@id="module1"]/a/img'){
					add_class('sprites-Layer-6')
					attributes(src:'')
				}

				$('./div[@id="top-6"]/div/div/div[@id="module2"]'){
					insert('span',class:'sprites-Stiched-pattern-copy',style:'display:block;margin:15px 0px')
				}
			}
			$('./div[@id="bottomSlots"]'){
				@import bottom.ts;
			}
		}
		
	}
}
