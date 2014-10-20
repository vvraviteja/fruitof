$('./body'){
	add_class('mw-details')
	$('./div[@id="wrapper"]/div[@id="innerWrapper"]'){
		$('./div[@id="mainContentWrapper"]'){
			add_class_to('./div[@id="top-4"]','mw-green-header')
			add_class_to('./div[@id="top-5"]','mw-hide')
			@import bottom.ts;
			$('./div[@id="top-4"]/div/a'){
				insert('span',class:'sprites-icon-left',style:'display: block;float: left;margin-right: 10px;margin-top: -2px;')
			}
			$('./div[@id="columns"]/div[@id="center-right-wrapper"]'){
				$('./div[@id="centerColumn"]'){
					$('./div[@id="center-1"]/div'){
						$('./div[@id="alternateImagesBody"]/div/ul'){ 
							remove_attributes()
						}
					}
					$('./div[@id="center-6"]/div'){
						$('./div/div'){ 
							add_class('mw-margin')
							add_class_to('./h3','mw-hide')
							add_class_to('./div/h3','mw-hide')
							add_class_to('./div','mw-margin')
							add_class_to('./ul','mw-margin')
						}
					}
					$('./div[@id="center-7"]/div'){
						$('./div[contains(@class,"productInformation")]/div'){ 
							add_class('mw-margin')
							add_class_to('./h3','mw-hide')
							add_class_to('./div','mw-margin')
							add_class_to('./ul','mw-margin')
						}
					}
				}
				$('./div[@id="rightColumn"]'){
					$('./div[@id="right-4"]'){
						add_class_to('./div/div/dl/dt[1]','mw-hide')
						add_class_to('./div/div/dl/dd[1]','mw-greenfont')
						add_class_to('./div/div/p','itemNo')
						add_class('mw-margin')
					}
					add_class_to('./div[@id="right-5"]','mw-margin')
					add_class_to('./div[@id="right-5"]/div/div[@class="reviewSummary"]','mw-hide')
					add_class_to('./div[@id="right-5"]/div/div[@id="reviewsSnapshotPopoverTemplate"]','mw-hide')
					
					add_class_to('./div[@id="right-3"]','mw-margin')
					add_class_to('./div[@id="right-10"]','mw-margin'){
						$('./div/div/form/fieldset'){
							add_class('mw-field-border')
							add_class_to('./legend','mw-hide')
							add_class_to('./ol','mw-ol'){
							
							}
						}
					}
					$('./div[@id="right-11"]'){
						log('inside i frame')
						add_class_to('./div/iframe','dfgddf'){                         
							log('inside i frame')

                            attribute('height'){ 
                                value('60px')                                      
                            } 
                            attribute('width'){                        
                                value('100%') 
                            } 
                            attribute('src'){                    
                                value(){ 
                                   
                                    rewrite_link()                            
                                } 
                            } 

                        }

					}
					 

					
				}

				move('./div[@id="rightColumn"]','./div[@id="centerColumn"]/div[@id="center-4"]','after')
				$('./div[@id="centerColumn"]/div[@id="rightColumn"]'){
					
					$('./div[@id="right-3"]'){
						move_to('../..','top')
						log("inside right...")
					}
					$('./div[@id="right-1"]'){
						move_to('../..','top')
						log("inside right...")
					}
				}
			}
		}
	}
		
		

}