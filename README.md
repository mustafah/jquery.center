jquery.center
=============

A JQuery plugin help us to propotionally position a DOM element inside its parent or any other specified element.



* Simple example:


        $("#child").center()
or if it is not its direct parent:
        
        $("#child").center($("#parent"))



* More options:

    You can add extra options to do any desired positioning effect, it will just position the object to make the child element center (your customized center) exactly above the parent element center (your cusomized center).

    
      	$("#child").center
      		this:
      			h: 0.5              # Value of 0.5 points to the horizontal center of the child element
                                    # Value of 1 points to the extreme right of the object
                                    # The default is 0.5 if no value given
      			          
      			v: 0.5              # Value of 0.5 points to the vertical center of the child element
                                    # Value of 1 points to the extreme bottom of the child element
                                    # The default is 0.5 if no value given
      			          
      		inside:
      			el: $("#parent")    # The parent object that element will be centered inside
      			
      			h: 0.5              # Value of 0.5 points to the horizontal center of the child element
                                    # Value of 1 points to the extreme right of the object
                                    # The default is 0.5 if no value given
      			          
      			v: 0.5              # Value of 0.5 points to the vertical center of the child element
                                    # Value of 1 points to the extreme bottom of the child element
                                    # The default is 0.5 if no value given
      			                  
      		hOffset: -16            # Manual horizontal offset in pixels added every time after center process is done
      		                        # The default is 0
      		                        
      		vOffset: 0              # Manual vertical offset in pixels added
      		                        # The default is 0
