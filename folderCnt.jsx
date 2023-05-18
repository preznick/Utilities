
myFolder = Folder.selectDialog();

if(myFolder.exists)
{
	var innerItems = myFolder.getFiles();

	alert("The are " + innerItems.length + " items within " + decodeURI(myFolder.name) );
}