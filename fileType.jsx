var myFile = File.openDialog("Please choose a file");

if(myFile)
{
	alert("Info for choosen file\rName: " + myFile.displayName + "\rCreator: " + myFile.creator + "\rType: " + myFile.type);
}