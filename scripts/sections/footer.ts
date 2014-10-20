$("./body") {
    $('./div[@id="wrapper"]/div[@id="innerWrapper"]'){
    	$('./div[@id="footer"]'){
    		add_class('mw-footer')
    		$('./div'){
    			match(index()){
					with(8){
						add_class('mw-footer8')
						$('./div/div/span'){
							move_to('../ul','after'){
								$('./li[1]'){
									insert('span','.'){
										attributes(style:'color: #BBBBBB;')
									}
								}
							}
						}
						insert("span", "Powered by Moovweb", class: "mw-footer")
					}
					with(5){
						$('./div/div/ul/li'){
							attributes(data-ur-set: "toggler")
							$('./span'){
								attributes(data-ur-toggler-component: "button", data-ur-state: "disabled",class:'mw-bar1')
								
							}
							$('./ul/li'){
									attributes(data-ur-toggler-component: "content", data-ur-state: "disabled")
									$('./a'){
										add_class('mw-bar2')
									}
								}
							
						}
					}
					else(){
						add_class('mw-hide')
					}
				}
    		}
			
		}
    }
}
