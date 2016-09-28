document.addEventListener('DOMContentLoaded', function() {
	// wlaczanie menu mobilnego
	console.log("dziala");
    mobileMenu();
	window.addEventListener('resize', function() {
		mobileMenu();

    });

	$menuButton=document.querySelector('.nav span');
	$menuElement=Array.from(document.querySelectorAll('.nav li'));

	$menuButton.addEventListener('click', function() {
        $menuElement.forEach(function($element) {
            $element.classList.toggle('show');
            console.log("dziala2");
        	})
		});
	});


	function mobileMenu() { 
		$menu=document.querySelector('.nav');
        
		if (window.matchMedia("(min-width: 700px").matches) {
			// wylaczanie menu mobilnego
            console.log("dziala3");
			if($menu.classList.contains('mobile')) {
			    $menu.classList.remove('mobile');
			    $menuElement =Array.from(document.querySelectorAll('.nav li'));
			    $menuElement.forEach(function($element) {
                    $element.classList.remove('show');
                     console.log("dziala3");
                })
			} 
		}else {
				//właczanie menu mobilnego
			$menu.classList.add('mobile');
		}

	}

	function mobileMenuShowPosition() {
		$menuElement=Array.from(document.querySelectorAll('.nav li'));
		$menuElement.forEach(function($element) {
            $element.classList.toggle('show');
        })
	}