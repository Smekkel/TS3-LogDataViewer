/* Todo:

general
	- find and sort out old IDs for the same person or merge them, or:
	- Add missing descriptions (found by searching for the [Description pending] tag).
	- Limit to singleinstance.
	- Add try catch handler.
	- Add option to totally rewrite the xml (ignoring parseXML) (command line command).

User
	- Change DateTime to Date and Time and maybe include <time.h> later.
		- Maybe add total connection time.
	- Add possibility to ignore IDs (e.g. obsolete ones from old identities).
	- Prevent negative CurrentClientConnects.
	- Maybe add duplicate checks for reverse add functions (If XMLs are created without errors this shouldn't be required).
	- Add Connection Flag that can be used with parseXML.

parseXML
	- add try catch handler.
	- check if new logfiles were put in between old ones (would mess up the order of entries --> new XML).
	- check if old logfiles were deleted (--> new XML).
	- how to check if xml was already created ? (info.xmlinfo is finished before writing of xml starts).

parseLogs
	- Outsource functions and/or change loop parameter names for better overview.
	- Extend use of disconnect-messages.
	- skip comparison if XML isn't existing / empty / a directory.

fetchLogs
	- Maybe use ts3server_xxxx-xx-xx__xx_xx_xx.xxxxxx_1 logs for indication if the last logfile has to be read in again (server shutdown).

webinterface
	- Add sorting options.
	- Possibility to hide duplicate Names like Drumsticks1 or Drumsticks11 in the webinterface.
	- Add timer for creation of XML-File (runtime of program) and update table automatically afterwards.
	- Prevent duplicate processes.
*/