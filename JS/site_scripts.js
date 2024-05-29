
     var partners = []; // Declare an empty array to store image elements
     var partnerFileNames = []; // Declare an empty array to store image file names
     var partnerImageList = []; // Declare an empty array to store HTML list that contains an image
     var partnerImage; // Declare an empty variable to store the assembled image list codes
     var openPartnerList = "<li class='partner'>"; // Declare a variable to contain the open list tag
     var closePartnerList = "</li>"; // Declare a variable to contain the close list tag
     
     // Array of partner image file names (without extension)
     var partnerNames = [
         "partner-bustour",
         "partner-cabinrental",
         "partner-campingadv",
         "partner-collegetours",
         "partner-rentalbike",
         "partner-tourgroup"
     ];
     
     // Create a loop to create 6 partner images starting with index of 0
     for (var i = 0; i < partnerNames.length; i++) {
         partnerFileNames.push(partnerNames[i]); // Store image file name in the array
         partners.push("<img src='images/partners/" + partnerFileNames[i] + ".png' alt='" + partnerFileNames[i].replace("partner-", "").replace(/-/g, " ") + "'>"); // Assemble file name into image element and store in an array
         partnerImage = openPartnerList + partners[i] + closePartnerList; // Assemble image element from array with list elements and store in a variable
         partnerImageList.push(partnerImage); // Store (push) the assembled list codes into an array
     }
     
     // Display all six image codes stored in the array
     document.getElementById("partner").innerHTML = partnerImageList.join('');

   