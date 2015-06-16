// checkFunctions.cpp : Control Functions.

#include <iostream>
#include <vector>
#include "User.h"

extern vector <User> UserList;
extern vector <string> Logs;
extern vector <string> parsedLogs;

// Checks if a DateTime is already existing for the current user.
bool IsDuplicateDateTime(unsigned int ID, string DateTime){
	for (unsigned int i = 0; i < UserList[ID].getDateTimeCount(); i++){
		if (UserList[ID].getUniqueDateTime(i) == DateTime){
			return true;
		}
	}
	return false;
}

// Checks if a Nickname is already existing for the current User.
bool IsDuplicateNickname(unsigned int ID, string Nickname){
	for (unsigned int i = 0; i < UserList[ID].getNicknameCount(); i++){
		if (UserList[ID].getUniqueNickname(i) == Nickname){
			return true;
		}
	}
	return false;
}

// Checks if an IP is already existing for the current User.
bool IsDuplicateIP(unsigned int ID, string IP){
	for (unsigned int i = 0; i < UserList[ID].getIPCount(); i++){
		if (UserList[ID].getUniqueIP(i) == IP){
			return true;
		}
	}
	return false;
}

// Checks if a log is already existing in the parsedLogs list.
bool IsDuplicateLog(string log){
	for (unsigned i = 0; i < parsedLogs.size(); i++){
		if (log == parsedLogs[i]) return true;
	}
	return false;
}