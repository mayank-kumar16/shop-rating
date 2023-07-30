const rateContainer = document.querySelector(".rating-container")
		const resultContainer = document.querySelector(".result-container")

		const submitBtn = document.getElementById("submit_rating");
		const backBtn = document.getElementById("back_rating");

		const ratevalues = document.querySelectorAll("ul li .btn");
		const rateResult = document.getElementById("rate-value");

		const iconHolder = document.querySelector("#icon-face .fa-solid")
		const finalSmiley = document.querySelector("#final-smily .fa-solid")


		let smileyClass;


		ratevalues[ratevalues.length - 1].focus();

		ratevalues.forEach((ratevalue)=>{
		    ratevalue.addEventListener("click", ()=>{
		       rateResult.innerHTML = ratevalue.innerHTML;
		       //changing smiley icon
		       if(+ratevalue.innerHTML === 1){
		            iconHolder.className = '';
		            iconHolder.classList.add("fa-solid", "fa-face-sad-tear");
		            smileyClass = iconHolder.className;
		        }else if(+ratevalue.innerHTML === 2){
		            iconHolder.className = '';
		            iconHolder.classList.add("fa-solid", "fa-face-frown");
		            smileyClass = iconHolder.className;
		        }else if(+ratevalue.innerHTML === 3){
		            iconHolder.className = '';
		            iconHolder.classList.add("fa-solid", "fa-face-meh");
		            smileyClass = iconHolder.className;
		        }else if(+ratevalue.innerHTML === 4){
		            iconHolder.className = '';
		            iconHolder.classList.add("fa-solid", "fa-face-smile-beam");
		            smileyClass = iconHolder.className;
		        }
		        else{
		            iconHolder.className = '';
		            iconHolder.classList.add("fa-solid", "fa-face-grin-hearts");
		            smileyClass = iconHolder.className;
		        }
		   });
		});



		submitBtn.addEventListener("click", ()=>{
		    resultContainer.classList.remove("hidden");
		    setTimeout(function () {
		        resultContainer.classList.remove('visuallyhidden');
		        rateContainer.classList.add('visuallyhidden');
		    }, 50);
		    rateContainer.style.display = "none";
		    // finalSmiley.classList.add(smileyClass);
		    finalSmiley.className = smileyClass;
		});

		backBtn.addEventListener("click", ()=>{
		    resultContainer.classList.add("hidden");
		    setTimeout(function () {
		        rateContainer.classList.remove('visuallyhidden');
		        resultContainer.classList.add('visuallyhidden');
		    }, 50);
		    rateContainer.style.display = "flex";
		});