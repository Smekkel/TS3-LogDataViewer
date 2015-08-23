// File.h
// Author : Drumsticks1
// GitHub : https://github.com/Drumsticks1/TS3_EnhancedClientList

#include <iostream>
using namespace std;

// Class for the file data.
class File {
private:
	unsigned int channelID, uploadedByID;
	string uploadDateTime, filename, uploadedByNickname;

public:
	void addFile(string uploadDateTime, unsigned int channelID, string filename, string uploadedByNickname, unsigned int uploadedByID);

	string getUploadDateTime();
	unsigned int getChannelID();
	string getFilename();
	string getUploadedByNickname();
	unsigned int getUploadedByID();
};
