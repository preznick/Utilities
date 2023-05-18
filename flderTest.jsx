// Add common JS files
#include "/Volumes/Volume_06/Book Building Data/JS_Files/Common/commonConsts.jsx";
#include "/Volumes/Volume_06/Book Building Data/JS_Files/Common/adIDConsts.jsx";
#include "/Volumes/Volume_06/Book Building Data/JS_Files/Common/regExConsts.jsx";

#include "/Volumes/Volume_06/Book Building Data/JS_Files/Common/jsUtilities.jsx";

var   rptFile   = new File("~/Desktop/reportFile.txt");

var btchFlder 	= createFolderFromPath("~/Desktop/KissMyButt/");
var  srcFlder 	= createFolderFromPath("~/Desktop/DaSOurceFldr/");


rptFile.open('w');

if(btchFlder.exists)
{
	alert("Yup, it's there!");
}

moveFolderAndDelete(srcFlder,btchFlder,rptFile);

rptFile.close();
rptFile.execute();

function moveFolderAndDelete(theOrgFolder, bckUpFldr, reportFile)
{
    var   orgFolderName = decodeURI( theOrgFolder.fsName );
    var  mvToFolderName = decodeURI(    bckUpFldr.fsName );

    var mvFlderString = "";

    alert("These folders should be there\r" + "\"/Volumes/Macintosh HD" + orgFolderName + "\rAnd\r" + "\"/Volumes/Macintosh HD" + mvToFolderName);

    mvFlderString += "tell application \"Finder\"";
    mvFlderString +=    "\ractivate\r";

    mvFlderString +=    "set orgFlder to POSIX file \"/Volumes/Macintosh HD" +   orgFolderName + "/\"\r";
    mvFlderString +=    "set dstFlder to POSIX file \"/Volumes/Macintosh HD" +  mvToFolderName + "/\"\r";

    mvFlderString +=    "move orgFlder to dstFlder with replacing\r";
    // mvFlderString +=    "delete orgFlder\r";
    mvFlderString += "end tell";

    reportFile.write( "Calling Applescript to move folder\r\t" + "/Volumes/Macintosh HD" + orgFolderName + "\r" + "to\r\t" 
    	            + "/Volumes/Macintosh HD" + mvToFolderName + "\r\r" );

    reportFile.write( mvFlderString );

    app.doScript(mvFlderString, ScriptLanguage.APPLESCRIPT_LANGUAGE);
}