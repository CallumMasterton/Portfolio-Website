			
			new ghostCursor({ element: document.querySelector("#ghost") })
			
			var time, h, m, s, track;
            track = 0;
            window.onload = function() { setInterval(timeNow,100); }

            function timeNow() {

              time = new Date();
              track += 1;
              h = time.getHours();
              m = time.getMinutes();
              s = time.getSeconds();
			  if ( h < 10 ) { h = "0" + h; }
			  if ( m < 10 ) { m = "0" + m; }
              if ( s < 10 ) { s = "0" + s; } /* we add a 0 in front of s, when it is lower than 10, because that's what most clocks display, this is for the human user rather than for any need by the computer */
              document.getElementById("time").innerHTML = h + ':' + m + ':' + s;
            }
			
			
			var firstPass = true;
			
			var activeF = false;
			var activeE = false;
			var activeU = false;
			
			
			function hideBoxElementFiles() {/* This hides the box of files*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");
				var ebBox = document.getElementById("boxhidereeb");	
				var lazerBox = document.getElementById("boxhiderelazer");
				var arunnerBox = document.getElementById("boxhiderearunner");
				var daveBox = document.getElementById("boxhideredave");
			
				if (firstPass == true)
				{
					filesBox.style.display = "block";
					emailBox.style.display = "none";
					userBox.style.display = "none";
					ebBox.style.display = "none";
					lazerBox.style.display = "none";
					arunnerBox.style.display = "none";
					daveBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (filesBox.style.display === "none") {
						filesBox.style.display = "block";
						emailBox.style.display = "none";
						userBox.style.display = "none";
						ebBox.style.display = "none";
						lazerBox.style.display = "none";
						arunnerBox.style.display = "none";
						daveBox.style.display = "none";
					} else {
						filesBox.style.display = "none";
					}
				}

			}
						
			function hideBoxElementEmail() {/* This hides the box of Email*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");
				var ebBox = document.getElementById("boxhidereeb");		
				var lazerBox = document.getElementById("boxhiderelazer");
				var arunnerBox = document.getElementById("boxhiderearunner");
				var daveBox = document.getElementById("boxhideredave");
			
				if (firstPass == true)
				{
					emailBox.style.display = "block";
					filesBox.style.display = "none";
					userBox.style.display = "none";
					ebBox.style.display = "none";
					lazerBox.style.display = "none";
					arunnerBox.style.display = "none";
					daveBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (emailBox.style.display === "none") {
						emailBox.style.display = "block";
						filesBox.style.display = "none";
						userBox.style.display = "none";
						ebBox.style.display = "none";
						lazerBox.style.display = "none";
						arunnerBox.style.display = "none";
						daveBox.style.display = "none";
						
					} else {
						emailBox.style.display = "none";
					}
				}

			}
			
			function hideBoxElementUser() {/* This hides the box of User*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");	
				var ebBox = document.getElementById("boxhidereeb");	
				var lazerBox = document.getElementById("boxhiderelazer");
				var arunnerBox = document.getElementById("boxhiderearunner");
				var daveBox = document.getElementById("boxhideredave");
			
				if (firstPass == true)
				{
					userBox.style.display = "block";
					filesBox.style.display = "none";
					emailBox.style.display = "none";
					ebBox.style.display = "none";
					lazerBox.style.display = "none";
					arunnerBox.style.display = "none";
					daveBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (userBox.style.display === "none") {
						userBox.style.display = "block";
						filesBox.style.display = "none";
						emailBox.style.display = "none";
						ebBox.style.display = "none";
						lazerBox.style.display = "none";
						arunnerBox.style.display = "none";
						daveBox.style.display = "none";
					} else {
						userBox.style.display = "none";
					}
				}

			}

			function hideBoxElementEB() {/* This hides the box of Eye*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");
				var ebBox = document.getElementById("boxhidereeb");	
			
				if (firstPass == true)
				{
					ebBox.style.display = "block";
					userBox.style.display = "none";
					filesBox.style.display = "none";
					emailBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (ebBox.style.display === "none") {
						ebBox.style.display = "block";
						userBox.style.display = "none";
						filesBox.style.display = "none";
						emailBox.style.display = "none";
					} else {
						ebBox.style.display = "none";
					}
				}

			}
			
			function hideBoxElementLazer() {/* This hides the box of Lazer*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");
				var lazerBox = document.getElementById("boxhiderelazer");				
			
				if (firstPass == true)
				{
					lazerBox.style.display = "block";
					userBox.style.display = "none";
					filesBox.style.display = "none";
					emailBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (lazerBox.style.display === "none") {
						lazerBox.style.display = "block";
						userBox.style.display = "none";
						filesBox.style.display = "none";
						emailBox.style.display = "none";
					} else {
						lazerBox.style.display = "none";
					}
				}

			}
			
			function hideBoxElementARunner() {/* This hides the box of Runner*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");
				var arunnerBox = document.getElementById("boxhiderearunner");
				
			
				if (firstPass == true)
				{
					arunnerBox.style.display = "block";
					userBox.style.display = "none";
					filesBox.style.display = "none";
					emailBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (arunnerBox.style.display === "none") {
						arunnerBox.style.display = "block";
						userBox.style.display = "none";
						filesBox.style.display = "none";
						emailBox.style.display = "none";
					} else {
						arunnerBox.style.display = "none";
					}
				}

			}

			function hideBoxElementDaveShift() {/* This hides the box of Dave*/
			
				var filesBox = document.getElementById("boxhiderfiles");
				var emailBox = document.getElementById("boxhideremail");
				var userBox = document.getElementById("boxhidereuser");
				var daveBox = document.getElementById("boxhideredave");
				
			
				if (firstPass == true)
				{
					daveBox.style.display = "block";
					userBox.style.display = "none";
					filesBox.style.display = "none";
					emailBox.style.display = "none";
					firstPass = false;
				}
				else 
				{
					if (daveBox.style.display === "none") {
						daveBox.style.display = "block";
						userBox.style.display = "none";
						filesBox.style.display = "none";
						emailBox.style.display = "none";
					} else {
						daveBox.style.display = "none";
					}
				}

			}

