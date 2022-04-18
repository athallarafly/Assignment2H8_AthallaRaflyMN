 function show_hide() {
            var x = document.getElementById("form");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }

        function changeText() {
            document.getElementById("nameGanti").textContent = document.getElementById("name").value
            document.getElementById("roleGanti").textContent = document.getElementById("role").value;
            document.getElementById("avaGanti").textContent = document.getElementById("Avaibility").value;
            document.getElementById("ageGanti").textContent = document.getElementById("age").value;
            document.getElementById("lokGanti").textContent = document.getElementById("lokasi").value;
            document.getElementById("pengGanti").textContent = document.getElementById("years").value;
            document.getElementById("emailGanti").textContent = document.getElementById("email").value;
        }