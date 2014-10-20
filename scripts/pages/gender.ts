$('./body'){
	add_class('mw-gender ')
	$('./div[@id="wrapper"]/div[@id="innerWrapper"]'){
		
		$('./div[@id="mainContentWrapper"]'){
			$count='0'
			add_class_to('./div[@id="topSlots"]','mw-hide')
			$('./div[@id="columns"]'){
				$('./div[@id="leftColumn"]/div[@id="A"]/div[@id="A-1"]/div/ul/li'){
					attributes(data-ur-set:'toggler')
					$x=""
					$y=""
					$('./ul'){
						attributes(data-ur-toggler-component:'content')
					}
					$('./ul/li'){
						$('./span'){
							$x=fetch('text()')
							add_class('mw-bar3')
							$count='1'
						}
						
						add_class_to('./a','mw-bar3')
						add_class_to('./ul','mw-list')
						$('./ul/li'){
							add_class_to('./a','mw-bar4')
							add_class_to('./span','mw-bar4')
							$('./ul'){
								
								$('./li'){
									add_class('mw-bar5')
								}
							}
						}
						
					}
					$('./ul/li/ul/li/span'){
						
						$x=fetch('text()')
						log('i am x')
						$count='2'
						
						$('../../../a'){
						$y=fetch('text()')
						log($y)
						log('i am y')

						}
					}
						$('./a'){
							wrap('div',class:'mw-green-header')
						}
						insert_at('top',"span",class:'mw-menu', data-ur-toggler-component:'button',style:'display: inline-block;float: right;margin-top:-20px'){
							insert('span',class: "sprites-icon_dwn_arr_f",style:'display: inline-block;')
							move_to('../div'){
								insert('span',class:'sprites-icon_arr-r',style:'display: inline-block;margin:0px 5px;')
							}
						} 
						insert_at('top','span',$y){
							match($count){
								with('2'){
									insert('span',class:'sprites-icon_arr-r',style:'display: inline-block;margin:0px 5px;')
								}
							}
							
							move_to('../div')
						}
						insert_at('top','span',$x){
							move_to('../div')
						}
					
				}
				$('./div[@id="centerColumn"]/div[@id="I"]'){
					$("./div[@id='I-1']/div/div[@id='searchResultsOuterContainer']/form/div/ol"){
						add_class('mw-pad')
						$('./li'){
							add_class('mw-product')
							add_class_to('./span/ul','mw-hide')
							add_class_to('./div/dl[@class="attributeList"]','mw-hide')
							$('./div/dl/dt'){
								add_class('mw-hide')
							}
							
						}
					}

					$("./div[@id='I-2']/div/div"){
						insert_at('top','span',class:'sprites-Stiched-pattern-copy',style:'display:block;margin:15px 0px')
						$('./ul'){
							add_class('mw-pagination')
							$('./li[last()]'){
								add_class('mw-float-right')
							}
						}
					}
				}
				$('./div[@id="centerColumn"]/div[@id="E"]/div[@id="E-1"]/div/div/ul'){
					add_class('mw-pad')
					$('./li'){
						attributes(style:'')
					}
				}
					
			}
			$('./div[@id="bottomSlots"]/div[@id="bottom-5"]'){
				insert_at('top','span',class:'sprites-Stiched-pattern-copy',style:'display:block;margin:15px 0px')
				$('./div/div'){
					insert('span',class:'mw-divider')
				}
				
				$('./div/div/div[@id="footerModule1"]/a/span'){
					add_class('mw-hide')
				}
					
			}
		}
	}
}