try
{
	if(app.activeDocument)
	{
		
		// alert(app.activeDocument.masterSpreads.length);

		var masterPage = app.activeDocument.masterSpreads.add();


		if(masterPage)
		{
			masterPage.namePrefix = "R";
			masterPage.baseName = "Jerkoff";
		}

		var doc = app.activeDocument;
		var myIndex = 3;
		var myPage1 = doc.pages[2];
		var myPage2 = doc.pages[4];


		doc.sections.add({"continueNumbering":false,"pageNumberStart":13, "length":2, "pageStart":myPage1});
		doc.sections.add({"continueNumbering":false,"pageNumberStart":27, "length":2, "pageStart":myPage2});

		savedSection = doc.pages[myIndex].appliedSection;
        alert("The section info\r"
            + "The page start:\t"   + savedSection.pageNumberStart + "\r"
            + "The sec name:\t"     + savedSection.name + "\r"
            + "Number of pages in sec:\t"  + savedSection.length + "\r"
            + "The page name:\t"    + doc.pages[myIndex].name + "\r"
            + "The number of sections:\t" + doc.sections.length);


		try
		{
			if(app.activeDocument.modified)
			{
				app.activeDocument.save();
				//alert("File was saved");
			}
		}
		catch(Error)
		{
			alert("Document could not be saved\r" + Error);
			saveError = true;
		}
	}
}
catch(Error)
{
	alert("Something is wrong in the InDesign universe!\r" + Error);
	saveError = true;
}